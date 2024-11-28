import useSelectedRestaurant from "@/hooks/restaurant/useSelectedRestaurant.hook";
import Icon from "@/ui/view/atom/Icon";
import Loading from '@/ui/view/atom/Loading';
import LabelGroup from "@/ui/view/molecule/LabelGroup";
import RestaurantNavigation from "@/ui/view/molecule/RestaurantNavigation";
import Slider from "@/ui/view/molecule/Slider";
import { css } from "@styled-system/css";
import { center } from '@styled-system/patterns';
import { useState, useEffect } from "react";

type RestaurantLayoutProps = {
  restarauntId: number;
};

const Restaurant = ({ restarauntId }: RestaurantLayoutProps) => {
  const { restaurantDetail, mutate, isMutating } =
    useSelectedRestaurant(restarauntId);
  const [activeBookMarker, setActiveBookMarker] = useState(false);

  useEffect(() => {
    if (restaurantDetail) {
      setActiveBookMarker(restaurantDetail.isScraped);
    }
  }, [restaurantDetail]);

  const handleBookmarkClick = () => {
    if (restaurantDetail) {
      mutate(restaurantDetail.restaurantId, {
        onSuccess: () => {
          setActiveBookMarker((prev) => !prev);
        },
        onError: (error) => {
          console.error("Bookmark update failed:", error);
        },
      });
    }
  };

  return (
    <>
      {restaurantDetail ? (
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={css({ textStyle: 'heading1' })}>
              {restaurantDetail ? restaurantDetail.name : <Loading />}
            </h1>
            <Icon
              iconName='BookmarkIcon'
              library='hero-solid'
              onClick={handleBookmarkClick}
              className={css({
                fill: activeBookMarker ? 'primary.main' : 'white',
                stroke: 'primary.main',
                strokeWidth: '2px',
                cursor: isMutating ? 'not-allowed' : 'pointer',
                transition: 'stroke 0.2s',
              })}
            />
          </div>
          <div className={styles.main}>
            {restaurantDetail && (
              <>
                <LabelGroup labelItems={restaurantDetail.labels} />
                <Slider images={restaurantDetail.images} />
              </>
            )}
          </div>
          <RestaurantNavigation />
        </div>
      ) : (
        <div className={styles.loading_box}>
          <Loading />
        </div>
      )}
    </>
  );
};

export default Restaurant;

const styles = {
  container: css({
    width: '375px',
    margin: '0 auto',
    height: '350px',
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '7px',
  }),
  header: css({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px 0px 20px',
  }),
  main: css({
    padding: '0px 20px 0px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '7px',
  }),
  loading_box: center({
    width: '375px',
    height: '350px',
  })
};
