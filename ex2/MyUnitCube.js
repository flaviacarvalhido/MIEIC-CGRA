/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {  //passar info para o WEBGL
		
		this.vertices = [
            0.5,0.5,0.5,
            -0.5,0.5,0.5,
            -0.5,0.5,-0.5,  //vértices superiores
            0.5,0.5,-0.5,

            0.5,-0.5,0.5,
            0.5,-0.5,-0.5,  
            -0.5,-0.5,-0.5,    //vértices inferiores
            -0.5,-0.5,0.5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            2,1,0,      //positive y
            0,3,2,

            6,7,5,      //negative y
            5,7,4,
            
            4,1,7,      //positive z
            4,0,1,

            5,3,0,      //positive x
            0,4,5,

            6,2,3,      //negative z
            3,5,6,

            7,1,2,      //negative x
            2,6,7

		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}