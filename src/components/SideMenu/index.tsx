import { useLocation } from "react-router-dom";
import Category from "../Category";
import styles from "./styles.module.scss";
import { categoryData } from "./utils";

const SideMenu = () => {
  const location = useLocation();
  return (
    <div className={styles.wrapper}>
      {categoryData.map((element, index) => (
        <Category
          isActive={location.pathname === element.path}
          navigate={element.path}
          key={index}
          name={element.name}
          Icon={element.icon}
        />
      ))}
    </div>
  );
};
export default SideMenu;
