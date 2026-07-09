import styles from './BottomBlockWrapper.module.css';
import Left from "./Left/Left.jsx";
import Right from "./Right/Right.jsx";

function BottomBlockWrapper() {
 return (
     <div className={`${styles["BottomBlockWrapper"]} d-flex`}>

      <Left></Left>
      <Right></Right>

     </div>
 )
}
export default BottomBlockWrapper;