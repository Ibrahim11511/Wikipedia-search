import Styles from "./searchinput.module.css";
export default function SearchInput({ inputQuery, setInputQuery }) {
  return (
    <input
      onChange={(e) => setInputQuery(e.target.value)}
      value={inputQuery}
      className={Styles.input}
      placeholder="Enter word to search..."
      type="text"
    />
  );
}
