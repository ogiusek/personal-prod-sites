const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}, false);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var xVel = 5;
Pipes.pipes.push(new Pipe());
Pipes.pipes[0].Update();
let player = new Player();
var animate = 1;

// let enemys = [];
// enemys.push(new Ai());

function Update() {
    Pipes.Update();
    player.Update();
    // for (let index = 0; index < enemys.length; index++) {
    // enemys[index].Update();
    // }
}

function Animate() {
    if (animate > 0) {
        requestAnimationFrame(Animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        Update();
    } else {
        Update();
    }
}

function click(event = null) {
    if (animate >= 1) {
        player.Jump();
        animate = 2;
    } else if (animate == 0) {
        animate = 1;
        xPos = 0;
        xVel = 5;
        player = new Player();
        Pipes.pipes = [];
        Pipes.pipes.push(new Pipe());
        Animate();
    }
}
Animate();
window.addEventListener('click', () => { click(); }, false);
window.addEventListener('keydown', (event) => { click(event); }, false);