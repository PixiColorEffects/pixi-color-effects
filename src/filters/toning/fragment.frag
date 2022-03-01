precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D paletteMap;
uniform float value;

float luma(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
    lowp vec4 base = texture2D(uSampler, vTextureCoord.xy);
    float avg = luma(base.rgb);
    float r = texture2D(paletteMap, vec2(avg, 0)).r;
    float g = texture2D(paletteMap, vec2(avg, 0)).g;
    float b = texture2D(paletteMap, vec2(avg, 0)).b;
    gl_FragColor = mix(base, vec4(r, g, b, base.a), value);
}
