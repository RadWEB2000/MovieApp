import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Navigation } from './components/schema/Navigation';
import { StartView } from './view/StartView';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap');

  *{
    box-sizing:border-box;
    font-family: 'Cairo', sans-serif;
    margin:0;
    padding:0;
  }

  *::after,
  *::before{
    content:'';
    position:absolute;
  }

  *::selection{
    background:#E63946;
    color:#070a0e;
  }

  html{
    font-size:62.5%;
  }

  body{
    background:#070A0E;
    color:yellowgreen;
    overflow-x:hidden;
    width:100vw;
  }

  a{
    text-decoration:none;
  }

  li,
  ol,
  ul{
    list-decoration:none;
  }

`
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
      <Navigation />
        <Switch>
          <Route exact path='/' component={StartView}/>
        </Switch>
      </Router>
    </>
  )
}
