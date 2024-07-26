var url = 'https://twitter.com/triacontane';
if (Utils.isNwjs()) {
    var exec = require('child_process').exec;
    switch (process.platform) {
        case 'win32':
            exec('rundll32.exe url.dll,FileProtocolHandler  "' + url + '"');
            break;
        default:
            exec('open "' + url + '"');
            break;
    }
} else {
    window.open(url);
}
