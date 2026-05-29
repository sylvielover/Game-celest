
window.StorageManager = {
    saveHighScore(score) {
        const current = this.getHighScore();
        if(score > current){
            localStorage.setItem("game_highscore", score);
        }
    },

    getHighScore() {
        return Number(localStorage.getItem("game_highscore")) || 0;
    }
};
