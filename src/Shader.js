var ShaderUtils = {

    InitShader = function(gl, VSSource, FSSource)
    {
        const VertexShader = LoadShader(gl, gl.VERTEX_SHADER, VSSource);
        const FragmentShader = LoadShader(gl, gl.FRAGMENT_SHADER, FSSource);

        // Create the program
        const ShaderProgram = gl.createProgram();
        gl.attachShader(ShaderProgram, VertexShader);
        gl.attachShader(ShaderProgram, FragmentShader);
        gl.linkProgram(ShaderProgram);

        if(!gl.getProgramParameter(ShaderProgram, gl.LINK_STATUS))
        {
            Utils.Log(ELogChannels.ERROR, 'Error linking shader: \n\tVS: ' + VSSource + '\n\tFS: ' + FSSource);
            return null;
        }

        return ShaderProgram;
    }
}