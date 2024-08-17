import type { FC } from "react";
import SideMenu from "../../components/SideMenu";

import styles from "./styles.module.scss";
import type { TPageLayoutProps } from "./types";

const PageLayout: FC<TPageLayoutProps> = ({ children }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.menu}>
        <SideMenu />
      </div>
      <div className={styles.main}>{children}</div>
    </section>
  );
};

export default PageLayout;
