import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/ui/view/molecule/Header";

type AuthPathType = "/auth/signup" | "/auth/login";

const AuthLayout = () => {
  const location = useLocation();
  const [type, setType] = useState<AuthPathType>("/auth/login");

  useEffect(() => {
    setType(location.pathname as AuthPathType);
  }, [location.pathname]);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Header headerText={type === "/auth/signup" ? "회원가입" : "로그인"} />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
