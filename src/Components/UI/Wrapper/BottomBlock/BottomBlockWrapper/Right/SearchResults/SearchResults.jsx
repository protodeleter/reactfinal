import styles from './SearchResults.module.css'
import arrQuotes from "../../../../../../../db.jsx";
import SingleQuote from "../../../../../SingleQuote/SingleQuote.jsx";


function SearchResults({ searchText }) {

    console.log(searchText);

    let res = getSearchResByText(searchText)

    return <div className={`${styles["SearchResults"]}`}>

        {
            res.map((item, index) => {
                return (
                    <SingleQuote author={item.name} quote={item.quote} key={index}></SingleQuote>
                )
            })
        }

    </div>
}

function getSearchResByText(text) {

    return arrQuotes.filter((item) => {
        const quoteText = item.quote.toLowerCase();
        const nameText = item.name.toLowerCase();
        const search = text.toLowerCase();

        if ( text.length > 0 ) {


        return quoteText.includes(search) || nameText.includes(search);
        }
    });
}

export default SearchResults;