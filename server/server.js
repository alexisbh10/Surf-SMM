const NodeMediaServer = require('node-media-server');
var express = require('express'); 
var app = express();
const {PythonShell} = require('python-shell');


const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60
    },
    http: {
        port: 8000,
        mediaroot: './media',
        allow_origin: '*'
    },
    trans: {
        ffmpeg: 'C:/Users/Alexi/Downloads/ffmpeg-2022-10-02-git-5f02a261a2-full_build/ffmpeg-2022-10-02-git-5f02a261a2-full_build/bin/ffmpeg.exe',
        tasks: [
            {
                app: 'live',
                hls: true,
                hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
                dash: true,
                dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
            }
        ]
    }
};

var niebla = '';
let pyshell = new PythonShell('script_python.py');

/*pyshell.send('Darío');
pyshell.on('message', function(msg){
	console.log(msg);
	niebla += msg + ' ';
});

pyshell.end(function(err, code, signal){
	if(err) throw err;
	console.log('Código de salida: ' + code);
	console.log('Señal de salida: ' + signal);
	console.log('Terminado');
});*/

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

console.log("Servidor iniciado correctamente")
/*app.get('/', (req, res) => res.send(niebla))
app.listen(8001);*/

var nms = new NodeMediaServer(config)
nms.run();
