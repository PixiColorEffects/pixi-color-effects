precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float value;
uniform vec4 color;

float blendOverlay(float base, float blend) {
    return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}
vec3 blendOverlay(vec3 base, vec3 blend) {
    return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}
vec3 blendHardLight(vec3 base, vec3 blend) {
    return blendOverlay(blend,base);
}
vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
    return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}

void main() {
    vec4 base = texture2D(uSampler, vTextureCoord.xy);
    gl_FragColor = vec4(blendHardLight(base.rgb, color.rgb, value), base.a);
}
