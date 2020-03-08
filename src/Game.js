var Game = {
    Init : function () {
        // Start Game
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')

        if(ctx){
            Utils.Log(ELogChannels.DISPLAY, 'Context successfully retrieved')
        }
        else {
            Utils.Log(ELogChannels.ERROR, 'Failed to load context :(')
        }
    }
}