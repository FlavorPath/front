import { css } from "@styled-system/css";
import Icon from "@/ui/view/atom/Icon";
import KoreanLabel from "@/assets/reviewLabel/KoreanLabel.svg";
import DessertLabel from "@/assets/reviewLabel/DessertLabel.svg";
import ChineseLabel from "@/assets/reviewLabel/ChineseLabel.svg";
import WesternLabel from "@/assets/reviewLabel/WesternLabel.svg";
import JapaneseLabel from "@/assets/reviewLabel/JapaneseLabel.svg";

const ReviewLabels = {
  한식: KoreanLabel,
  디저트: DessertLabel,
  중식: ChineseLabel,
  양식: WesternLabel,
  일식: JapaneseLabel,
} as const;

type LabelType = keyof typeof ReviewLabels;

type ReviewItemProps = {
  content: string;
  name: string;
  reviewId: number;
  label: LabelType; // `label`은 `LabelType`만 허용
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const UserReviewItem = ({
  content,
  reviewId,
  onEdit,
  onDelete,
  label,
  name,
}: ReviewItemProps) => {
  const LabelIcon = ReviewLabels[label];

  return (
    <div className={styles.reviewItem}>
      <div className={styles.reviewHeader}>
        <div className={styles.labelWrapper}>
          {LabelIcon && (
            <img src={LabelIcon} alt={label} className={styles.labelIcon} />
          )}
        </div>
        <p className={styles.restaurantName}>{name}</p>
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
  labelWrapper: css({
    display: "flex",
    alignItems: "center",
    gap: "8px",
  }),
  labelIcon: css({
    width: "24px",
    height: "24px",
  }),
  labelText: css({
    textStyle: "body2",
    fontWeight: "bold",
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
