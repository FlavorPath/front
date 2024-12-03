import React, { useState } from "react";
import Resizer from "react-image-file-resizer";
import { useSelectedUser } from "@/hooks/userInfo/useUserProfile.hook";
import { css } from "@styled-system/css";

const ProfileImageUpload = () => {
  const { userInfo, updateProfileIcon, isProfileIconUpdating } =
    useSelectedUser();
  const [preview, setPreview] = useState<string | null | undefined>(
    userInfo?.data.icon
  );

  const resizeFile = (file: File): Promise<string> =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        150,
        150,
        "JPEG",
        90,
        0,
        (uri) => {
          resolve(uri as string);
        },
        "base64"
      );
    });

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const resizedImage = await resizeFile(file);
        setPreview(resizedImage);

        // Convert base64 to File if needed
        const byteString = atob(resizedImage.split(",")[1]);
        const mimeString = resizedImage
          .split(",")[0]
          .split(":")[1]
          .split(";")[0];
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const intArray = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
          intArray[i] = byteString.charCodeAt(i);
        }
        const optimizedFile = new Blob([arrayBuffer], { type: mimeString });

        // Update profile icon with optimized file
        updateProfileIcon(
          new File([optimizedFile], file.name, { type: mimeString })
        );
      } catch (err) {
        console.error("이미지 최적화 중 오류 발생:", err);
      }
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
