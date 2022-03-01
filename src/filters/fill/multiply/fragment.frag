precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float value;
uniform vec4 color;

vec3 blendMultiply(vec3 base, vec3 blend) {
    return base*blend;
}
vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
    return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}

void main() {
    vec4 base = texture2D(uSampler, vTextureCoord.xy);
    gl_FragColor = vec4(blendMultiply(base.rgb, color.rgb, value), base.a);
}
