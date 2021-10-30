import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import MainContainer from '../components/layout/MainContainer/MainContainer'
import MainContent from '../components/layout/MainContent/MainContent'
import StepComponent from '../components/Steps/Steps'
import Status from '../components/Status/Status'
import "../assets/static/logo (3).jpg"
import Context from '../context'
import Text from '../components/Text'

//const Context=React.createContext("")

function App() {
  const [state, setState] = useState(true)
  //const Context=React.createContext(state)
  return (
  <Context.Provider value={{ state, setState }}>
    <MainContainer>
      <Header />
      <Router>
        <Switch>
          <MainContent>
          <Route exact path='/'>
              <StepComponent />
          </Route>
          <Route exact path='/status'>
            <Status />
          </Route>
          </MainContent>
        </Switch>
      </Router>
      <Footer/>
    </MainContainer>
  </Context.Provider>
    );
}

export default App;
