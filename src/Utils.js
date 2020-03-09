var LoadedShaders = []

var Utils = {
    Log : function(channel, message) {
        switch (channel) {
            case 'display':
                console.log(message);
                break;

            case 'warning':
                console.warn(message);
                break;

            case 'error':
                console.error(message);
        }
    },

    LoadShaders : function() {
        for (let idx = 0; idx < ShadersToLoad.shaders.length; idx++) {
            s = ShadersToLoad.shaders[idx];

            LoadedShaders.push(s.name);
            Shader.InitShader(Game.gl, s.vs, s.fs);
        }
    }
}