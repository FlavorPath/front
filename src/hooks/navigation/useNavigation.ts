import { useLocation, useNavigate } from "react-router-dom";
import { useNavigationStore } from "@/store/stores/navigation.store";
import { useEffect } from 'react';

export const useNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { activeTab, setActiveTab } = useNavigationStore();

  const handleTabChange = (iconName: string, path: string) => {
    setActiveTab(iconName);
    navigate(path);
  };

  useEffect(() => {
    if (pathname === '/bookmarks') {
      setActiveTab('BookmarkIcon');
    }
  }, [pathname])

  return {
    activeTab,
    onTabChange: handleTabChange,
  };
};
