import Styles from "./boxscontainer.module.css";
import SearchBox from "../Search Box/SearchBox";
import { useEffect, useState } from "react";
import { getFavArticleFromLocalStorage } from "../../utils";

export default function BoxsContainer({ apiResult }) {
  const [favArticles, setFavArticles] = useState(
    getFavArticleFromLocalStorage()
  );
  const favIDS = favArticles.map((article) => article.pageid);
  useEffect(() => {
    localStorage.setItem("favArticles", JSON.stringify(favArticles));
  }, [favArticles]);
  if (apiResult.length === 0) {
    return (
      <p className={Styles.noResult}>
        No search result, try searching for something
      </p>
    );
  }
  return (
    <div className={Styles.boxsContainer}>
      {apiResult.map((result) => (
        <SearchBox
          key={result.pageid}
          title={result.title}
          pageid={result.pageid}
          snippet={result.snippet}
          favArticles={favArticles}
          setFavArticle={setFavArticles}
          isFavorites={favIDS.includes(result.pageid)}
        />
      ))}
    </div>
  );
}
