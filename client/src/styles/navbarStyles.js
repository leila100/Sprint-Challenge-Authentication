import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavbarWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-evenly;
  font-size: 2rem;
  background-color: #274759;
  padding: 10px;
  a {
    color: white;
    margin-right: 20px;
    padding-bottom: 5px;
  }

  .active {
    border-bottom: 1px solid #33ccff;
  }

  button {
    color: white;
    width: 30%;
    background-color: #274759;
    border: none;
    font-size: 1.7rem;
    cursor: pointer;
  }
`
