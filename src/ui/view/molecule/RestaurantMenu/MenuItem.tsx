import { css } from "@styled-system/css";

type MenuItemProp = {
  image: string;
  name: string;
  price: string;
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
          {price}
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
  }),
  img: css({
    width: "44px",
    height: "44px",
  }),
  wrapper: css({
    display: "flex",
    flexDir: "column",
  }),
};
