import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import {useRouter} from 'next/router';

import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
// import db from '../db.json';
import Widget from '../src/components/Widget/index';

// const BackgroundImage = styled.div`
//   background: #1E212B;
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

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

export default function Home() {
  
  const router = useRouter();

  const [name, setName] = React.useState('');
  
  return (
    <QuizBackground>
      <Head>
        <title>AluraQuiz</title>
      </Head>
      <AskContainer>

        <Widget>
          <Widget.Header>
            <h1>Star Wars</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log("teste")
            }}
            >
              <input
              onChange={function (infosDoEvento){
                // state
                // name = infosDoEvento.target.value;
                console.log(name)
                setName(infosDoEvento.target.value);
              }}              
              placeholder="Diz aí seu nome para jogar :)"
              />

              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
            </form>
            <p>lorem jajajajjajajajajaj</p>

          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Star Wars</h1>
            <p>lorem jajajajjajajajajaj</p>
          </Widget.Content>
        </Widget>

        <Footer />

        <GitHubCorner projectUrl="https://github.com/juan-20" />

      </AskContainer>
    </QuizBackground>
  );
}
