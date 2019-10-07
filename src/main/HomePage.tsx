import * as React from 'react';
import { Container } from '@material-ui/core';
import logo from '../svg/chat.svg';
import './HomePage.css';

export const HomePage: React.FC = () => {

    return (
        <Container maxWidth="sm">
            <img src={logo} className="App-logo" alt="chat" />
        </Container>
    );
};

export default HomePage;