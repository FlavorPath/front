import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RestaurantPage from "@/pages/RestaurantPage";
import ReviewPage from "@/pages/ReviewPage";
import ScrapPage from "@/pages/ScrapPage";
import SearchPage from "@/pages/SearchPage";
import SignUpPage from "@/pages/SignupPage";
import UserInfoPage from "@/pages/UserInfoPage";
import AuthLayout from "@/ui/components/layout/AuthLayout";
import Layout from "@/ui/components/layout/Layout";
import NavigationLayout from "@/ui/components/layout/NavigationLayout";
import RestaurantMain from "@/ui/components/restaurant/RestaurantMain";
import RestaurantMenu from "@/ui/components/restaurant/RestaurantMenu";
import RestaurantReview from "@/ui/components/restaurant/RestaurantReview";

const router = [
  {
    path: "/",
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
            element: <div>서비스 준비중</div>,
          },
          {
            path: "/bookmarks",
            element: <ScrapPage />,
          },
          {
            path: "/profile",
            element: <UserInfoPage />,
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
            element: <RestaurantReview />,
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
      {
        path: "/review",
        element: <ReviewPage />,
      },
      {
        path: "/review/:reviewId",
        element: <ReviewPage />,
      },
    ],
  },
];

export default router;
