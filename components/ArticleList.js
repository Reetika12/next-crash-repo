import React from "react";
import articleStyle from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyle.grid}>
      {articles?.map((article) => (
        <ArticleItem article={article} />
        // <h3 key={article.id}>{article.title}</h3>
      ))}
    </div>
  );
};

export default ArticleList;
