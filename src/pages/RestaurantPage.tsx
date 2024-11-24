import Restaurant from "@/ui/components/restaurant/Restaurant";
import Header from "@/ui/view/molecule/Header";
import { css } from "@styled-system/css";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const RestaurantPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const restarauntId = id ? parseInt(id, 10) : 0;
  if (!restarauntId) {
    return <div>식당 정보를 불러올 수 없습니다.</div>;
  }
  const NavigateToHome = navigate("/");
  return (
    <div className={styles.container}>
      <Header onClick={() => NavigateToHome} />
      <Restaurant restarauntId={restarauntId} />
      <Outlet context={restarauntId} />
    </div>
  );
};

export default RestaurantPage;

const styles = {
  container: css({
    width: "100%",
    height: "100%",
  }),
};
