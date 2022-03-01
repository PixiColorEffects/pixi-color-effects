precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float value;
uniform vec4 color;

float blendColorBurn(float base, float blend) {
    return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}
vec3 blendColorBurn(vec3 base, vec3 blend) {
    return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}
vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
    return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}

void main() {
    vec4 base = texture2D(uSampler, vTextureCoord.xy);
    gl_FragColor = vec4(blendColorBurn(base.rgb, color.rgb, value), base.a);
}
