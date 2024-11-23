import Restaurant from "@/ui/components/restaurant/Restaurant";
import { css } from "@styled-system/css";
import { Outlet, useParams } from "react-router-dom";

const RestaurantPage = () => {
  const { id } = useParams<{ id: string }>();
  const restarauntId = id ? parseInt(id, 10) : 0;

  if (!restarauntId) {
    return <div>식당 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <div className={styles.container}>
      <Restaurant restarauntId={restarauntId} />
      <Outlet />
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
