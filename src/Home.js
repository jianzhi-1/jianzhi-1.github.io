import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { Button } from '@material-ui/core';

class Home extends Component {

	render(){
        return (
			<div className="App">
					<Button color="primary">Hello World</Button>
					<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<p>Hello World</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default Home;
