function roll_dices(){
  var x =Math.floor(Math.random()*6)+1;
	var y =Math.floor(Math.random()*6)+1;
 	var image_p1 = "dice" + x + ".png";
  var image_p2 = "dice" + y + ".png";
	return [image_p1, image_p2]
}

function actualizar(){
var result=roll_dices();
var p1_dice=result[0];
var p2_dice=result[1];
document.querySelector("img.img1").setAttribute("src", "/images/"+ p1_dice);
document.querySelector("img.img2").setAttribute("src", "/images/"+p2_dice);
}

document.getElementById("btn").addEventListener("click", actualizar);ñ