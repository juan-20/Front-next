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

ul {
  list-style: none;
  padding: 0;
}
>form{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

input{
  background: none; 
  height: 45px;
  font-size: 16px;
  width:280px;
  color: #fff;
  border-radius: 5px;
  border: 1px solid #6c706d;
  margin-bottom: 10px;
}
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

export default Widget;
