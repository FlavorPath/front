import { css } from "@styled-system/css";

type RestaurantReviewItemProps = {
  nickname: string;
  profileIcon: string;
  content: string;
};

const RestaurantReviewItem = ({
  nickname,
  profileIcon,
  content,
}: RestaurantReviewItemProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userWrapper}>
        <img src={profileIcon} alt="프로필 이미지" className={styles.userImg} />
        <div
          className={css({
            textStyle: "body1",
            display: "flex",
            alignItems: "center",
          })}
        >
          {nickname}
        </div>
      </div>
      <div
        className={css({
          textStyle: "body3",
          whiteSpace: "pre-wrap",
        })}
      >
        {content}
      </div>
    </div>
  );
};

export default RestaurantReviewItem;

const styles = {
  wrapper: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "10px",
    borderBottom: "1px solid #eee",
  }),
  userWrapper: css({
    display: "flex",
    gap: "8px",
    alignItems: "center",
  }),
  userImg: css({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  }),
};
