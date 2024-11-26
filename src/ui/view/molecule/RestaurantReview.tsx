import { css } from "@styled-system/css";

const RestaurantReviewItem = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userWrapper}>
        <img
          src="https://jmagazine.joins.com/_data2/photo/2021/04/838745483_FJchmDQj_7.jpg"
          alt="이미지 준비중"
          className={styles.userImg}
        />
        <div
          className={css({
            textStyle: "body1",
            display: "flex",
            alignItems: "center",
          })}
        >
          귀여운 뽀삐
        </div>
      </div>
      <div
        className={css({
          textStyle: "body3",
        })}
      >
        이 식당은 정말 훌륭했습니다! 먼저, 직원들이 매우 친절하고 세심하게
        서비스를 제공해주어 기분 좋게 식사를 시작할 수 있었습니다. 음식은
        신선하고 정성스럽게 조리된 것이 느껴졌으며, 특히 대표 메뉴인
        차돌김치찌개는 깊은 맛이 일품이었습니다. 양도 넉넉해서 배부르게 먹을 수
        있었고, 가격도 합리적이라 가성비가 좋다고 느꼈습니다. 또한, 내부
        인테리어도 깔끔하고 편안한 분위기를 제공해주어 가족, 친구들과 함께
        방문하기 좋은 장소였습니다. 주차 공간도 넉넉하여 접근성이 좋아 다음에도
        꼭 다시 방문하고 싶습니다.
      </div>
    </div>
  );
};

export default RestaurantReviewItem;

const styles = {
  reviewWrapper: css({
    height: "70px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
  wrapper: css({
    width: "335px",
    display: "flex",
    flexDir: "column",
    gap: "8px",
  }),
  userWrapper: css({
    display: "flex",
    gap: "8px",
  }),
  userImg: css({
    width: "20px",
    height: "20px",
    borderRadius: "50%",
  }),
  // reviewWrapper: css({
  //   whiteSpace: "pre-wrap",
  // }),
};
