import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';

class MatchesList extends Component {
	state = {
		matchesList: []
	};

	static getDerivedStateFromProps(props, state) {
		return (state = {
			matchesList: props.matches
		});
	}

	showMatches = () =>
		this.state.matchesList ? (
			// start: what to do when start, enter: what to do when enter
			// Node Group create a loop
			<NodeGroup
				data={this.state.matchesList}
				keyAccessor={d => d.id}
				start={() => ({
					opacity: 0,
					x: -200
				})}
				enter={(d, i) => ({
					opacity: [1],
					x: [0],
					timing: { duration: 500, delay: i * 50, ease: easePolyOut }
				})}
				update={(d, i) => ({
					opacity: [1],
					x: [0],
					timing: { duration: 500, delay: i * 50, ease: easePolyOut }
				})}
				leave={(d, i) => ({
					opacity: [0],
					x: [-200],
					timing: { duration: 500, delay: i * 50, ease: easePolyOut }
				})}
			>
				{nodes => (
					<div>
						{/* state of NodeGroup */}
						{nodes.map(({ key, data, state: { x, opacity } }) => (
							<div
								key={key}
								className='match_box_big'
								style={{ opacity, transform: `translate(${x}px)` }}
							>
								<div className='block_wraper'>
									<div className='block'>
										<div
											className='icon'
											style={{
												background: `url(/images/team_icons/${
													data.localThmb
												}.png)`
											}}
										/>
										<div className='team'>{data.local}</div>
										<div className='result'>{data.resultLocal}</div>
									</div>
									<div className='block'>
										<div
											className='icon'
											style={{
												background: `url(/images/team_icons/${
													data.awayThmb
												}.png)`
											}}
										/>
										<div className='team'>{data.away}</div>
										<div className='result'>{data.resultAway}</div>
									</div>
								</div>
								<div className='block_wraper nfo'>
									<div>
										<strong>Date:</strong>
										{data.date}
									</div>
									<div>
										<strong>Stadium:</strong>
										{data.stadium}
									</div>
									<div>
										<strong>Referee:</strong>
										{data.referee}
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</NodeGroup>
		) : null;

	render() {
		return <div>{this.showMatches()}</div>;
	}
}

export default MatchesList;
