class Pipes {
    static pipes = [];
    static PipeCheck() {
        if (this.pipes[this.pipes.length - 1].xPos < window.innerWidth) {
            this.pipes.push(new Pipe(this.pipes[this.pipes.length - 1].xPos + 500));
            this.PipeCheck();
        }
        if (this.pipes[0].xPos + this.pipes[0].width < 0) {
            this.pipes.shift();
            player.countedPipes--;
            this.PipeCheck();
        }
    }
    static UpdatePipes() {
        for (let index = 0; index < this.pipes.length; index++) {
            this.pipes[index].Update();
        }
    }
    static Update() {
        this.PipeCheck();
        this.UpdatePipes();
    }
}