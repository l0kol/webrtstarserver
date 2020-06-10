'use strict'

// Libp2p Core
const Libp2p = require('libp2p')
// Transports
const TCP = require('libp2p-tcp')
const Websockets = require('libp2p-websockets')
const WebrtcStar = require('libp2p-webrtc-star')
// wrtc for node to supplement WebrtcStar
const wrtc = require('wrtc')
// Signaling Server for webrtc
const SignalingServer = require('libp2p-webrtc-star/src/sig-server')

;(async () => {

  const signalingServer = await SignalingServer.start({
    port: 9090
  })

  const ssAddr = `/ip4/${signalingServer.info.host}/tcp/${signalingServer.info.port}/ws/p2p-webrtc-star`
  console.info(`Signaling server running at ${ssAddr}`)

}) ();

  