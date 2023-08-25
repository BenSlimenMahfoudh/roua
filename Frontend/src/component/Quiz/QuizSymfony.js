import React, { useState } from 'react';
import SideNavCo from "../sideNav/SideNavCo";

import "../Style/quiz/QuizReact.css";

export default function QuizSymfony() {
	const questions = [
		{
			questionText: 'Quelle est l’extenstion d’un fichier de template dans Symfony?',
			answerOptions: [
				{ answerText:'.tpl.php', isCorrect: false },
				{ answerText: '.twig.html', isCorrect: false },
				{ answerText: '.json.twig', isCorrect: false },
				{ answerText: '.html.twig', isCorrect: true },
			],
		},
		{
			questionText: 'Quel est le bundle qui doit étre installer pour exécuter les fixtures et remplire la base de données?',
			answerOptions: [
				{ answerText: 'LoadFixturesBundle', isCorrect: false },
				{ answerText: 'LoadDataFixturesBundle', isCorrect: false },
				{ answerText: 'DoctrineFixturesBundle', isCorrect: true },
				{ answerText: 'Aucune de ces réponses n’est vraie', isCorrect: false },
			],
		},
		{
			questionText: 
			'Considérons la configuration suivante. Comment récuperer le paramétre « wx_website.header.title » dans un contrôleur?',
			answerOptions: [
				{ answerText: <code>
                    $container-{'>'}getParameter('wx_website.header.title');
                 </code>, isCorrect: true },
				{ answerText: <code>
                    $container-{'>'}get('wx_website.header.title');
                 </code>, isCorrect: false },
				{ answerText:<code>
					$parameters-{'>'}get('wx_website.header.title');
				</code> , isCorrect: false },
				{ answerText: <code>
					$container-{'>'}getParameter(wx_website.header.title);
				</code>, isCorrect: false },
			],
		},
		{
			questionText: 'Quel Bundle doit-on installer afin d’envoyer des messages par e-mail?',
			answerOptions: [
				{ answerText: 'MailChimpBundle', isCorrect: false },
				{ answerText: 'SquirrelMailBundle', isCorrect: false },
				{ answerText: 'SwiftmailerBundle', isCorrect: true },
				{ answerText: 'WebMailBundle', isCorrect: false },
			],
		},
		{
			questionText: 'Lequel des éléments suivants contient la logique dont votre application a besoin pour restituer le contenu d’une page?',
			answerOptions: [
				{ answerText: 'Router', isCorrect: false },
				{ answerText: 'Routing', isCorrect: false },
				{ answerText: 'Controller', isCorrect: true },
				{ answerText: 'Bundle', isCorrect: false },
			],
		},
		{
			questionText: 'Un contrôleur dans Symfony est _____?',
			answerOptions: [
				{ answerText: 'une fonction YAML', isCorrect: false },
				{ answerText: 'une fonction PHP', isCorrect: true },
				{ answerText: 'un fichier de configuration XML', isCorrect: false},
				{ answerText: 'Aucune de ces réponses n’est vraie.', isCorrect: false },
			],
		},
		{
			questionText: 'Comment optimiser les performance lorsqu’on utilise les méthodes persist() et flush()?',
			answerOptions: [
				{ answerText: 'Mettez plusieurs persist() pour les entités à persister dans la Base de données aprés l’exécution d’un seul flush().', isCorrect: false },
				{ answerText: 'Mettez plusieurs flush() pour les entités à persister dans la Base de données avant d’exéctuer un seul persist().', isCorrect: false },
				{ answerText: 'Mettez plusieurs flush() pour les entités à persister dans la Base de données aprés l’exécution d’un seul persist().', isCorrect: false },
				{ answerText: 'Mettez plusieurs persist() pour les entités à persister dans la Base de données avant d’exéctuer un seul flush().', isCorrect: true },
			],
		},
		{
			questionText: 'Quelle est la commande pour mettre à jour la base de données?',
			answerOptions: [
				{ answerText: '$ php bin/console doctrine:schema:create', isCorrect: false },
				{ answerText: '$ php bin/console generate:doctrine:database', isCorrect: false },
				{ answerText: '$ php bin/console doctrine:schema:update', isCorrect: true },
				{ answerText: '$ php bin/console doctrine:generate:database', isCorrect: false },
			],
		},		{
			questionText: 'Dans quel emplacement les ressources (css, javascript, images…) doivent être?',
			answerOptions: [
				{ answerText: 'web/', isCorrect: false },
				{ answerText: 'app/', isCorrect: false },
				{ answerText: 'Dans la racine du projet', isCorrect: false },
				{ answerText: 'A l’intérieur du bundle', isCorrect: true },
			],
		},		{
			questionText: 'Dans Symfony, la configuration des routes peut être écrite en_____',
			answerOptions: [
				{ answerText: 'YAML', isCorrect: false },
				{ answerText: 'PHP', isCorrect: false },
				{ answerText: 'XML', isCorrect: false },
				{ answerText: 'Tout les réponses sont vrais', isCorrect: true },
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