import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

// const WsContext = createContext({});

const test = "ws://localhost:3005"; //"ws://warbeasts-api.herokuapp.com";
// 'ws://localhost:3001'
// const test2 = "ws://warbeasts-api-2.herokuapp.com/";

export const useWS = (rdx) => {

  console.log("RDX: ", rdx);

  const newClient = useWebSocket(test, {
    onOpen: () => console.log(`Connected to App WS`),
    onMessage: (test) => {
        // if (newClient.lastJsonMessage) {
        // console.log("WS1: ", newClient.lastJsonMessage);
        // console.log("WS2: ", test);
        // }
        rdx(test);
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