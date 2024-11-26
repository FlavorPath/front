import { center, flex } from "@styled-system/patterns";
import { css } from "@styled-system/css";
import Icon from "../atom/Icon";
import { useLocation, useNavigate } from "react-router-dom";

interface IProps {
  headerText?: string;
  hideArrow?: boolean;
}

const Header = ({ headerText, hideArrow }: IProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const canGoBack = window.history.length > 1;

  const goBack = () => {
    if (location.pathname.includes("restaurant")) {
      if (window.history.state?.usr?.from === '/') {
        navigate('/');
      } else {
        navigate(-1);
      }
    } else {
      navigate(-1);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.text}>{headerText}</div>
      {!hideArrow && canGoBack && (
        <Icon
          library="hero-solid"
          size={24}
          onClick={() => goBack()}
          className={styles.back_btn}
          iconName={"ArrowLeftIcon"}
        />
      )}
    </header>
  );
};

export default Header;

const styles = {
  header: flex({
    width: "100%",
    height: "58px",
    position: "relative",
    "& > button > svg": {
      fill: "black",
    },
  }),
  back_btn: css({
    position: "absolute",
    left: "15px",
    top: "50%",
    transform: "translateY(-50%)",
  }),
  text: center({
    width: "100%",
    paddingTop: "4px",
    textStyle: "heading2",
    fontFamily: "Gmarket Sans",
  }),
};
