precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float value;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.g = clamp(color.g + value, 0.0, 1.0);
    gl_FragColor = color;
}
