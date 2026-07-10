import styles from "./Right.module.css";
import BlockTitle from "../../../../BlockTitle/BlockTitle.jsx";
import SearchResults from "./SearchResults/SearchResults.jsx";

function Right({ searchText }) {
    return <div className={`${styles["RightBlock"]}`}>

        <BlockTitle text={"Search Results"}/>
        <SearchResults searchText={searchText} />

    </div>;
}
export default Right;