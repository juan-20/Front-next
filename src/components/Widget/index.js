import styled from 'styled-components';

const Widget = styled.div`
margin-top: 24px;
margin-bottom: 24px;
border: 1px solid ${({ theme }) => theme.colors.primary};;
background: #000;
border-radius: 4px;
overflow: hidden;

h1, h2, h3 {
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0;
}
p {
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}
`;

Widget.Content = styled.div`
padding: 24px 32px 32px 32px;
display: block;

ul {
  list-style: none;
  padding: 0;
}
>form{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
button{
      height: 45px;
      background:  ${({ theme }) => theme.colors.success};
      color: #000;
      width: 140px;
      border-radius: 5px;

  &:disabled{
    background: #ffee80;
    color: #999;
  }
}
}

p{
}

`;

Widget.Header = styled.header`
justify-content: flex-start;
align-items: center;
padding: 18px 32px;
background-color: ${({ theme }) => theme.colors.primary};

* {
  margin: 0;
}
`;

Widget.Topic = styled.a`
  margin: 2rem;
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
  >input{
    display: none;
    :checked{
      background: none;
    }
  }
`;

export default Widget;
