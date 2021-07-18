import styled from "styled-components"

const StyledMain = styled.main`
  height: calc(100vh - 40px);
`

const MainContent = ({ children }) => {

  return <StyledMain>
    { children }
  </StyledMain>
}

export default MainContent
