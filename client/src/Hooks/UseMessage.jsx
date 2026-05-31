import { useState } from "react";

import React from 'react'

function UseMessage() {

    const [messages, setMessages] = useState(null)

    const typColo = {
        "failed": "bg-red-500",
        "warning": "bg-yellow-500",
        "success": "bg-green-500"
    };

    const Showmessage = (type,message) => {
        setMessages({type,message});
        setTimeout(() => {
            setMessages(null)
        },3000)
    }

    return {messages,Showmessage,typColo};
}

export default UseMessage