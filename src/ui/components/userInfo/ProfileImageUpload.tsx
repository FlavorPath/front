import { useSelectedUser } from "@/hooks/userInfo/useUserProfile.hook";
import { css } from "@styled-system/css";
import { useState } from "react";

const ProfileImageUpload = () => {
  const { userInfo, updateProfileIcon, isProfileIconUpdating } =
    useSelectedUser();
  const [preview, setPreview] = useState<string | null | undefined>(
    userInfo?.data.icon
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      updateProfileIcon(file);
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor="profile-image" className={styles.label}>
        <div className={styles.imageContainer}>
          {preview ? (
            <img src={preview} alt="미리보기" className={styles.image} />
          ) : (
            <div className={styles.placeholder}></div>
          )}
        </div>
      </label>
      <input
        type="file"
        id="profile-image"
        accept="image/*"
        onChange={handleImageChange}
        className={styles.input}
        disabled={isProfileIconUpdating}
      />
      {isProfileIconUpdating && <p>업로드 중...</p>}
    </div>
  );
};

export default ProfileImageUpload;

const styles = {
  container: css({
    textAlign: "center",
  }),
  label: css({
    display: "inline-block",
    cursor: "pointer",
  }),
  imageContainer: css({
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    border: "2px solid #ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  image: css({
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }),
  placeholder: css({
    width: "100%",
    height: "100%",
    backgroundColor: "#e0e0e0",
  }),
  input: css({
    display: "none",
  }),
};
