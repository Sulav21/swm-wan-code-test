import './App.css';
import { useState } from "react";
import news from "./helpers/news.json";
import { Headline } from './components/headline/Headline';
import { NewsArticle } from './components/card/NewsArticle';

const App=()=>{
  const [articleNews, setArticleNews] = useState(news.articles);
  const [noImage, setNoImage] = useState(false);
  const [noDescription, setNoDescription] = useState(false);

  // Function to trim the image path from json file
  const trimImagePath = (imagePath) => {
    if (imagePath.includes("/")) {
      const indexOfSlash = imagePath.indexOf("/");
      const newImagePath = imagePath.slice(indexOfSlash);
      return newImagePath;
    } else {
      return "/" + imagePath;
    }
  };

  return (
     <div className="main">
      <div className="main-left">
        <Headline news={articleNews[0]} trimImagePath={trimImagePath} />
        <div className="articles">
          <div className="articleCard">
            <NewsArticle news={articleNews[5]} trimImagePath={trimImagePath} />
          </div>
          <div className="briefArticleCard">
            <NewsArticle
              news={articleNews[2]}
              trimImagePath={trimImagePath}
              noImage={() => setNoImage(true)}
            />

            <div className="border-btm" />
            <NewsArticle
              news={articleNews[3]}
              trimImagePath={trimImagePath}
              noImage={() => setNoImage(true)}
            />
          </div>
          <div className="articleCard">
            <NewsArticle news={articleNews[4]} trimImagePath={trimImagePath} />
          </div>
        </div>
      </div>
      <div className="main-right">
      
      </div>
    </div>
  );
}

export default App;
