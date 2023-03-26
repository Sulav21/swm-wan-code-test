import React from "react";
import "./headline.css";

export const Headline = ({ news, trimImagePath }) => {
  const imgPath = require("../../assets/images" + trimImagePath(news.image));

  return (
    <div className="headline">
      <div className="headline-content">
        <div className="title">
          <h1>{news.head}</h1>
          <p className="news-teaser">{news.teaser}</p>
        </div>
        <div className="author">
          <p>{news.byline.text}</p>
        </div>
      </div>
      <div className="headline-image">
        <img src={imgPath} alt="Wage Worker" />
      </div>
    </div>
  );
};
