#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D waterMap;
uniform sampler2D waterTex;
uniform float timeFactor;


#define greyS 0.4
#define M_FACTOR 0.01


void main() {

	vec4 color = texture2D(waterTex, vTextureCoord + timeFactor*(M_FACTOR,-M_FACTOR));
	vec4 map = texture2D(waterMap, vec2(0.0,0.1) + vTextureCoord + timeFactor * (M_FACTOR,-M_FACTOR));

	
	color=vec4(color.r - map.r + greyS, color.g - map.g + greyS, color.b - map.b + greyS, 1.0);
	
	gl_FragColor = color;
}