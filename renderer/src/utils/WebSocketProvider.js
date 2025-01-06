import React, { createContext, useContext } from 'react';
import useWebSocket from 'react-use-websocket';

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children, ipAddress}) => {
    const { sendMessage, lastMessage, readyState } = useWebSocket(`ws://${ipAddress}:443`, {
        onOpen: () => console.log('Conectado ao servidor cliente via WebSocket.'),
        onClose: () => {
            console.log('Conexão encerrada.');
            sendMessage('close');
        },
        onError: (error) => {
            console.log('Erro:', error);
            sendMessage('error');
        },
        shouldReconnect: () => true,
    });

    return (
        <WebSocketContext.Provider value={{ sendMessage, lastMessage, readyState }}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocketContext = () => useContext(WebSocketContext);
