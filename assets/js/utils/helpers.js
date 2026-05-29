
window.GameUtils = {
    clamp(value, min, max){
        return Math.max(min, Math.min(max, value));
    },

    random(min, max){
        return Math.random() * (max - min) + min;
    }
};
