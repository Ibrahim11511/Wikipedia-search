import BoxsContainer from "../../Components/Boxs Container/BoxsContainer";
import { getFavArticleFromLocalStorage } from "../../utils";
import Styles from "./favorites.module.css";
export default function Favorites() {
  return (
    <section className={Styles.favorites}>
      <BoxsContainer apiResult={getFavArticleFromLocalStorage()} />
    </section>
  );
}
