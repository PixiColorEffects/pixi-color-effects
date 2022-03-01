precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float value;
uniform float size;
void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    float dist = distance(vTextureCoord, vec2(0.5, 0.5));
    color.rgb *= smoothstep(0.8, size * 0.799, dist * (value*0.75 + size*2.0));
    gl_FragColor = color;
}
