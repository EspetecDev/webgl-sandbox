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
    }
}