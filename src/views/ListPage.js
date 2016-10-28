import React from 'react';
import Relay from 'react-relay';
import SongComp from '../components/SongComp';

class ListPage extends React.Component {
	static propTypes = {
		viewer: React.PropTypes.object,
	}
	render () {
		let viewer = this.props.viewer;

		return (
			<div className="playlist">
				<ul className="playlist--list">
					{viewer.songs.edges.concat().reverse().map(edge => edge.node).map(song =>
						<SongComp key={song._id} song={song} />
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
					songs(first: 30, orderBy: TIMEADDED_DESC) {
						edges {
							node {
								_id,
								${SongComp.getFragment('song')}
							}
						}
					}
				}
			`,
		},
	},
);

