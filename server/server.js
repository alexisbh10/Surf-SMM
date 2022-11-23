const NodeMediaServer = require('node-media-server');
var express = require('express'); 
var app = express();


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

var nms = new NodeMediaServer(config)
nms.run();
