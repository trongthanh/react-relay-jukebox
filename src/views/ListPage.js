import React from 'react';
import Relay from 'react-relay';
import SongComp from '../components/SongComp';
import Dates from '../utils/Dates';

class ListPage extends React.Component {
	static propTypes = {
		viewer: React.PropTypes.object,
	}

	componentWillMount() {

	}

	render () {
		let viewer = this.props.viewer;

		return (
			<div className="playlist">
				<ul className="playlist--list">
					{viewer.songs.map(song =>
						<SongComp key={song._id} song={song} />
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
