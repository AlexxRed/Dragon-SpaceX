import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { refs } from "../../services/consts/refs";
import Layout from "../Layout/Layout";
import { Loader } from "../Loader/Loader";


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
            <Route index element={<HomePage />} />
            <Route path={refs.dragons} element={<DragonsPage />} />
            <Route path={refs.login} element={<LoginPage />} />
            <Route path={refs.register} element={<RegisterPage />} />
            <Route path={refs.notFoundPage} element={<NotFoundPage />} />
          </Route>
          </Routes>
        </Suspense>
    </>
  );
}

export default App;
