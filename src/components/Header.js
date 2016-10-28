/* © 2016 NauStud.io
 * @author Thanh Tran
 */
import React, { Component } from 'react';

export default class Nav extends Component {
	constructor() {
		super();

		this.state = {
			bgImageData: null
		};
	}

	onSongSubmit(event) {
		event.preventDefault();
		console.log('Form submitted', event.target.elements.songurl.value);
	}

	refreshBackground() {
		var rn = Math.floor((Math.random() * 150) + 60);
		var rs = Math.floor((Math.random() * 11) + 4);
		/*global Trianglify*/
		var t = new Trianglify({
			x_gradient: Trianglify.colorbrewer.Spectral[rs],
			noiseIntensity: 0,
			cellsize: rn
		});

		var pattern = t.generate(window.innerWidth, 269);

		this.setState({bgImageData: pattern.dataUrl});
	}

	componentDidMount() {
		this.refreshBackground();
	}

	render() {
		return (
			<header className="navbar" id="js-navbar" style={{backgroundImage: this.state.bgImageData}}>
				<div className="loader">
					<div className="dot js-dot"></div>
				</div>
				<div className="container">
					<ul className="navbar--list">
						<li className="navbar--item navbar--item__icon">
							<a href="https://naustud.io" target="_blank">Nâu Jukebox</a>
						</li>
						<li className="navbar--item navbar--item__input">

							<form action="#" onSubmit={this.onSongSubmit} className="search-box js-add-song-form" id="js-add-song-form">
								<div className="search-box--control">
									<div className="search-box--input-wrapper">
										<input type="text" id="songurl" name="songurl"
											className="search-box--input u-full-width js-search-box"
											placeholder="Search old song or add new NCT, Zing, YouTube, SoundClound URL"
											autoComplete="off" />
									</div>
									<button type="submit" className="search-box--submit js-search-box--submit"></button>
								</div>

								<div className="search-box--result-wrapper">
									<ul className="song-result--list">
										{'{#each searchResult}'}
											<li className="song-result--item js-song-result--item {{_active}}"
												data-href="{{originalURL}}">{'{name}} - {{artist}'}</li>
										{'{/each}'}
									</ul>
								</div>
							</form>
						</li>
						<li className="navbar--item navbar--item__tool">
							<div className="js-play-button play-button _play">
								<div className="play-button--element play-button--elm-top"></div>
								<div className="play-button--element play-button--elm-right"></div>
								<div className="play-button--element play-button--elm-bottom"></div>
								<div className="play-button--element play-button--elm-left"></div>
							</div>
						</li>
					</ul>
				</div>
			</header>
		);
	}
}

