import React from 'react';
import Relay from 'react-relay';

class ListPage extends React.Component {
	static propTypes = {
		viewer: React.PropTypes.object,
	}
	render () {
		let viewer = this.props.viewer;

		return (
			<div>
				<h2>Song list here. There are {viewer.songs.count} songs</h2>
				<ul className="playlist--list">
					{viewer.songs.edges.map(edge => edge.node).map(song =>
						<li key={song._id}>{song.name} - {song.artist}</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Relay.createContainer(
	ListPage, {
		fragments: {
			viewer: () => Relay.QL`
				fragment on Viewer {
					songs(first: 10, orderBy: TIMEADDED_DESC) {
						count,
						edges {
							node {
								_id,
								name,
								artist,
								timeAdded,
								streamURL,
								thumbURL
							}
						}
					}
				}
			`,
		},
	},
);

