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
        this.diamond.display();

        //tiangle
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);

        this.scene.translate(-Math.sqrt(2),Math.sqrt(2),0);
        this.scene.rotate(-Math.PI*3/4,0,0,1);

        this.triangle.display();
        this.scene.popMatrix();
        

        //parallelogram
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);
            
        this.scene.translate(-Math.sqrt(2),-Math.sqrt(2),0);
        this.scene.scale(-1,1,1);
        this.scene.rotate(Math.PI/4,0,0,1);
            
        this.parallelogram.display();
        this.scene.popMatrix();
        

        //triangle big
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);

        this.scene.translate(Math.sqrt(2),-Math.sqrt(2),0);
        this.scene.rotate(Math.PI/4,0,0,1);

        this.trianglebig.display();
        this.scene.popMatrix();

        //second triangle big
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);
        
        this.scene.translate(-Math.sqrt(2),0,0);
        this.scene.rotate(-Math.PI/4,0,0,1);

        this.trianglebig2.display();
        this.scene.popMatrix();

        
        //triangle small 
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);

        this.scene.translate(Math.sqrt(2)+1,Math.sqrt(2),0);

        this.trianglesmall.display();
        this.scene.popMatrix();

        //second triangle small
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.translate(-3*Math.sqrt(2)/2.0,-Math.sqrt(2)/2.0,0);
        
        this.scene.translate(2,-1.83,0);
        this.scene.rotate(Math.PI/2,0,0,1);

        this.trianglesmall2.display();
        this.scene.popMatrix();

        
       
    }
	
}