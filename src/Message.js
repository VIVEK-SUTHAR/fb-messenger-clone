import { Card, CardContent, Typography } from '@material-ui/core'
import './MessageCard.css';
import React, { forwardRef } from 'react'
const Message = forwardRef(({message, username }, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography
                        color='white'
                        varient="h5"
                        component="h2"
                    >
                        {!isUser && `${message.username || 'Unknown user'}:`}  {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div >
    )
})

export default Message