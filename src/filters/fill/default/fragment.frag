precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float value;
uniform vec4 color;

void main() {
    vec4 base = texture2D(uSampler, vTextureCoord.xy);
    gl_FragColor = mix(base, color, value);
}
