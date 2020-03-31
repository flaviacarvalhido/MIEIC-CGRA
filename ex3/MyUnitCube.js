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

                  //uma normal
            0.5,0.5,0.5,      //0
            -0.5,0.5,0.5,     //1
            -0.5,0.5,-0.5,    // 2- vértices superiores
            0.5,0.5,-0.5,     //3

            0.5,-0.5,0.5,     //4
            -0.5,-0.5,0.5 ,  //5
            -0.5,-0.5,-0.5,   //6 - vértices inferiores
            0.5,-0.5,-0.5,     //7

                  //duas normais
            0.5,0.5,0.5,      //0
            -0.5,0.5,0.5,     //1
            -0.5,0.5,-0.5,    // 2- vértices superiores
            0.5,0.5,-0.5,     //3

            0.5,-0.5,0.5,     //4
            -0.5,-0.5,0.5 ,  //5
            -0.5,-0.5,-0.5,   //6 - vértices inferiores
            0.5,-0.5,-0.5,     //7

                  //tres normais
            0.5,0.5,0.5,      //0
            -0.5,0.5,0.5,     //1
            -0.5,0.5,-0.5,    // 2- vértices superiores
            0.5,0.5,-0.5,     //3

            0.5,-0.5,0.5,     //4
            -0.5,-0.5,0.5 ,  //5
            -0.5,-0.5,-0.5,   //6 - vértices inferiores
            0.5,-0.5,-0.5,     //7

		];


            //criar 3 normais unitárias para cada vértice
            this.normals=[];

            for (var i = 0; i < 8; i++) {  //normais em x: percorre vertices, se x do vértice for positivo, normal positiva e vice versa
                  var x = this.vertices[i*3] > 0? 1: -1;
                  this.normals.push(x,0,0);
              }
              for (var i = 0; i < 8; i++) { //same para y
                  var y = this.vertices[i*3 +1] > 0? 1: -1;
                  this.normals.push(0,y,0);
              }
              for (var i = 0; i < 8; i++) { //same para z
                  var z = this.vertices[i*3 +2] > 0? 1: -1;
                  this.normals.push(0,0,z);
              }


		//Counter-clockwise reference of vertices
		this.indices = [
            2,1,0,      //positive y
            0,3,2,

            7,5,6,      //negative y
            4,5,7,
            
            4,1,5,      //positive z
            4,0,1,

            7,3,0,      //positive x
            0,4,7,

            6,2,3,      //negative z
            3,7,6,

            5,1,2,      //negative x
            2,6,5

		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;


            

      



		this.initGLBuffers();
	}
}