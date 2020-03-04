import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import quizService from './quizService';

import './assets/style.css';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

export default function QuizBee() {
	const [questionBank, setQuestionBank] = useState([]);
	const [score, setScore] = useState(0);
	const [responses, setResponses] = useState(0);

	const getQuestions = async () => {
		const question = await quizService();
		setQuestionBank(question);
	};

	const computeAnswer = (answer, correctAnswer) => {
		if (answer === correctAnswer) {
			setScore(score + 1);
		}

		setResponses(responses < 5 ? responses + 1 : 5);
	};

	const playAgain = () => {
		getQuestions();
		setScore(0);
		setResponses(0);
	};

	useEffect(() => {
		getQuestions();
	}, []);

	return (
		<div className='container'>
			<div className='title'>QuizBee</div>
			{questionBank.length > 0 &&
				responses < 5 &&
				questionBank.map(({ question, answers, correct, questionId }) => (
					<QuestionBox
						question={question}
						options={answers}
						key={questionId}
						selected={answer => computeAnswer(answer, correct)}
					/>
				))}

			{responses === 5 && <Result score={score} playAgain={playAgain} />}
		</div>
	);
}

ReactDOM.render(<QuizBee />, document.getElementById('root'));
