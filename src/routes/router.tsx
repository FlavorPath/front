import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import ScrapPage from '@/pages/ScrapPage';
import SearchPage from '@/pages/SearchPage';
import SignUpPage from '@/pages/SignupPage';
import AuthLayout from '@/ui/components/layout/AuthLayout';
import NavigationLayout from "@/ui/components/layout/NavigationLayout";

const router = [
  {
    path: "/",
    element: <NavigationLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/recommendations",
        element: <div>추천 페이지</div>, // 페이지 추가 필요
      },
      {
        path: "/bookmarks",
        element: <div>스크랩 페이지</div>, // 페이지 추가 필요
      },
      {
        path: "/profile",
        element: <div>내 정보 페이지</div>, // 페이지 추가 필요
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: '/bookmark',
    element: <ScrapPage />
  },
  {
    path: '/search',
    element: <SearchPage />
  }
];

export default router;
