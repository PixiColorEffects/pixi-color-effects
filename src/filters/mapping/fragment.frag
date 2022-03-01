#define GLSLIFY 1
precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D paletteMap;

void main() {
    lowp vec4 base = texture2D(uSampler, vTextureCoord.xy);
    float r = texture2D(paletteMap, vec2(base.r, 0)).r;
    float g = texture2D(paletteMap, vec2(base.g, 0)).g;
    float b = texture2D(paletteMap, vec2(base.b, 0)).b;
    gl_FragColor = vec4(r, g, b, base.a);
}
