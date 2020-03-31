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

        this.scene.customMaterial.apply();
        this.diamond.display();


        

        //triangle
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);

        this.scene.translate(-Math.sqrt(2),Math.sqrt(2),0);
        this.scene.rotate(-Math.PI*3/4,0,0,1);

        //material
        this.pink = new CGFappearance(this.scene);
        this.pink.setSpecular(1,1,1,1);
        this.pink.setDiffuse(1,0.5,1,1);
        this.pink.setShininess(10);
        this.pink.setAmbient(1,0.5,1,1);
        this.pink.apply();


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
        this.yellow = new CGFappearance(this.scene);
        this.yellow.setSpecular(1,1,1,1);
        this.yellow.setDiffuse(1,1,0.2,1);
        this.yellow.setShininess(10);
        this.yellow.setAmbient(1,1,0.2,1);
        this.yellow.apply();


        this.parallelogram.display();
        this.scene.popMatrix();
        

        //triangle big
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);

        this.scene.translate(Math.sqrt(2),-Math.sqrt(2),0);
        this.scene.rotate(Math.PI/4,0,0,1);

        //material
        this.blue = new CGFappearance(this.scene);
        this.blue.setSpecular(1,1,1,1);
        this.blue.setDiffuse(0.2,0.6,1,1);
        this.blue.setShininess(10);
        this.blue.setAmbient(0.2,0.6,1,1);
        this.blue.apply();


        this.trianglebig.display();
        this.scene.popMatrix();


        
        //second triangle big
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);
        
        this.scene.translate(-Math.sqrt(2),0,0);
        this.scene.rotate(-Math.PI/4,0,0,1);
        
        //material
        this.orange = new CGFappearance(this.scene);
        this.orange.setSpecular(1,1,1,1);
        this.orange.setDiffuse(1,0.55,0.1,1);
        this.orange.setShininess(10);
        this.orange.setAmbient(1,0.55,0.1,1);
        this.orange.apply();


        this.trianglebig2.display();
        this.scene.popMatrix();

        
        //triangle small 
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);

        this.scene.translate(Math.sqrt(2)+1,Math.sqrt(2),0);

        //material
        this.red = new CGFappearance(this.scene);
        this.red.setSpecular(1,1,1,1);
        this.red.setDiffuse(1,0,0,1);
        this.red.setAmbient(1,0,0,1);
        this.red.setShininess(10);
        this.red.apply();

        this.trianglesmall.display();
        this.scene.popMatrix();

        //second triangle small
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);
        
        this.scene.translate(2,-1.83,0);
        this.scene.rotate(Math.PI/2,0,0,1);

        //material
        this.violet = new CGFappearance(this.scene);
        this.violet.setSpecular(1,1,1,1);
        this.violet.setDiffuse(0.5,0,1,1);
        this.violet.setShininess(10);
        this.violet.setAmbient(0.5,0,1,1);
        this.violet.apply();

        this.trianglesmall2.display();
        this.scene.popMatrix();

        
       
    }
	
}