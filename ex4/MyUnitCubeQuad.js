/**
 * MyObject
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);
        this.down=new MyQuad(scene);
        this.up=new MyQuad(scene);
        this.front=new MyQuad(scene);
        this.back=new MyQuad(scene);
        this.left=new MyQuad(scene);
        this.right=new MyQuad(scene);

        this.initMat();
		
    }

    initMat(){

        this.down.texCoords = [
            0,0,
            1,0,
            0,1,
            1,1,

        ];
        this.down.updateTexCoordsGLBuffers();

        this.up.texCoords = [
            0,0,
            1,0,
            0,1,
            1,1,

        ];
        this.up.updateTexCoordsGLBuffers();

        this.front.texCoords = [
            1,1,
            0,1,
            1,0,
            0,0,

        ];
        this.front.updateTexCoordsGLBuffers();

        this.back.texCoords = [
            1,1,
            0,1,
            1,0,
            0,0,

        ];
        this.back.updateTexCoordsGLBuffers();

        this.right.texCoords = [
            1,1,
            0,1,
            1,0,
            0,0,

        ];
        this.right.updateTexCoordsGLBuffers();

        this.left.texCoords = [
            1,1,
            0,1,
            1,0,
            0,0,

        ];
        this.left.updateTexCoordsGLBuffers();


        this.newmatSide= new CGFappearance(this.scene);
        this.newmatSide.setAmbient(0.1, 0.1, 0.1, 1);
        this.newmatSide.setDiffuse(0.9, 0.9, 0.9, 1);
        this.newmatSide.setSpecular(0.1, 0.1, 0.1, 1);
        this.newmatSide.setShininess(10.0);
        this.newmatSide.loadTexture('images/mineSide.png');
        this.newmatSide.setTextureWrap('REPEAT', 'REPEAT');


        this.newmatTop= new CGFappearance(this.scene);
        this.newmatTop.setAmbient(0.1, 0.1, 0.1, 1);
        this.newmatTop.setDiffuse(0.9, 0.9, 0.9, 1);
        this.newmatTop.setSpecular(0.1, 0.1, 0.1, 1);
        this.newmatTop.setShininess(10.0);
        this.newmatTop.loadTexture('images/mineTop.png');
        this.newmatTop.setTextureWrap('REPEAT', 'REPEAT');


        this.newmatBottom= new CGFappearance(this.scene);
        this.newmatBottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.newmatBottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.newmatBottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.newmatBottom.setShininess(10.0);
        this.newmatBottom.loadTexture('images/mineBottom.png');
        this.newmatBottom.setTextureWrap('REPEAT', 'REPEAT');

    }

	
    display(){



        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.newmatBottom.apply();

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.down.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.newmatTop.apply();

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.up.display();
        this.scene.popMatrix();

        
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.newmatSide.apply();

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.left.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.newmatSide.apply();

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.right.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI,0,1,0);
        this.newmatSide.apply();

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.back.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.newmatSide.apply();

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.front.display();
        this.scene.popMatrix();

    }
}
