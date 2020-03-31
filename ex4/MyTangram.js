/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
		this.diamond = new MyDiamond(scene);

        //exercise 1.1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.triangle=new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);

        //exercise 1.2
        this.trianglebig=new MyTriangleBig(scene);
        this.trianglesmall=new MyTriangleSmall(scene);

        //exercise 2.1
        this.trianglebig2=new MyTriangleBig(scene);
        this.trianglesmall2=new MyTriangleSmall(scene);


        this.initMat(this.scene);
    }

    initMat(){
    
        this.pink = new CGFappearance(this.scene);
        this.pink.setSpecular(1,1,1,1);
        this.pink.setDiffuse(1,0.5,1,1);
        this.pink.setShininess(10);
        this.pink.setAmbient(1,0.5,1,1);


        this.yellow = new CGFappearance(this.scene);
        this.yellow.setSpecular(1,1,1,1);
        this.yellow.setDiffuse(1,1,0.2,1);
        this.yellow.setShininess(10);
        this.yellow.setAmbient(1,1,0.2,1);


        this.blue = new CGFappearance(this.scene);
        this.blue.setSpecular(1,1,1,1);
        this.blue.setDiffuse(0.2,0.6,1,1);
        this.blue.setShininess(10);
        this.blue.setAmbient(0.2,0.6,1,1);


        this.orange = new CGFappearance(this.scene);
        this.orange.setSpecular(1,1,1,1);
        this.orange.setDiffuse(1,0.55,0.1,1);
        this.orange.setShininess(10);
        this.orange.setAmbient(1,0.55,0.1,1);

        this.red = new CGFappearance(this.scene);
        this.red.setSpecular(1,1,1,1);
        this.red.setDiffuse(1,0,0,1);
        this.red.setAmbient(1,0,0,1);
        this.red.setShininess(10);

        this.violet = new CGFappearance(this.scene);
        this.violet.setSpecular(1,1,1,1);
        this.violet.setDiffuse(0.5,0,1,1);
        this.violet.setShininess(10);
        this.violet.setAmbient(0.5,0,1,1);



        //materials
        //ver tangram_lines.png!!!
		this.diamond.texCoords = [
			0, 0.5,
			0.25, 0.75,
			0.25,0.25,
			0.5, 0.5,

		];
        this.diamond.updateTexCoordsGLBuffers();

        this.newmatDiamond= new CGFappearance(this.scene);
        this.newmatDiamond.setAmbient(0.1, 0.1, 0.1, 1);
        this.newmatDiamond.setDiffuse(0.9, 0.9, 0.9, 1);
        this.newmatDiamond.setSpecular(0.1, 0.1, 0.1, 1);
        this.newmatDiamond.setShininess(10.0);
        this.newmatDiamond.loadTexture('images/tangram.png');
        this.newmatDiamond.setTextureWrap('REPEAT', 'REPEAT');


		this.parallelogram.texCoords = [
			0.25, 0.75,
			0.75, 0.75,
			0.5, 1,
            1, 1,
            
            0.25, 0.75,
			0.75, 0.75,
			0.5, 1,
			1, 1,

        ];
        this.parallelogram.updateTexCoordsGLBuffers();

        this.newmatParallelogram= new CGFappearance(this.scene);
        this.newmatParallelogram.setAmbient(0.1, 0.1, 0.1, 1);
        this.newmatParallelogram.setDiffuse(0.9, 0.9, 0.9, 1);
        this.newmatParallelogram.setSpecular(0.1, 0.1, 0.1, 1);
        this.newmatParallelogram.setShininess(10.0);
        this.newmatParallelogram.loadTexture('images/tangram.png');
        this.newmatParallelogram.setTextureWrap('REPEAT', 'REPEAT');


        this.triangle.texCoords = [
            0,0.5,
            0,1,
            0.5,1,

        ];
        this.triangle.updateTexCoordsGLBuffers();

        this.newmatTriangle= new CGFappearance(this.scene);
        this.newmatTriangle.setAmbient(0.1, 0.1, 0.1, 1);
        this.newmatTriangle.setDiffuse(0.9, 0.9, 0.9, 1);
        this.newmatTriangle.setSpecular(0.1, 0.1, 0.1, 1);
        this.newmatTriangle.setShininess(10.0);
        this.newmatTriangle.loadTexture('images/tangram.png');
        this.newmatTriangle.setTextureWrap('REPEAT', 'REPEAT');


        this.trianglesmall.texCoords = [
            0.25,0.75,
            0.5,0.5,
            0.75,0.75,

        ];
        this.trianglesmall.updateTexCoordsGLBuffers();

        this.newmatTrianglesmall= new CGFappearance(this.scene);
        this.newmatTrianglesmall.setAmbient(0.1, 0.1, 0.1, 1);
        this.newmatTrianglesmall.setDiffuse(0.9, 0.9, 0.9, 1);
        this.newmatTrianglesmall.setSpecular(0.1, 0.1, 0.1, 1);
        this.newmatTrianglesmall.setShininess(10.0);
        this.newmatTrianglesmall.loadTexture('images/tangram.png');
        this.newmatTrianglesmall.setTextureWrap('REPEAT', 'REPEAT');

        this.trianglebig.texCoords = [
            0,0,
            1,0,
            0.5,0.5,

        ];
        this.trianglebig.updateTexCoordsGLBuffers();

        this.newmatTrianglebig= new CGFappearance(this.scene);
        this.newmatTrianglebig.setAmbient(0.1, 0.1, 0.1, 1);
        this.newmatTrianglebig.setDiffuse(0.9, 0.9, 0.9, 1);
        this.newmatTrianglebig.setSpecular(0.1, 0.1, 0.1, 1);
        this.newmatTrianglebig.setShininess(10.0);
        this.newmatTrianglebig.loadTexture('images/tangram.png');
        this.newmatTrianglebig.setTextureWrap('REPEAT', 'REPEAT');


        this.trianglesmall2.texCoords = [
            0,0,
            0.25,0.25,
            0,0.5,

        ];
        this.trianglesmall2.updateTexCoordsGLBuffers();

        this.newmatTrianglesmall2= new CGFappearance(this.scene);
        this.newmatTrianglesmall2.setAmbient(0.1, 0.1, 0.1, 1);
        this.newmatTrianglesmall2.setDiffuse(0.9, 0.9, 0.9, 1);
        this.newmatTrianglesmall2.setSpecular(0.1, 0.1, 0.1, 1);
        this.newmatTrianglesmall2.setShininess(10.0);
        this.newmatTrianglesmall2.loadTexture('images/tangram.png');
        this.newmatTrianglesmall2.setTextureWrap('REPEAT', 'REPEAT');


        this.trianglebig2.texCoords = [
            1,0,
            1,1,
            0.5,0.5,

        ];
        this.trianglebig2.updateTexCoordsGLBuffers();

        this.newmatTrianglebig2= new CGFappearance(this.scene);
        this.newmatTrianglebig2.setAmbient(0.1, 0.1, 0.1, 1);
        this.newmatTrianglebig2.setDiffuse(0.9, 0.9, 0.9, 1);
        this.newmatTrianglebig2.setSpecular(0.1, 0.1, 0.1, 1);
        this.newmatTrianglebig2.setShininess(10.0);
        this.newmatTrianglebig2.loadTexture('images/tangram.png');
        this.newmatTrianglebig2.setTextureWrap('REPEAT', 'REPEAT');
    }
    
    display(){

        

        //applies the rotation and translation to all objects on scene
        var r= [
			Math.cos(Math.PI/4.0), Math.sin(Math.PI/4.0), 0, 0,	
			-Math.sin(Math.PI/4.0), Math.cos(Math.PI/4.0), 0, 0,	
			0, 0, 1, 0,	
			0, 0, 0, 1		
        ];
        
        var t=[
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            3*Math.sqrt(2)/2.0,Math.sqrt(2)/2.0,0,1
        ];

        this.scene.multMatrix(t);
        this.scene.multMatrix(r);

        //FOR CODE BELOW:
        //push,display,pop to aply transformations to only one object!
        //first rotate and first translate is to undo the transformations applied above with multMatrix
        
        //diamond
        this.newmatDiamond.apply();
        this.diamond.display();


        

        //triangle
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);

        this.scene.translate(-Math.sqrt(2),Math.sqrt(2),0);
        this.scene.rotate(-Math.PI*3/4,0,0,1);

        //material
        //this.pink.apply();
        this.newmatTriangle.apply();


        this.triangle.display();
        this.scene.popMatrix();
        
        

        //parallelogram
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);
            
        this.scene.translate(-Math.sqrt(2),-Math.sqrt(2),0);
        this.scene.scale(-1,1,1);
        this.scene.rotate(Math.PI/4,0,0,1);
            
        //material
        //this.yellow.apply();
        this.newmatParallelogram.apply();


        this.parallelogram.display();
        this.scene.popMatrix();
        

        //triangle big
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);

        this.scene.translate(Math.sqrt(2),-Math.sqrt(2),0);
        this.scene.rotate(Math.PI/4,0,0,1);

        //material
        //this.blue.apply();
        this.newmatTrianglebig.apply();


        this.trianglebig.display();
        this.scene.popMatrix();


        
        //second triangle big
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);
        
        this.scene.translate(-Math.sqrt(2),0,0);
        this.scene.rotate(-Math.PI/4,0,0,1);
        
        //material
        //this.orange.apply();
        this.newmatTrianglebig2.apply();


        this.trianglebig2.display();
        this.scene.popMatrix();

        
        //triangle small 
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);

        this.scene.translate(Math.sqrt(2)+1,Math.sqrt(2),0);

        //material
        //this.red.apply();
        this.newmatTrianglesmall.apply();

        this.trianglesmall.display();
        this.scene.popMatrix();


        //second triangle small
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);
        
        this.scene.translate(2,-1.83,0);
        this.scene.rotate(Math.PI/2,0,0,1);

        //material
        //this.violet.apply();
        this.newmatTrianglesmall2.apply();

        this.trianglesmall2.display();
        this.scene.popMatrix();

        
       
    }
	
}