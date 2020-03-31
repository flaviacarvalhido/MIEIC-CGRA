/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {  //passar info para o WEBGL
		
		this.vertices = [
			0, 0, 0,	//0 ponto A
			1, 0, 0,	//1 ponto B
			1, 1, 0,	//2 Ponto C
            1, 0, 0,		//3 ponto D
            2,1,0,
            2,0,0,
            3,1,0,
		];



		this.normals=[];

		for(var i =0; i<8;i++){
			this.normals.push(0,0,1);
		}


		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,  //ABC
            2,3,4,
            4,3,5,
            5,6,4,
            2, 1, 0,  //double-sided (switch 1 index with third)!!
            4,3,2,
            5,3,4,
            4,6,5,
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}