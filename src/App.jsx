import './App.css';
import { useState } from "react";
import news from "./helpers/news.json";
import { Headline } from './components/headline/Headline';

const App=()=>{
  const [articleNews, setArticleNews] = useState(news.articles);

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
      </div>
      <div className="main-right">
      
      </div>
    </div>
  );
}

export default App;
