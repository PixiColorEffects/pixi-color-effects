
precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float value;

void main() {

    float bval = 0.0 / 255.0;
    float wval = (255.0 / (value - 255.0) * -1.0);

    vec3 color = texture2D(uSampler, vTextureCoord).rgb;
    color = color * wval - (bval *  wval);

    gl_FragColor = vec4(color, texture2D(uSampler, vTextureCoord).a);
}
