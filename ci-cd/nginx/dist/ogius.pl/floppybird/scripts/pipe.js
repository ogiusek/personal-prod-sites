function Pipe(x = 500, y = Math.random() * (window.innerHeight - 300), gap = 250) {
    this.xPos = x;
    this.height = y;
    this.width = 50;
    this.gap = gap;
    this.Draw = () => {
        const upPipe = new Image()
        upPipe.src = "img/pipeUp.png";
        // c.fillStyle = 'url(floppyBird/img/pipeUp.png)';
        c.drawImage(upPipe, this.xPos, 0, this.width, this.height);
        // c.fillRect(this.xPos, 0, this.width, this.height);
        const downPipe = new Image()
        downPipe.src = "img/pipeDown.png";
        c.drawImage(downPipe, this.xPos, this.height + this.gap, this.width, window.innerHeight - this.height - this.gap);
        // c.fillRect(this.xPos, this.height + this.gap, this.width, window.innerHeight - this.height - this.gap);
    }
    this.Move = () => {
        this.xPos -= xVel;
    }
    this.Update = () => {
        if (animate == 2) {
            this.Move();
        }
        this.Draw();
    }
}