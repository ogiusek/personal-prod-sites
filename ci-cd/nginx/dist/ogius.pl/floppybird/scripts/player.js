function Player(animating = true) {
    this.range = 0;
    this.yPos = (window.innerHeight / 2) - this.range;
    this.radius = 40;
    this.yVel = 0;
    this.gravity = 3;
    this.died = false;
    this.score = 0;
    this.countedPipes = 0;
    this.Jump = () => {
        if (!this.died) {
            this.yVel = this.gravity * 3;
            if (animating) {
                var audio = new Audio('audio/fly.mp3');
                audio.play();
            }
        } else {
            console.log('ima dead');
        }
    }

    this.Draw = () => {
        // c.beginPath();
        // c.arc(this.radius + 10, this.yPos, this.radius, 0.0, Math.PI * 2, false);
        // c.fillStyle = 'yellow';
        // c.fill();
        const bird = new Image()
        bird.src = "img/bird.png";
        c.drawImage(bird, 10, this.yPos - this.radius, this.radius * 2, this.radius * 2);
    }

    this.Move = () => {
        if (this.yVel >= -this.gravity * 5) {
            this.yVel -= this.gravity / 5;
        }
        if (this.yPos + this.radius < window.innerHeight) {
            this.yPos -= this.yVel;
        } else {
            this.yPos = window.innerHeight - this.radius;
            if (animating) {
                animate = 0;
            }
        }
    }

    this.ColisionCheck = function() {
        if (this.yPos - this.radius <= 0 || this.yPos + this.radius >= window.innerHeight) {
            return false;
        }
        for (let index = 0; index < Pipes.pipes.length; index++) {
            const pipeXPos = Pipes.pipes[index].xPos;
            const pipeWidth = Pipes.pipes[index].width;
            const playerXPos = 10;
            const playerWidth = this.radius * 2;
            if (pipeXPos + pipeWidth >= playerXPos &&
                pipeXPos <= playerXPos + playerWidth
            ) {
                const playerYPos = player.yPos;
                const pipeHeight = Pipes.pipes[index].height;
                const pipeGap = Pipes.pipes[index].gap;
                if (pipeHeight >= playerYPos - playerWidth / 2 ||
                    pipeHeight + pipeGap <= playerYPos + playerWidth / 2) {
                    return false;
                }
            }
        }
        return true;
    }

    this.CountPoints = () => {
        for (let index = this.countedPipes; index < Pipes.pipes.length; index++) {
            const pipeXPos = Pipes.pipes[index].xPos;
            const pipeWidth = Pipes.pipes[index].width;
            const playerXPos = 10;
            if (pipeXPos + pipeWidth <= playerXPos) {
                this.score++;
                if (animating) {
                    document.getElementById('score').innerText = this.score;
                    var audio = new Audio('audio/score.mp3');
                    audio.play();
                } else {
                    console.log(this.score);
                }
                this.countedPipes++;
            }

        }
    }

    this.Update = () => {
        if (!animating && animate == 2) {
            this.Move();
        } else if (animate == 2 || this.died) {
            this.Move();
        }
        if (this.ColisionCheck()) {
            this.Draw();
            if (!this.died) {
                this.CountPoints();
            }
        } else {
            this.Die();
        }
    }

    this.Die = () => {
        if (animating) {
            xVel = 0;
        }
        this.died = true;
        this.Draw();
    }
}