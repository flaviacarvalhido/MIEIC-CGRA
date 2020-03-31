attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

//map and tex to apply 
uniform sampler2D waterMap;
uniform sampler2D waterTex;

#define M_FACTOR    0.03  //to attenuate offset

varying vec4 coord;
uniform float timeFactor;       //to move


void main() {
    vTextureCoord = aTextureCoord;

    vec4 watermap = texture2D(waterMap, vec2(0.0, 0.1) + vTextureCoord+timeFactor*(M_FACTOR,M_FACTOR));
    vec4 watertex = texture2D(waterTex, vTextureCoord+timeFactor*(M_FACTOR,M_FACTOR));      //apply texture


    vec3 offset_v =vec3(0,0,0);
    offset_v = aVertexNormal*M_FACTOR*watermap.b;


	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset_v, 1.0); //move vertices

	
}