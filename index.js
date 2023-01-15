const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 700;

const map = new Image();
map.src = "./img/map.png";

let mapx = -240;
let mapy = -4530;

const player = new Image();
player.src = "./img/playerDown.png";

const keys = {
    w: {
        pressed : false
    },
    a: {
        pressed : false
    },
    s: {
        pressed : false
    },
    d: {
        pressed : false
    }

}

function animate() {
    window.requestAnimationFrame(animate);
    c.drawImage(map,mapx, mapy);
    c.drawImage(
        player,
        0,
        0,
        player.width/4,
        player.height,
        canvas.width/2 - player.width/8,
        canvas.height/2 - player.height/2,
        player.width/4,
        player.height
        );

    if(keys.w.pressed)
        mapy += 3;
    if(keys.a.pressed)
        mapx += 3;
    if(keys.s.pressed)
        mapy -= 3;
    if(keys.d.pressed)
        mapx -= 3;

}

map.onload = () => {
    c.drawImage(map,-240,-4530);
    c.drawImage(
        player,
        0,
        0,
        player.width/4,
        player.height,
        canvas.width/2 - player.width/8,
        canvas.height/2 - player.height/2,
        player.width/4,
        player.height
        );
}
animate();

window.addEventListener("keydown" , (e) => {
    if(e.key == "w"){
        keys.w.pressed = true;
    }
    if(e.key == "a"){
        keys.a.pressed = true;
    }
    if(e.key == "s"){
        keys.s.pressed = true;
    }
    if(e.key == "d"){
        keys.d.pressed = true;
    }

} )

window.addEventListener("keyup" , (e) => {
    if(e.key == "w"){
        keys.w.pressed = false;
    }
    if(e.key == "a"){
        keys.a.pressed = false;
    }
    if(e.key == "s"){
        keys.s.pressed = false;
    }
    if(e.key == "d"){
        keys.d.pressed = false;
    }
} )
