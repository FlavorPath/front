import { useNavigate } from "react-router-dom";
import { useNavigationStore } from "@/store/stores/navigation.store";

export const useNavigation = () => {
  const navigate = useNavigate();
  const { activeTab, setActiveTab } = useNavigationStore();

  const handleTabChange = (iconName: string, path: string) => {
    setActiveTab(iconName);
    navigate(path);
  };

  return {
    activeTab,
    onTabChange: handleTabChange,
  };
};
