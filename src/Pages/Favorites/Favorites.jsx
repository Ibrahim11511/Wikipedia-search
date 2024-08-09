import BoxsContainer from "../../Components/Boxs Container/BoxsContainer";
import { getFavArticleFromLocalStorage } from "../../utils";
import Styles from "./favorites.module.css";
export default function Favorites() {
  getFavArticleFromLocalStorage();
  if (getFavArticleFromLocalStorage().length === 0) {
    return <p className={Styles.noResult}>There is no favorites</p>;
  }
  return (
    <section className={Styles.favorites}>
      <BoxsContainer apiResult={getFavArticleFromLocalStorage()} />
    </section>
  );
}
