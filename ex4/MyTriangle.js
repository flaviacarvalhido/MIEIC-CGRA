/**
 * My Triangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {  //passar info para o WEBGL
		
		this.vertices = [
			-1, 1, 0,	//0 ponto A
			-1, -1, 0,	//1 ponto B
			1, -1, 0,	//2 Ponto C
			
		];

		this.normals=[];

		for(var i =0; i<3;i++){
			this.normals.push(0,0,1);
		}


		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,  //ABC
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}