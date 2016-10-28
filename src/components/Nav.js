import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
	constructor() {
		super();
		this.state = {
			nickName: ''
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		this.setState({
			nickName: event.target.value
		});
	}

	render() {
		const activeStyle = {
			color: 'black',
			opacity: 1,
			boxShadow: '0 2px 0 0 black',
		};

		return (
			<nav className="playlist-nav js-playlist-section">
				<div className="container">
					<ul className="playlist-nav--list">
						<li className="playlist-nav--item js-playlist-nav" data-tab="tab--play-list" data-target="js-playblock">
							<Link to="/today" activeStyle={activeStyle}>play list</Link>
						</li>
						<li className="playlist-nav--item js-playlist-nav" data-tab="tab--yesterday" data-target="js-playblock">
							<Link to="/yesterday" activeStyle={activeStyle}>yesterday</Link>
						</li>
						<li className="playlist-nav--item js-playlist-nav" data-tab="tab--past-7-days" data-target="js-playblock">
							<Link to="/last-week" activeStyle={activeStyle}>past 7 days</Link>
						</li>
						<li className="playlist-nav--item js-playlist-nav" data-tab="tab--naustorm" data-target="js-naustorm">
							<Link to="/nau-storm" activeStyle={activeStyle}>naustorm</Link>
						</li>
						<li className="playlist-nav--item js-playlist-nav" data-tab="tab--naucoin" data-target="js-naucoin">
							<Link to="/nau-coin" activeStyle={activeStyle}>₦aucoin</Link>
						</li>
						<li className="playlist-nav--item playlist-nav--item__right">
							<div className="input-control">
								<input type="text" placeholder="@ enter your name" className="js-nickname-holder"
									value={this.state.nickName} onChange={this.onChange}  />
								<div className="input-control--error">
									<p>Your name is required !</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
