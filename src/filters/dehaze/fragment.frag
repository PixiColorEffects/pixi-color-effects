#define GLSLIFY 1;
precision highp float;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float value;  // -1.0 ~ 1.0

uniform vec2 size;

float hazeMap(vec4 base) {
    vec3 color = vec3(1.0, 1.0, 1.0);
    vec2 step = vec2(1.0 / size.xy);
    const int patchRadius = 1; // the half size for shift in 3 x 3 patch.
    for (int i = -patchRadius; i <= patchRadius; ++i) {
        for (int j = -patchRadius; j <= patchRadius; ++j) {
            vec2 uv = clamp(vTextureCoord + (vec2(i, j) * step), 0.0, 1.0);
            color = min(color, base.rgb);
        }
    }
    return min(color.r, min(color.g, color.b));
}

void main() {

    lowp vec4 base = texture2D(uSampler, vTextureCoord.xy);
    lowp float haze = hazeMap(base);

    float transmission = 1.0 - 0.95 * haze;
    const float A = 0.95; //0.95 intensity. We can consider to collect 0.1% brightest pixel from the dark channel image.
    const float t0 = 0.1; //0.1 in the paper, we can increase it for solving the color bleeding.
    float t = mix(1.0, max(t0, transmission), value);
    vec3 J = (base.rgb - A) / t + A;
    gl_FragColor = vec4(J, base.a);
}
