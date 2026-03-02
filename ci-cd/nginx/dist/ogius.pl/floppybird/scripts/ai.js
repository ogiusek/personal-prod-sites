function Ai() {
    this.player = new Player(false);
    this.Update = () => {
        // console.log('bread');
        if (animate == 2) {
            // this.player.Jump();
            this.JumpCheck();
        }
        this.player.Update();
    }
    this.JumpCheck = () => {
        let jump = Math.floor(Math.random() * 10);
        if (jump >= 9) {
            this.player.Jump();
        }
    }
    this.Reset = () => {
        this.player = new Player(false);
    }
}