#define GLSLIFY 1
precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float value;
uniform vec2 px;

float Lum(vec3 c){
    return 0.299*c.r + 0.587*c.g + 0.114*c.b;
}
float BlendOverlayf(float base, float blend){
    return (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)));
}
vec3 BlendOverlay(vec3 base, vec3 blend){
    return vec3(BlendOverlayf(base.r, blend.r), BlendOverlayf(base.g, blend.g), BlendOverlayf(base.b, blend.b));
}
float BlendVividLightf(float base, float blend){
    float BlendColorBurnf = (((2.0 * blend) == 0.0) ? (2.0 * blend) : max((1.0 - ((1.0 - base) / (2.0 * blend))), 0.0));
    float BlendColorDodgef =  (((2.0 * (blend - 0.5)) == 1.0) ? (2.0 * (blend - 0.5)) : min(base / (1.0 - (2.0 * (blend - 0.5))), 1.0));
    return ((blend < 0.5) ? BlendColorBurnf : BlendColorDodgef);
}
vec3 BlendVividLight(vec3 base, vec3 blend){
    return vec3(BlendVividLightf(base.r, blend.r), BlendVividLightf(base.g, blend.g), BlendVividLightf(base.b, blend.b));
}

float normpdf(in float x, in float sigma) {
    return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;
}

vec3 blurMap() {
    //declare stuff
    const int mSize = 11;
    const int kSize = (mSize-1)/2;
    float kernel[mSize];
    vec3 final_colour = vec3(0.0);

    //create the 1-D kernel
    float sigma = 7.0;
    float Z = 0.0;
    for (int j = 0; j <= kSize; ++j){
        kernel[kSize+j] = kernel[kSize-j] = normpdf(float(j), sigma);
    }

    //get the normalization factor (as the gaussian has been clamped)
    for (int j = 0; j < mSize; ++j){
        Z += kernel[j];
    }

    //read out the texels
    for (int i=-kSize; i <= kSize; ++i){
        for (int j=-kSize; j <= kSize; ++j){
            final_colour += kernel[kSize+j] * kernel[kSize+i] * texture2D(uSampler, (vTextureCoord.xy + vec2(float(i),float(j))*px)).rgb;
        }
    }
    return vec3(final_colour/(Z*Z));
}

void main() {

    vec4 base4 = texture2D(uSampler, vTextureCoord.xy);

    vec3 blurMap = blurMap();
    vec3 base = base4.rgb;

    float intensity = (value < 0.0) ? (value / 2.0) : value;
    float lum = Lum(base);

    vec3 col = vec3(lum);
    vec3 mask = vec3(1.0 - pow(lum, 1.8));
    // invert blurred texture
    vec3 layer = vec3(1.0 - Lum(blurMap));
    vec3 detail = clamp(BlendVividLight(col, layer), 0.0, 1.0);
    // we get negative detail by inverting the detail layer
    vec3 inverse = mix(1.0 - detail, detail, (intensity+1.0)/2.0);

    gl_FragColor = vec4(BlendOverlay(base, mix(vec3(0.5), inverse, mask)), base4.a);
}
