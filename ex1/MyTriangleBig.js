/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {  //passar info para o WEBGL
		
		this.vertices = [
			-2, 0, 0,	//0 ponto A
			0, 2, 0,	//1 ponto B
		    2, 0, 0,	//2 Ponto C
			
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