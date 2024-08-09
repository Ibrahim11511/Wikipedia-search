import Styles from "./searchbox.module.css";
export default function SearchBox({
  title,
  snippet,
  pageid,
  isFavorites,
  setFavArticle,
  favArticles,
}) {
  const addToFavorites = () => {
    setFavArticle((prev) => [...prev, { title, snippet, pageid }]);
  };

  const removeFromFavorites = () => {
    const filterRemovedArticle = favArticles.filter(
      (article) => article.pageid !== pageid
    );
    setFavArticle(filterRemovedArticle);
  };
  return (
    <div className={Styles.box}>
      <h2 className={Styles.title}>{title}</h2>
      <p
        className={Styles.snippet}
        dangerouslySetInnerHTML={{ __html: `${snippet}` }}
      ></p>
      <div className={Styles.btns}>
        <a href={`https://en.wikipedia.org/?curid=${pageid}`} target="_blank">
          Show More
        </a>
        {isFavorites ? (
          <button className={Styles.unFavBtn} onClick={removeFromFavorites}>
            &#10084;
          </button>
        ) : (
          <button className={Styles.favBtn} onClick={addToFavorites}>
            &#10084;
          </button>
        )}
      </div>
    </div>
  );
}
