import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PageWrapper from "../container/PageWrapper";
import Error from "../pages/Error";
import SuspenseWrapper from "../container/SuspenseWrapper";
const RootPage = lazy(() => import("../pages/Root"));
const HomePage = lazy(() => import("../pages/Home"));
const MasterMovie = lazy(() => import("../pages/MasterMovie"));
const Mycart = lazy(() => import("../pages/MyCart"));
const RecentAdded = lazy(() => import("../pages/recentAdd"));
const Login = lazy(() => import("../pages/Login"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SuspenseWrapper>
            <RootPage />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/browse"
        element={
          <SuspenseWrapper>
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          </SuspenseWrapper>
        }
      />

      <Route
        path="/browse/:id"
        element={
          <SuspenseWrapper>
            <MasterMovie />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/mylist"
        element={
          <SuspenseWrapper>
            <Mycart />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/login"
        element={
          <SuspenseWrapper>
            <Login />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/recently added"
        element={
          <SuspenseWrapper>
            <RecentAdded />
          </SuspenseWrapper>
        }
      />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
