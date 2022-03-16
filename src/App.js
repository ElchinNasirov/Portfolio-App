import { Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"

// Components
import Main from "./components/Main"
import About from "./components/About"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Blog from "./components/Blogs"

function App() {
  return <>

    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/skills" component={Skills}/>
      </Switch>
    </ThemeProvider>

  </>

}

export default App
