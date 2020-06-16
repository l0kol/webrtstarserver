'use strict'

const WebrtcStar = require('libp2p-webrtc-star')

const SignalingServer = require('libp2p-webrtc-star/src/sig-server')

;(async () => {

  const signalingServer = await SignalingServer.start({
    port: 8080
  })

  const ssAddr = `/ip4/${signalingServer.info.host}/tcp/${signalingServer.info.port}/ws/p2p-webrtc-star`
  console.info(`Signaling server running at ${ssAddr}`)

}) ();

  