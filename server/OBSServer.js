const OBSWebSocket = require('obs-websocket-js').default;
var express = require('express'); 
var app = express();
const obs = new OBSWebSocket();

try {
    const {
      obsWebSocketVersion,
      negotiatedRpcVersion
    } = obs.connect('ws://192.168.1.131:4445', 'KksXWF5rcAInQJ83', {
      rpcVersion: 1
    });
    console.log(`Connected to server ${obsWebSocketVersion} (using RPC ${negotiatedRpcVersion})`)
  } catch (error) {
    console.error('Failed to connect', error.code, error.message);
  }


