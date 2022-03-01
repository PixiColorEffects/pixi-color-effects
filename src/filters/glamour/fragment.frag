precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float value;
uniform vec2 px;

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

float luma(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {

    vec4 base = texture2D(uSampler, vTextureCoord);
    vec3 color = blurMap();

    color = vec3(luma(color));

    color = vec3(
    (base.r <= 0.5) ? (2.0 * base.r * color.r) : (1.0 - 2.0 * (1.0 - base.r) * (1.0 - color.r)),
    (base.g <= 0.5) ? (2.0 * base.g * color.g) : (1.0 - 2.0 * (1.0 - base.g) * (1.0 - color.g)),
    (base.b <= 0.5) ? (2.0 * base.b * color.b) : (1.0 - 2.0 * (1.0 - base.b) * (1.0 - color.b))
    );

    gl_FragColor = mix(base, vec4(color, base.a), value);
}
