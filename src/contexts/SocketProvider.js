import React, {useContext, useEffect, useState} from 'react';
import io from 'socket.io-client'

const SocketContext = React.createContext();

export function useSocket(){
    return useContext(SocketContext);
}

export function SocketProvider({ id, children }) {
    
    const [socket, setSocket] = useState();

    function connectTo(){
        var origin= window.location.hostname;
        if(origin==='localhost'){
            return 'http://localhost:5000';
        }else{
            return 'https://ulisesv-react-chat-webapp.herokuapp.com';
        }
    }

    useEffect(()=>{
        const newSocket = io(
            connectTo(),
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