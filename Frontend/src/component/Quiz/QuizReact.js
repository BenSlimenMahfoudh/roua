import React, { useState } from 'react';
import SideNavCo from "../sideNav/SideNavCo";
import "../Style/quiz/QuizReact.css";

export default function QuizReact() {
	const questions = [
		{
			questionText: 'React est un ________',
			answerOptions: [
				{ answerText: 'Bibliothèque Javascript', isCorrect: true },
				{ answerText: 'Framework Javascript', isCorrect: false },
				{ answerText: 'Bibliothèque Javascript et Framework Javascript ', isCorrect: false },
				{ answerText: 'Aucune de ces réponses n’est vraie.', isCorrect: false },
			],
		},
		{
			questionText: 'State dans react est ________',
			answerOptions: [
				{ answerText: 'Un stockage permanent', isCorrect: false },
				{ answerText: 'Un stockage interne du composant', isCorrect: true },
				{ answerText: 'La première et la deuxième réponses sont vrais', isCorrect: false },
				{ answerText: 'Aucune de ces réponses n’est vraie', isCorrect: false },
			],
		},
		{
			questionText: 'Les Props sont __________ dans d’autres composants',
			answerOptions: [
				{ answerText: 'Injecté', isCorrect: false },
				{ answerText: 'Des méthodes', isCorrect: true },
				{ answerText: 'La première et la deuxième réponses sont vrais', isCorrect: false },
				{ answerText: 'Aucune de ces réponses n’est vraie', isCorrect: false },
			],
		},
		{
			questionText: 'ReactJS couvre la_________',
			answerOptions: [
				{ answerText: 'Couche d’interface utilisateur (UI) dans une application', isCorrect: true },
				{ answerText: 'Couche de données dans une application', isCorrect: false },
				{ answerText: 'La première et la deuxième réponses sont vrais', isCorrect: false },
				{ answerText: 'Aucune de ces réponses n’est vraie', isCorrect: false },
			],
		},
		{
			questionText: 'ReactJS utilise _____ pour augmenter les performances',
			answerOptions: [
				{ answerText: 'DOM virtuel', isCorrect: true },
				{ answerText: 'DOM réel', isCorrect: false },
				{ answerText: 'La première et la deuxième réponses sont vrais', isCorrect: false },
				{ answerText: 'Aucune de ces réponses n’est vraie', isCorrect: false },
			],
		},
		{
			questionText: 'React est basé sur _______',
			answerOptions: [
				{ answerText: 'Les modules', isCorrect: false },
				{ answerText: 'Les services', isCorrect: false },
				{ answerText: 'Les composants', isCorrect: true},
				{ answerText: ' Les microservices', isCorrect: false },
			],
		},
		{
			questionText: 'Comment accéder à l’état d’un composant à l’intérieur d’une fonction membre?',
			answerOptions: [
				{ answerText: 'this.getState()', isCorrect: false },
				{ answerText: 'this.prototype.stateValue', isCorrect: false },
				{ answerText: ' this.state', isCorrect: true },
				{ answerText: 'Aucune de ces réponses n’est vraie', isCorrect: false },
			],
		},
		{
			questionText: 'Combien d’éléments un composant React renvoie-t-il?',
			answerOptions: [
				{ answerText: '1 élément', isCorrect: false },
				{ answerText: '2 éléments', isCorrect: false },
				{ answerText: ' Plusieurs éléments', isCorrect: true },
				{ answerText: 'Aucune de ces réponses n’est vraie', isCorrect: false },
			],
		},		{
			questionText: 'Quelles sont les limites de ReactJS?',
			answerOptions: [
				{ answerText: 'React ne concerne que la couche View de l’application, nous avons donc toujours besoin de l’aide des autres technologies pour obtenir un ensemble d’outils complet pour le développement', isCorrect: false },
				{ answerText: 'React utilise des modèles en ligne et JSX. Cela peut sembler gênant pour certains développeurs', isCorrect: false },
				{ answerText: ' La bibliothèque de react est trop grande', isCorrect: false },
				{ answerText: 'Tout les réponses sont vrais', isCorrect: true },
			],
		},		{
			questionText: 'Dans quel répertoire les composants de React JS sont-ils enregistré?',
			answerOptions: [
				{ answerText: 'Dans js/components/', isCorrect: true },
				{ answerText: 'Dans vendor/components/', isCorrect: false },
				{ answerText: 'Dans external/components/', isCorrect: false },
				{ answerText: 'Dans vendor/', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideNavCo />
        <div class="col py-3">
          <div className="container-profil">
            <header className="titleD">Autoévaluation</header>
            <div className='app'>
              {showScore ? (
                <div className='score-section'>
                  You scored {score} out of {questions.length}
                </div>
              ) : (
                <div className='quiz-card'>
                  <div className='question-section'>
                    <div className='question-count'>
                      <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
                  </div>
                  <div className='answer-section'>
                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                      <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                        {answerOption.answerText}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}