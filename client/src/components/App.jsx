import openSocket from 'socket.io-client';
import axios from 'axios';

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import SearchBar from './SearchBar';

class App extends Component {
    componentDidMount() {
        const socket = openSocket('http://localhost:9001');
    }

    render() {
        return (
            <SearchBar />
        );
    }
}

export default App;
