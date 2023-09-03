import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

const WsContext = createContext({});

const test = "ws://localhost:3005"; //"ws://warbeasts-api.herokuapp.com";
// 'ws://localhost:3001'
const test2 = "ws://warbeasts-api-2.herokuapp.com/";

export const WsProvider = ({ children }) => {

  const [webSockedClient, setWebSockedClient] = useState(null);

  // const { lastJsonMessage, sendMessage, getWebSocket } = useWebSocket(test, {
  //     onOpen: () => console.log(`Connected to App WS`),
  //     onMessage: (test) => {
  //         if (lastJsonMessage) {
  //         console.log("WS1: ", lastJsonMessage);
  //         console.log("WS2: ", test);
  //         }
  //     },
  //     onClose: (test) => {
  //       const x = getWebSocket();
  //       console.log("connection closed: ", x);
  //     },
  //     queryParams: { 'token': '123456', origin: "*" },
  //     onError: (event) => { console.error(event); },
  //     shouldReconnect: (closeEvent) => true,
  //     // reconnectInterval: 5000
  // });

  const createWSClient = () => {
    const newClient = useWebSocket(test, {
      onOpen: () => console.log(`Connected to App WS`),
      onMessage: (test) => {
          if (newClient.lastJsonMessage) {
          console.log("WS1: ", newClient.lastJsonMessage);
          console.log("WS2: ", test);
          }
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

    setWebSockedClient(newClient);
  }

  useEffect(() => {
    if(!webSockedClient){
      // createWSClient();
    }
  }, [webSockedClient]);

  

  const sendWsMessage = useCallback((value) => {
    webSockedClient.sendMessage(value)
  }, [webSockedClient]);

  console.log("WS: ", webSockedClient);

  return (
    <WsContext.Provider
      value={{ sendWsMessage }}
    >
      {children}
    </WsContext.Provider>
  );
};

export function useWS() {
  return useContext(WsContext);
}