


function  createPiece(index,piece,rows,cols) {
	initx[index]=cols;
	initz[index]=rows;
	var loader = new THREE.JSONLoader();
      loader.load( "models/"+ piece+".js", function(geometry,materials){
        var material = new THREE.MeshLambertMaterial(materials);
        meshPiece[index] = new THREE.Mesh(geometry,new THREE.MeshFaceMaterial( materials) );
       
	  meshPiece[index].position.x=(squareSize*(cols) );
	  
	  meshPiece[index].position.y=0;
	  meshPiece[index].position.z=(squareSize*(rows) );
	  meshPiece[index].scale.y=1;
	  meshPiece[index].scale.x=1;
	  meshPiece[index].scale.z=1;

		meshPiece[index].castShadow= true;
		
	  scene.add(meshPiece[index]);
      });
	  
	  }
	
	