import { createGlobalStyle, ThemeProvider } from "styled-components"
import { NavBar } from "../Navbar"
import theme from "../ui/themes/prefab/MyTheme"
import MainContent from "./MainContent"

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: #fafafa;
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
      <MainContent>
        { children }
      </MainContent>
    </ThemeProvider>
  )
}

export default Layout