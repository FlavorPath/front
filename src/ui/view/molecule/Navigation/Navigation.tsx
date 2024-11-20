import { css } from "@styled-system/css";
import NavigationItem from "./NavigationItem";
import { useNavigation } from "@/hooks/navigation/useNavigation";
import * as HeroSolidIcon from "@heroicons/react/24/solid";
import * as HeroOutlineIcon from "@heroicons/react/24/outline";

const navigationItems = [
  { iconName: "HomeIcon", label: "홈", path: "/" },
  { iconName: "HandThumbUpIcon", label: "추천", path: "/recommendations" },
  { iconName: "BookmarkIcon", label: "스크랩", path: "/bookmarks" },
  { iconName: "UserIcon", label: "내 정보", path: "/profile" },
];

const Navigation = () => {
  const { activeTab, onTabChange } = useNavigation();

  return (
    <nav
      className={css({
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 0",
        backgroundColor: "white",
        borderTop: "1px solid #ff8700",
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "60px", // 네비게이션 높이 명확히 설정
        zIndex: 1000, // 다른 요소 위로 올리기
      })}
    >
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.iconName}
          iconName={
            item.iconName as keyof typeof HeroSolidIcon &
              keyof typeof HeroOutlineIcon
          }
          label={item.label}
          isActive={activeTab === item.iconName}
          onClick={() => onTabChange(item.iconName, item.path)}
        />
      ))}
    </nav>
  );
};

export default Navigation;
