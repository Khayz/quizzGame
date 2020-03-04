import React, { useState } from 'react';
import PropTypes from 'prop-types';

const QuestionBox = ({ question, options, selected }) => {
	const [answer, setAnswer] = useState(options);
	return (
		<div className='questionBox'>
			<div className='question'>{question}</div>
			{answer.map((text, index) => (
				<button
					key={index}
					className='answerBtn'
					onClick={() => {
						setAnswer([text]);
						selected(text);
					}}>
					{text}
				</button>
			))}
		</div>
	);
};

QuestionBox.propTypes = {
	question: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	selected: PropTypes.func.isRequired
};

export default QuestionBox;
