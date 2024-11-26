import { css } from "@styled-system/css";

import { useSelectedUser } from "@/hooks/userInfo/useUserProfile.hook";
import ProfileImageUpload from "./ProfileImageUpload";

const UserInfo = () => {
  const { userInfo, isUserLoading, userError } = useSelectedUser();

  if (isUserLoading) {
    return <p>로딩 중...</p>;
  }

  if (userError) {
    return <p>사용자 정보를 가져오는 중 오류가 발생했습니다.</p>;
  }

  return (
    <div className={styles.container}>
      <ProfileImageUpload />

      <h1 className={styles.nickname}>
        {userInfo?.data.nickname || "닉네임 없음"}
      </h1>
      <p className={styles.tag}>{userInfo?.data.tag || "태그 없음"}</p>
    </div>
  );
};

export default UserInfo;

const styles = {
  container: css({
    textAlign: "center",
    marginTop: "20px",
  }),
  nickname: css({
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "10px",
  }),
  tag: css({
    fontSize: "18px",
    color: "#888",
  }),
};
