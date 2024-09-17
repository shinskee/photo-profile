import styles from "./Accordion.module.scss";
import { useState } from "react";

function Accordion({ title, description, styleTitle, styleDescription, styleAccordion }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styleAccordion}>
      <div className={styleTitle}>
        <div>
          <p>{title}</p>
        </div>
        <button onClick={() => setIsActive(!isActive)}>
          {!isActive ? "+" : "-"}
        </button>
      </div>
      {isActive && (
        <div className={styleDescription}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
