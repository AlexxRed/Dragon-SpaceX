import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { refs } from "../../services/consts/refs";
import Layout from "../Layout/Layout";
import { Loader } from "../Loader/Loader";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute"


const HomePage = lazy(() => import("../../pages/HomePage/HomePage" /* webpackChunkName: "home-page" */));
const DragonsPage = lazy(() => import("../../pages/DragonsPage/DragonsPage" /* webpackChunkName: "dragons-page" */));
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage" /* webpackChunkName: "register-page" */));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage" /* webpackChunkName: "login-page" */));
const NotFoundPage = lazy(() => import("../../pages/RegisterPage/RegisterPage" /* webpackChunkName: "not-found" */));


function App() {

  return (
    <>
      <Suspense fallback={<>{<Loader/>}</>}>
        <Routes>
          <Route path={refs.layout} element={<Layout />} >
            <Route index element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            } />
            <Route path={refs.dragons} element={
              <PrivateRoute>
                <DragonsPage />
              </PrivateRoute>
              } />
            <Route path={refs.login} element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } />
            <Route path={refs.register} element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            } />
            <Route path={refs.notFoundPage} element={<NotFoundPage />} />
          </Route>
          </Routes>
        </Suspense>
    </>
  );
}

export default App;
