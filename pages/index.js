import styled from 'styled-components'
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
// import db from '../db.json';
import Widget from '../src/components/Widget/index'

const BackgroundImage =styled.div`
  background: #727d8f;
  flex: 1;
  background-size: cover;
  background-position: center;
`;

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
  return(
    <QuizBackground>
      <AskContainer>

      <Widget>
              <Widget.Header>
                  <h1>Star Wars</h1>
              </Widget.Header>
         <Widget.Content>
          
            <p>lorem jajajajjajajajajaj</p>
          
        </Widget.Content>
      </Widget>

      <Widget>
        <Widget.Content>
        <h1>Star Wars</h1>
        <p>lorem jajajajjajajajajaj</p>
        </Widget.Content>
      </Widget>

      <Footer/>

      <GitHubCorner/>

      </AskContainer>
    </QuizBackground>
  );
}