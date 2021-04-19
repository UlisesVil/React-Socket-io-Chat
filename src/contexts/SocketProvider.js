import React, {useContext, useEffect, useState} from 'react';
import io from 'socket.io-client'

const SocketContext = React.createContext();

export function useSocket(){
    return useContext(SocketContext);
}

export function SocketProvider({ id, children }) {
    const [socket, setSocket] = useState();
    
    useEffect(()=>{
        const newSocket = io(
            'http://localhost:5000',
            {
                withCredentials: false,
                query: { id }
            }
        );
        setSocket(newSocket);

        console.log(newSocket);
        return () => newSocket.close();
    },[id]);


    return (
        <SocketContext.Provider value={ socket }>
            { children }
        </SocketContext.Provider>
    )
}
//'http://localhost:5000',
//'https://ulisesv-react-chat-webapp.herokuapp.com',