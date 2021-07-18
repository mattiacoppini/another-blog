import { createGlobalStyle } from "styled-components"
import { NavBar } from "../Navbar"
import MainContent from "./MainContent"

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: #fafafa;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <MainContent>
        { children }
      </MainContent>
    </>
  )
}

export default Layout