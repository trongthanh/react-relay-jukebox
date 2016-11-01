import React from 'react';
import Relay from 'react-relay';
import SongComp from '../components/SongComp';
import Dates from '../utils/Dates';

class ListPage extends React.Component {
	static propTypes = {
		viewer: React.PropTypes.object,
	}

	state = {
		firstRender: true,
	}

	componentDidMount() {

		// delay render of the songs below the fold
		setTimeout(() => {
			this.setState({firstRender: false});
		}, 500);
	}

	render () {
		let viewer = this.props.viewer;
		let songs;
		if (this.state.firstRender) {
			songs = viewer.songs.slice(0, 19);
		} else {
			songs = viewer.songs;
		}

		console.log('Number of items in list', viewer.songs.length);
		return (
			<div className="playlist">
				<ul className="playlist--list">
					{songs.map((song, index) =>
						<SongComp key={song._id} song={song} index={index} />
					)}
				</ul>
			</div>
		);
	}
}

const getTimeAddedFilter = function(fromDate, toDate) {

	return {
		_operators: {
			timeAdded: {
				gte: fromDate.getTime(),
				lt: toDate ? toDate.getTime() : null,
			}
		}
	};
};

const viewerFragment = () => Relay.QL`
	fragment on Viewer {
		songs(
			sort: TIMEADDED_ASC,
			limit: $limit,
			filter: $filter,
		) {
			_id,
			${SongComp.getFragment('song')}
		}
	}
`;

const Today = Relay.createContainer(ListPage, {
	initialVariables: {
		filter: getTimeAddedFilter(Dates.today()),
		limit: 1000,
	},
	fragments: {
		viewer: viewerFragment,
	},
});

const Yesterday = Relay.createContainer(ListPage, {
	initialVariables: {
		filter: getTimeAddedFilter(Dates.yesterday(), Dates.today()),
		limit: 1000,
	},
	fragments: {
		viewer: viewerFragment,
	},
});

const LastWeek = Relay.createContainer(ListPage, {
	initialVariables: {
		filter: getTimeAddedFilter(Dates.lastWeek(), Dates.thisWeek()),
		limit: 1000,
	},
	fragments: {
		viewer: viewerFragment,
	},
});


export default {
	Today,
	Yesterday,
	LastWeek,
};
