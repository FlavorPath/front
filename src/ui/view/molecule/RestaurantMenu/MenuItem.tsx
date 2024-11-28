import { css } from "@styled-system/css";

type MenuItemProp = {
  image: string;
  name: string;
  price: string;
};

const formatPrice = (price: string): string => {
  const numericPrice = parseFloat(price);
  return isNaN(numericPrice)
    ? "가격 정보 없음"
    : `${numericPrice.toLocaleString()}원`;
};

const MenuItem = ({ image, name, price }: MenuItemProp) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={image} alt="이미지 준비중" />
      </div>
      <div className={styles.wrapper}>
        <div className={css({ textStyle: "body2", padding: "2px" })}>
          {name}
        </div>
        <div className={css({ textStyle: "body2", padding: "2px" })}>
          {formatPrice(price)}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

const styles = {
  container: css({
    display: "flex",
    height: "44px",
    gap: 10,
  }),
  img: css({
    width: "44px",
    height: "44px",
    maxHeight: "44px",
    overflow: "hidden",
    borderRadius: 5,
  }),
  wrapper: css({
    display: "flex",
    flexDir: "column",
    gap: 10,
  }),
};
