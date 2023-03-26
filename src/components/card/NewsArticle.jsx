import React from "react";
import "./newsArticle.css";
export const NewsArticle = ({
  news,
  trimImagePath,
  noImage,
  noDescription,
}) => {
  const imagePath = require("../../assets/images" +
    trimImagePath(news.image));

  return (
    <div className="article-card">
      <div className="card-image">
        {!noImage && <img src={imagePath} alt="" />}
      </div>
      <div className="card-content">
        <h2>{news.head}</h2>
        {!noDescription && <p className="news-teaser">{news.teaser}</p>}
      </div>
      <div className="author"><p>{news.byline.text}</p></div>
    </div>
  );
};
