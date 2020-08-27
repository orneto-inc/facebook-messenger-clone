import React, { forwardRef } from 'react';
import { CardContent, Typography, Card } from '@material-ui/core';
import './Messege.css';

const Messege = forwardRef(({messege, username}, ref) => {
    const isUser = username === messege.username;
    return (
        <div ref={ref} className={`messege ${isUser && 'messege__user'}`}>
            <Card className={isUser ? "messege__userCard" : "messege__guestCard"}>
                <CardContent className='app__cardContent'>
                    <Typography className='app__typography'
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        {!isUser && `${messege.username || 'Guest'}:`} {messege.messege}
                    </Typography>
                </CardContent>
            </Card>  
        </div>
    )
})

export default Messege;