import styled from "styled-components"

export const Message = styled.div`
  color: ${props => (props.error ? "palevioletred" : "rebeccapurple")};
  font-size: 2.5rem;
  margin: 20px auto;
  text-align: center;
`
