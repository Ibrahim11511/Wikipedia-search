const getFavArticleFromLocalStorage = () => {
  const storedData = localStorage.getItem("favArticles");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

export { getFavArticleFromLocalStorage };
