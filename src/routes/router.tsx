import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RestaurantPage from "@/pages/RestaurantPage";
import ScrapPage from "@/pages/ScrapPage";
import SearchPage from "@/pages/SearchPage";
import SignUpPage from "@/pages/SignupPage";
import AuthLayout from "@/ui/components/layout/AuthLayout";
import Layout from '@/ui/components/layout/Layout';
import NavigationLayout from "@/ui/components/layout/NavigationLayout";
import RestaurantMain from "@/ui/components/restaurant/RestaurantMain";
import RestaurantMenu from "@/ui/components/restaurant/RestaurantMenu";

const router = [
  {
    path: '/',
    element: <Layout />,
    children: [
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
            element: <div>추천 페이지</div>,
          },
          {
            path: "/bookmarks",
            element: <ScrapPage />,
          },
          {
            path: "/profile",
            element: <div>내 정보 페이지</div>,
          },
        ],
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantPage />,
        children: [
          {
            path: "",
            element: <RestaurantMain />,
          },
          {
            path: "menu",
            element: <RestaurantMenu />,
          },
          {
            path: "review",
            element: <div>리뷰 페이지</div>,
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
        path: "/bookmark",
        element: <ScrapPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ]
  },
];

export default router;
