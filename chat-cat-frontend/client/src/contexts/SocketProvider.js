import React, {useContext, useEffect, useState} from 'react'

const SocketContext = React.createContext()

export function useSocket(){
    return useContext(SocketContext)
}

export function SocketProvider() {
    return (
        <div>
            
        </div>
    )
}
