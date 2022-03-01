precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float value;
uniform vec2 px;
float thresh = .5;

void main() {
    vec4 sum = vec4(0);

    // mess of for loops due to gpu compiler/hardware limitations
    int j=-2;
    for( int i=-2; i<=2; i++) sum+=texture2D(uSampler,vTextureCoord+vec2(i,j)*px);
    j=-1;
    for( int i=-2; i<=2; i++) sum+=texture2D(uSampler,vTextureCoord+vec2(i,j)*px);
    j=0;
    for( int i=-2; i<=2; i++) sum+=texture2D(uSampler,vTextureCoord+vec2(i,j)*px);
    j=1;
    for( int i=-2; i<=2; i++) sum+=texture2D(uSampler,vTextureCoord+vec2(i,j)*px);
    j=2;
    for( int i=-2; i<=2; i++) sum+=texture2D(uSampler,vTextureCoord+vec2(i,j)*px);
    sum/=25.0;

    gl_FragColor= texture2D(uSampler, vTextureCoord);

    // use the blurred colour if it's bright enough
    if (length(sum) > thresh) {
        gl_FragColor += sum*value;
    }
}
