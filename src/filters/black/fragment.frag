precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float value;

void main() {

    float bval = value / 255.0;
    float wval = (255.0 / (255.0 - value));

    vec3 color = texture2D(uSampler, vTextureCoord).rgb;
    color = color * wval - (bval *  wval);

    gl_FragColor = vec4(color, texture2D(uSampler, vTextureCoord).a);
}
