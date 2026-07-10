import styles from './BottomBlockWrapper.module.css';
import Left from "./Left/Left.jsx";
import Right from "./Right/Right.jsx";

function BottomBlockWrapper({ searchText }) {
 return (
     <div className={`${styles["BottomBlockWrapper"]} d-flex`}>

      <Left></Left>
      <Right searchText={searchText}></Right>

     </div>
 )
}
export default BottomBlockWrapper;