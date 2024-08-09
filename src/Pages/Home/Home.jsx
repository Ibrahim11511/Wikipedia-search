/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import SearchInput from "../../Components/Search Input/SearchInput";
import Styles from "./home.module.css";
import BoxsContainer from "../../Components/Boxs Container/BoxsContainer";

export default function Home() {
  const [apiResult, setApiResult] = useState([]);
  const [inputQuery, setInputQuery] = useState("");
  const getDataFromApi = async () => {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${inputQuery}`
    );
    const data = await response.json();
    setApiResult(() => data?.query?.search || []);
  };
  useEffect(() => {
    const debounce = setTimeout(() => {
      getDataFromApi();
    }, 600);
    return () => clearTimeout(debounce);
  }, [inputQuery]);

  return (
    <section className={Styles.home}>
      <SearchInput inputQuery={inputQuery} setInputQuery={setInputQuery} />
      <BoxsContainer apiResult={apiResult} />
    </section>
  );
}
