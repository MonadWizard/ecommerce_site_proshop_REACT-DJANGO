/* eslint-disable prettier/prettier */
import React from 'react';
// import { Alert } from 'react-bootstrap';
import './Message.css';

// const Message = ({ variant, children }) => (
//         <Alert variant={variant}>{children}</Alert>

// );

const Message = ({ children }) => (
    <div id="InfoBanner">
        <span className="reversed reversedRight">
            <span>&#9888;</span>
        </span>
        <span className="reversed reversedLeft">{children}</span>
    </div>
);

export default Message;
