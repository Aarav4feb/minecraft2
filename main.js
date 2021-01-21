var canvas = new fabric.Canvas("myCanvas")
var block_width = 30;
var block_height = 30;
player_x = 100;
player_y = 100;
var player_object = "";
block_object = "";

function update_player() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function update_block(block) {
    fabric.Image.fromURL(block,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object)
    });
}

window.addEventListener("keydown",kd)
function kd(e){
    x = e.keyCode
    console.log(x)

    if (x == 67) {
        update_block("cloud.jpg")
        console.log("c is pressed")
    }
   
    if (x == 68) {
        update_block("dark_green.png")
        console.log("d is pressed")
    }

    if (x == 71) {
        update_block("ground.png")
        console.log("g is pressed")
    }

    if (x == 76) {
        update_block("light_green.png")
        console.log("l is pressed")
    }

    if (x == 82) {
        update_block("roof.png")
        console.log("r is pressed")
    }

    if (x == 84) {
        update_block("trunk.jpg")
        console.log("t is pressed")
    }

    if (x == 85) {
        update_block("unique.png")
        console.log("u is pressed")
    }

    if (x == 76) {
        update_block("light_green.png")
        console.log("l is pressed")
    }

    if (x == 87) {
        update_block("wall.jpg")
        console.log("w is pressed")
    }

    if (x == 89) {
        update_block("yellow_wall.png")
        console.log("y is pressed")
    }

    if (e.shiftKey == true && x == 80) {
        console.log("p and shift are pressed together")
        block_width = block_width + 10 
        block_height = block_height + 10
        document.getElementById("width").innerHTML = block_width
        document.getElementById("height").innerHTML = block_height
    
    }

    if (e.shiftKey == true && x == 77) {
        console.log("m and shift are pressed together")
        block_width = block_width - 10
        block_height = block_height - 10
        document.getElementById("width").innerHTML = block_width
        document.getElementById("height").innerHTML = block_height
    }

    if (x == 37) {
        left()
        console.log("left key is pressed")
    }

    if (x == 38) {
        up()
        console.log("up key is pressed")
    }

    if (x == 39) {
        right()
        console.log("right key is pressed")
    }

    if (x == 40) {
        down()
        console.log("down key is pressed")
    }

}