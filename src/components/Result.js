import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ score, playAgain }) => (
	<div className='score-board'>
		<div className='score'>You scored {score} / 5 correct answers!</div>
		<button className='playBtn' onClick={playAgain}>
			Play again!
		</button>
	</div>
);

Result.propTypes = {
	score: PropTypes.number.isRequired,
	playAgain: PropTypes.func.isRequired
};

export default Result;
