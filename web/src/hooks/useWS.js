import React, { createContext, useState, useContext, useCallback } from 'react';
import useWebSocket from 'react-use-websocket';

const WsContext = createContext({});

export const WsProvider = ({ children }) => {
  const { lastJsonMessage, sendMessage } = useWebSocket('ws://localhost:3001', {
      onOpen: () => console.log(`Connected to App WS`),
      onMessage: () => {
          if (lastJsonMessage) {
          console.log(lastJsonMessage);
          }
      },
      queryParams: { 'token': '123456' },
      onError: (event) => { console.error(event); },
      shouldReconnect: (closeEvent) => true,
      reconnectInterval: 5000
  });

  const sendWsMessage = useCallback((value) => {
    sendMessage(value)
  }, [sendMessage]);

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