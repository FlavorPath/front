import { css } from "@styled-system/css";
import { center, flex } from "@styled-system/patterns";

export const authStyles = {
  error: css({
    borderBottomColor: "secondary.red",
    borderBottomWidth: "1px",
  }),
  error_text: css({
    color: "secondary.red",
    textStyle: "body2",
    marginTop: "8px",
  }),
  form: css({
    display: "flex",
    flexDir: "column",
    margin: "0 30px",
    gap: "46px",
  }),
  link_text: css({
    textAlign: "center",
    textStyle: "caption1",
    fontWeight: "light",
    marginTop: "16px",
  }),
  button_grp: css({
    width: "calc(100% - 60px)",
    position: "absolute",
    bottom: "128px",
    left: 0,
    margin: "0 30px",
  }),
  input_wrap: flex({
    flexDirection: "column",
    gap: "54px",
    margin: "0 30px",
  }),
  logo_box: center({
    width: "375px",
    height: "214px",
    marginBottom: "30px",
  }),
};
