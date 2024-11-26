import UserInfo from "@/ui/components/userInfo/UserInfo";
import Header from "@/ui/view/molecule/Header";
import { css } from "@styled-system/css";

const UserInfoPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userWrapper}>
        <Header headerText="내 정보" />
        <UserInfo />
      </div>
    </div>
  );
};

export default UserInfoPage;

const styles = {
  container: css({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDir: "column",
  }),
  userWrapper: css({
    display: "flex",
    flexDir: "column",
    width: "100%",
    height: "340px",
  }),
};
