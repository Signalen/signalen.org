import styled from 'styled-components'

const Heading = styled.h2`
  text-align: ${(p) => p.align};
  font-size: ${(p) => p.fontSize};
  margin: 1rem 0 0.75rem 0;
`

export default Heading
