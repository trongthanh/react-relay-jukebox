import React, { Component } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

export default class App extends Component {

	render() {
		return (
			<main>
				<Header />
				<div className="scroll-content">
					<Nav />
					<section id="js-playblock" className="main-content">
						<div className="container">
							{this.props.children}
							{'{> player}'}
						</div>
					</section>
				</div>

				<div className="lyric-modal js-lyric-modal">
					<div className="lyric-modal-inner">
						<span className="lyric-modal-close js-lyric-modal-close">X</span>
						<h4 className="lyric-modal-header">Lyric</h4>
						<div className="lyric-modal-content">
							<strong className="js-lyric-modal-song-title">
								Test
							</strong><br/>
							<p className="js-lyric-modal-song-lyric">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Possimus perspiciatis qui repellat, aperiam amet dignissimos soluta inventore exercitationem impedit excepturi vero et ea dolore voluptas enim suscipit id quo hic.
							</p>
						</div>
					</div>
				</div>
			</main>
		);
	}
}
