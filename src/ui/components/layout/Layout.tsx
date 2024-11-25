import { useEffect } from "react";
import { css } from "@styled-system/css";
import useAuth from '@/store/stores/auth.store';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { accessToken } = useAuth()

  useEffect(() => {
    const publicPaths = ['/auth/login', '/auth/signup'];
    if ((!accessToken && !publicPaths.includes(location.pathname))) {
      navigate('/auth/login')
    } 
  }, [accessToken, location.pathname]);

  return (
    <div className={styles.container}>
      <main className={styles.inner}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

const styles = {
  container: css({
    width: "100dvw",
    height: "100vh",
    fontFamily: "Gmarket Sans",
  }),
  inner: css({
    margin: "0 auto",
    width: "375px",
    height: "100%",
  }),
};
