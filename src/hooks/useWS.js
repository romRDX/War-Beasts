import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

// const WsContext = createContext({});

// const test = "ws://wb-db-manager.onrender.com";
const test = 'wss://wb-db-manager.onrender.com/'; //quase funciona
// const test = "ws://wb-ws-server-d1ef2fdf69cd.herokuapp.com/";
// "https://wb-db-manager.onrender.com";
// const test = "ws://localhost:3005"; FUNCIONA
//"ws://warbeasts-api.herokuapp.com";
// 'ws://localhost:3001'
// const test2 = "ws://warbeasts-api-2.herokuapp.com/";

export const useWS = (callBackFunc) => {

  const newClient = useWebSocket(test, {
    onOpen: (x) => console.log(`Connected to App WS: `, x),
    onMessage: (test) => {
        // if (newClient.lastJsonMessage) {
        // console.log("WS1: ", newClient.lastJsonMessage);
        // console.log("WS2: ", test);
        // }
        // console.log("MESSAGE: ", test);
        callBackFunc(test);
    },
    onClose: (test) => {
      const x = newClient.getWebSocket();
      console.log("connection closed: ", x);
    },
    queryParams: { 'token': '123456', origin: "*" },
    onError: (event) => { console.error(event); },
    shouldReconnect: (closeEvent) => true,
    // reconnectInterval: 5000
  });

  return newClient;
};