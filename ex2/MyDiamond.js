/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {  //passar info para o WEBGL
		
		this.vertices = [
			-1, 0, 0,	//0 ponto A
			0, -1, 0,	//1 ponto B
			0, 1, 0,	//2 Ponto C
			1, 0, 0		//3 ponto D
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,  //ABC
			1, 3, 2	  //DCB
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

