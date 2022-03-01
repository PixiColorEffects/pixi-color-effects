precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec2 px;
uniform float m[9];
uniform float value;

void main(void) {
    vec4 c11 = texture2D(uSampler, vTextureCoord - px);
    vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - px.y));
    vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + px.x, vTextureCoord.y - px.y));

    vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - px.x, vTextureCoord.y) );
    vec4 c22 = texture2D(uSampler, vTextureCoord);
    vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + px.x, vTextureCoord.y) );

    vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - px.x, vTextureCoord.y + px.y) );
    vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + px.y) );
    vec4 c33 = texture2D(uSampler, vTextureCoord + px );

    vec4 color =
    c11 * m[0] + c12 * m[1] + c13 * m[2] +
    c21 * m[3] + c22 * m[4] + c23 * m[5] +
    c31 * m[6] + c32 * m[7] + c33 * m[8];

    gl_FragColor = color * value + (c22 * (1.0 - value));
}
