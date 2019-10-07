import * as React from 'react';
import { Container, Typography } from '@material-ui/core';
import logo from '../svg/chat.svg';
import './HomePage.css';

export const HomePage: React.FC = () => {

    return (
        <div className="Header">
            <Container>
                <br />
                <img src={logo} className="App-logo" alt="chat" />
                <Typography variant="h4" className="title-text">
                    Lost in Translation
                </Typography>
                <Typography variant="subtitle1" className="title-text">
                    Translate a phrase several times and back to the original language
                </Typography>
            </Container>
        </div>
    );
};

export default HomePage;