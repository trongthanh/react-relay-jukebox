import React from 'react';
import Relay from 'react-relay';
import classNames from 'classnames';
import Moment from 'moment';

class SongComp extends React.Component {
	static propTypes = {
		song: React.PropTypes.object,
	}
	render () {
		const song = this.props.song;

		const liClass = classNames({
			'playlist--item': true,
			'_selected': false, //not implemented
			'_playing': false, //not implemented
		});

		let originBadgeName = 'black';
		switch (song.origin) {
			case 'NCT':
				originBadgeName = 'nct';
				break;
			case 'Zing':
				originBadgeName = 'zing';
				break;
			case 'Soundcloud':
				originBadgeName = 'sc';
				break;
			case 'YouTube':
				originBadgeName = 'yt';
				break;
		}

		const title = `${song.name} - ${song.artist}`;

		return (
			<li className={liClass}>
				<span className="playlist--item--active">&rtri;</span>
				<span className="playlist--item--author">{/*song.author (host not implemented)*/}</span>
				<a href={song.originalURL} className={`playlist--item--origin playlist--item--${originBadgeName}`} target="_blank">
					{song.thumbURL ?
						<img src={song.thumbURL} />
					:
						<img src="http://stc.id.nixcdn.com/v11/images/df-singer-300x300.jpg" />
					}
				</a>
				<a href="#" className="playlist--item--link js-song-item"
					title={title}>{title}</a>
				<div className="playlist--item--tools">
					<small>{Moment(song.timeAdded).fromNow()}</small>
					<a href="#" className={'js-show-book-user' /*getDisplayStatus (not implemented*/}><i className="fa fa-eye"></i></a>
					<a href="#" className="lyric-modal-toggle"><i className="fa fa-file-text"></i></a>
					<a href="#" className="loading-block rebook-btn">
						<span className="loading-block--stable"><i className="fa fa-retweet"></i></span>
					</a>
					<a href="#" className="remove-btn"><i className="fa fa-times"></i></a>
				</div>
			</li>
		);
	}
}

export default Relay.createContainer(
	SongComp, {
		fragments: {
			song: () => Relay.QL`
				fragment on song {
					_id,
					name,
					artist,
					timeAdded,
					streamURL,
					thumbURL
				}
			`,
		},
	},
);

