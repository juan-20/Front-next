import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Input from '../src/components/Input/index';
import Button from '../src/components/Button/index';

const AskContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Pera um pouco]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ 
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) {
  const questionId = `question__${questionIndex}`;
  return (
  <Widget>
    <Widget.Header>
      <h3>
        {`Pergunta ${questionIndex + 1}`}
        {` de  ${totalQuestions}`}
      </h3>
      </Widget.Header>
      <img
        alt="Imagem da pergunta"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
    <Widget.Content>

      <h2>
        {question.title}
      </h2>

      <p>
        {question.description}
      </p>

      <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            onSubmit();
          }}
        >
   {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
        return (
          <Widget.Topic
            as="label"
            htmlFor={alternativeId}
          >
          <input
            id={alternativeId}
            name={questionId}
            type="radio"
            />
            {alternative}
          </Widget.Topic>
        );
      })}

      <Button type="submit" >
        Confirmar
      </Button>
      </form>

    </Widget.Content>
  </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage() {

  const [screenState, setScreenState] = React.useState(screenStates.LOADING)
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(() => {

    setTimeout(() => {
        setScreenState(screenStates.QUIZ);
    }, 1 * 1000);

  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground>
      <Head>
        <title>AluraQuiz</title>
      </Head>
      <AskContainer>

        {screenState === screenStates.QUIZ && (
           <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}

        <GitHubCorner projectUrl="https://github.com/juan-20" />

        {screenState === screenStates.LOADING && <LoadingWidget/>}

        {screenState === screenStates.RESULT && 
        <div>
          <a style={text-decoration:none; color: #fff} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Você ganhou, clique aqui para receber seu premio :3
          </a>
        </div>}
      </AskContainer>

    </QuizBackground>
  );
}
