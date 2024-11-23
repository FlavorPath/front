import { ReactNode } from "react";
import { css } from "@styled-system/css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <main className={styles.inner}>{children}</main>
    </div>
  );
};

export default Layout;

const styles = {
  container: css({
    width: "100dvw",
    height: "100vh",
    fontFamily: "Gmarket Sans",
  }),
  inner: css({
    margin: "0 auto",
    width: "375px",
    height: "100%",
  }),
};
