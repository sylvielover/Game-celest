
window.GameStateManager = {
    states: {
        START: "start",
        PLAYING: "playing",
        PAUSED: "paused",
        GAMEOVER: "gameover",
        WIN: "win"
    },

    currentState: "start",

    setState(state){
        this.currentState = state;
        console.log("Nuevo estado:", state);
    },

    getState(){
        return this.currentState;
    }
};
