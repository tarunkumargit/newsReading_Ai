import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';


import useStyles from './style.js'

const alanKey = '1045ddd76cecf07541bf83717e6a4c562e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command === 'newHeadlines'){
        setNewsArticles(articles);
        setActiveArticle(-1);
        }else if( command === 'highlight' ){
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      }
    })
  }, [])
  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2019%2F10%2Falan.jpg&f=1&nofb=1"
          className={classes.alanLogo}
          alt="Alan logo"
        />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;