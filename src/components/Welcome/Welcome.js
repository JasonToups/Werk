import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import Register from '../NavBar/Modal/ModalRegister';

class Welcome extends Component {
	render() {
		return (
			<>
				<link
					href='https://fonts.googleapis.com/css?family=Knewave'
					rel='stylesheet'></link>
				<header>
					<section className='hero-header-text'>
						<h1 id='ready'>ARE YOU READY TO...</h1>
						<h1 id='werk'>Werk?</h1>
						<Register />
					</section>
				</header>
			</>
		);
	}
}

export default Welcome;
