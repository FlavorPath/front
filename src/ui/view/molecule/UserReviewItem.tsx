import { css } from "@styled-system/css";
import Icon from "@/ui/view/atom/Icon";

type ReviewItemProps = {
  restaurantId: number;
  content: string;
  createdAt: string;
  reviewId: number;
  label: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const UserReviewItem = ({
  restaurantId,
  content,
  createdAt,
  reviewId,
  onEdit,
  onDelete,
  label,
}: ReviewItemProps) => {
  return (
    <div className={styles.reviewItem}>
      <div className={styles.reviewHeader}>
        <p className={styles.restaurantName}>라벨: {label}</p>
        <p className={styles.restaurantName}>식당명: {restaurantId}</p>
        <div className={styles.iconWrapper}>
          <Icon
            iconName="PencilSquareIcon"
            library="hero-solid"
            fill="#d9d9d9"
            onClick={() => onEdit(reviewId)}
            className={styles.icon}
          />
          <Icon
            iconName="TrashIcon"
            library="hero-solid"
            fill="#d9d9d9"
            onClick={() => onDelete(reviewId)}
            className={styles.icon}
          />
        </div>
      </div>
      <div className={styles.reviewContent}>{content}</div>
    </div>
  );
};

export default UserReviewItem;

const styles = {
  reviewItem: css({
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "relative",
  }),
  reviewHeader: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  restaurantName: css({
    textStyle: "body2",
    fontWeight: "bold",
  }),
  iconWrapper: css({
    display: "flex",
    gap: "10px",
  }),
  icon: css({
    cursor: "pointer",
    width: "20px",
    height: "20px",
  }),
  reviewContent: css({
    textStyle: "body3",
    color: "#333",
  }),
  reviewDate: css({
    textStyle: "body4",
    color: "#777",
  }),
};
