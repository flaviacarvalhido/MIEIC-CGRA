/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {  //passar info para o WEBGL
		
		this.vertices = [
			-1, 0, 0,	//0 ponto A
			0, 1, 0,	//1 ponto B
			1, 0, 0,	//2 Ponto C
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			2, 1, 0,  //ABC
			
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}