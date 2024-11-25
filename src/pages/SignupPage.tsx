import { SignupFormData, useSignup } from "@/hooks/useSignup";
import Button from "@/ui/view/atom/Button";
import Input from "@/ui/view/atom/Input";
import { css, cx } from "@styled-system/css";
import { Link } from "react-router-dom";
import { authStyles as styles } from "@/styles/auth.styles";

const SignUpPage = () => {
  const { onSubmit, onChange, inputs, getPlaceholder, getErrorMessage } =
    useSignup();

  return (
    <div className={css({ height: "calc(100dvh - 60px)" })}>
      <form
        onSubmit={onSubmit}
        className={cx(styles.form, css({ marginTop: "28px", gap: "40px" }))}
      >
        {Object.keys(inputs).map((key) => (
          <div key={key}>
            <Input
              name={key}
              type={key.includes("password") ? "password" : "text"}
              value={inputs[key as keyof SignupFormData]}
              onChange={onChange}
              className={getErrorMessage(key) ? styles.error : ""}
              placeholder={getPlaceholder(key)}
            />
            <p className={styles.error_text}>{getErrorMessage(key)}</p>
          </div>
        ))}

        <div className={cx(styles.button_grp, css({ bottom: "23px" }))}>
          <Button
            type="submit"
            size="large"
            variant="filled"
            className={css({ width: "100%" })}
          >
            회원가입하기
          </Button>
          <p className={styles.link_text}>
            회원이라면?{" "}
            <Link to="/auth/login" className={css({ fontWeight: "medium" })}>
              로그인하기
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
