import type { FC } from "react";
import { useNavigate } from "react-router-dom";

// import classNames from "classnames";
// import { useRouter } from "next/navigation";

import styles from "./styles.module.scss";
import type { TCategoryType } from "./types";
import IconComponent from "../IconComponent";
import classNames from "classnames";

const Category: FC<TCategoryType> = ({ name, Icon, navigate, isActive }) => {
  //   const router = useRouter();
  const goTo = useNavigate();
  return (
    <div
      className={classNames(styles.wrapper, isActive && styles.active)}
      onClick={() => goTo(navigate)}
      role="button"
    >
      <div className={styles.icon}>
        <IconComponent icon={Icon} />
      </div>
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default Category;
