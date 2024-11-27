import { css } from "@styled-system/css";
import { useState } from "react";
import { useSelectedUser } from "@/hooks/userInfo/useUserProfile.hook";
import ProfileImageUpload from "./ProfileImageUpload";
import Icon from "@/ui/view/atom/Icon";

const UserInfo = () => {
  const {
    userInfo,
    isUserLoading,
    userError,
    updateNickname: updateNicknameMutate,
    isNicknameUpdating,
    refetchUserInfo,
  } = useSelectedUser();

  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState(userInfo?.data.nickname || "");

  const handleSaveNickname = () => {
    if (!nickname.trim()) {
      alert("닉네임은 비어 있을 수 없습니다.");
      return;
    }

    updateNicknameMutate(
      { nickname: nickname },
      {
        onSuccess: () => {
          alert("닉네임이 성공적으로 변경되었습니다.");
          setIsEditing(false);
          refetchUserInfo();
        },
        onError: (error) => {
          console.error("닉네임 변경 실패:", error);
          alert("닉네임 변경 중 오류가 발생했습니다.");
        },
      }
    );
  };

  if (isUserLoading) {
    return <p>로딩 중...</p>;
  }

  if (userError) {
    return <p>사용자 정보를 가져오는 중 오류가 발생했습니다.</p>;
  }

  return (
    <div className={styles.container}>
      <ProfileImageUpload />

      <div className={styles.nicknameContainer}>
        {isEditing ? (
          <>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className={styles.nicknameInput}
              maxLength={20}
            />
            <button onClick={handleSaveNickname} className={styles.saveButton}>
              저장
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className={styles.cancelButton}
            >
              취소
            </button>
          </>
        ) : (
          <>
            <span className={styles.nickname}>
              {userInfo?.data.nickname || "닉네임 없음"}
            </span>
            <span className={styles.tag}>
              {userInfo?.data.tag || "태그 없음"}
            </span>
            <Icon
              iconName="PencilIcon"
              library="hero-solid"
              fill="#000000"
              className={styles.editIcon}
              onClick={() => setIsEditing(true)}
            />
          </>
        )}
      </div>

      {isNicknameUpdating && <p>닉네임 변경 중...</p>}
    </div>
  );
};

export default UserInfo;

const styles = {
  container: css({
    textAlign: "center",
    borderRadius: "5px",
    padding: "10px",
  }),
  nicknameContainer: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginTop: "10px",
  }),
  nickname: css({
    fontSize: "18px",
    fontWeight: "bold",
  }),
  tag: css({
    fontSize: "18px",
    color: "#888",
  }),
  editIcon: css({
    cursor: "pointer",
    marginLeft: "5px",
    width: "18px",
    height: "18px",
  }),
  nicknameInput: css({
    fontSize: "16px",
    padding: "5px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  }),
  saveButton: css({
    marginLeft: "5px",
    padding: "5px 10px",
    backgroundColor: "primary.main",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }),
  cancelButton: css({
    marginLeft: "5px",
    padding: "5px 10px",
    backgroundColor: "white",
    color: "black",
    border: "1px solid #ff8700",
    borderRadius: "5px",
    cursor: "pointer",
  }),
};
