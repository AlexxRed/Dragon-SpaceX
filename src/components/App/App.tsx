import { Routes, Route } from "react-router-dom";
import { refs } from "../../services/consts/refs";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import DragonsPage from "../../pages/DragonsPage/DragonsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage"
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";



function App() {

  return (
    <>
      <Routes>
        <Route path={refs.layout} element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path={refs.dragons} element={<DragonsPage />} />
          <Route path={refs.login} element={<LoginPage />} />
          <Route path={refs.register} element={<RegisterPage />} />
          <Route path={refs.notFoundPage} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
