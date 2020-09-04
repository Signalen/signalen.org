import styled from 'styled-components'

const Card = styled.div`
  background-color #fff;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0 rgba(47,28,80,.2);
  padding: ${(p) => p.theme.tokens.spacing06};
  margin: ${(p) => p.theme.tokens.spacing04};
`

export default Card
