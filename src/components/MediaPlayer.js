import React, { Component } from 'react';

export default class MediaPlayer extends Component {
	render() {
		return (
			<div className="player-panel">
				<audio id="audio-player" src="song.mp3" preload="none" width="300"></audio>

				<video id="youtube-player" preload="none" width="300" height="200">
					<source type="video/youtube" src="" />
				</video>
			</div>
		);
	}
}
