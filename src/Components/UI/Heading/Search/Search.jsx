
import styles from './Search.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function Search() {

    return (
        <>
            <div className={styles['Search-container']}>
                <input type="text" className={`${styles['search-input']}`} placeholder="Search" name="searchInput" />
                <button className={`${styles['search-button']}`} onClick={() => {}}>
                    <FontAwesomeIcon icon={['fas', 'search']} />
                </button>
            </div>
        </>
    )
}
export default Search;