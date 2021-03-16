import React from 'react';
import styled from 'styled-components'
import Nav from './components/Nav'

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const Wrapper = styled.div`
/* border:1px solid red; */
min-height:100vh;
display:flex;
flex-direction:column;
`
const Main = styled.div`
/* border:1px solid green;  */
flex-grow:1;
overflow:auto;
`

function App() {
  return (
    <Router>
      <Wrapper>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
            <Redirect exact from="/" to="/money" />
          </Switch>
        </Main>
        <Nav />
          
        

      </Wrapper>
    </Router>
  );
}
function NoMatch() {
  return (
    <div>页面不存在，地址错误</div>
  )
}
function Statistics() {
  return <h2>统计页</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}
export default App;
