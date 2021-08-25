import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Navigation } from './components/schema/Navigation';
import { StartView } from './view/StartView';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap');

  :root{
    --red:#e50914;
    --redDark:#881d24;
    --grey:#221f1f;
    --white:#f5f5f1;
  }


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
    background:#e50914;
    color:#221f1f;
  }

  html{
    font-size:62.5%;
  }

  body{
    background:var(--grey);
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
    list-style:none;
  }

`
export const App = () => {

  const [valueSearch, updateSearch] = useState('');
  const [titleMovie, titleUpdate] = useState('');
  const [popularMovie, popularUpdate] = useState('');

  const [descriptionMovie, descriptionUpdate] = useState('');
  const [releaseMovie, releaseUpdate] = useState('');
  const [rateMovie, rateUpdate] = useState('');

  const apiKEY = 'c0f0775fea18b0469df241482ffee21b';
  const apiQUERY = 'star wars the force'
  const apiLANG = 'en-US';
  const apiURL = `https://api.themoviedb.org/3/search/movie?&api_key=${apiKEY}&language=${apiLANG}&query=${apiQUERY}`;

  const updateSearchValue = e => {
    updateSearch(e.target.value);

    axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${apiKEY}&language=${apiLANG}&query=${valueSearch}`)
      .then(res => res)
      .then(e => {
        titleUpdate(e.data.results[0].title);
        popularUpdate(e.data.results[0].popularity);

        descriptionUpdate(e.data.results[0].overview);
        releaseUpdate(e.data.results[0].release_date);
        rateUpdate(Math.round(e.data.results[0].vote_average / 2));

        console.log(popularMovie);
      })
  }


  

  return (
    <>
      <GlobalStyle />
      <Router>
      <Navigation
          valueSearch={valueSearch}
          updateSearchValue={updateSearchValue}
      />
        <Switch>
          <Route
            exact
            path='/'
            component={
              () =>
                <StartView
                  valueSearch={valueSearch}

                  title={titleMovie}
                  popular={popularMovie}
                  description={descriptionMovie}
                  release={releaseMovie}
                  rate={rateMovie}
                />
            }
          />
        </Switch>
      </Router>
    </>
  )
}
