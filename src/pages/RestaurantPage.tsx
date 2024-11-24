import { useEffect } from "react";
import Restaurant from "@/ui/components/restaurant/Restaurant";
import Header from "@/ui/view/molecule/Header";
import { css } from "@styled-system/css";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const RestaurantPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const restarauntId = id ? parseInt(id, 10) : 0;
  useEffect(() => {
    if (!restarauntId) {
      navigate("/");
    }
  }, [restarauntId, navigate]);
  if (!restarauntId) {
    return null;
  }
  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <Header onClick={handleNavigateToHome} />
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
