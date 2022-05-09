import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "./store/recipe-action";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AddRecipe from "./pages/AddRecipe";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import { handleLoggedInState } from "./store/user-action";
import Notification from "./components/UI/Notification";
import { RootState } from "./store/store";
import { uiAction } from "./store/ui-slice";
import DetailComments from "./components/Detail/Comments/DetailComments";
import NotFound from "./pages/NotFound";

function App() {
  const notificationIsShown = useSelector(
    (state: RootState) => state.ui.notification.isShown
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(handleLoggedInState());
  }, [dispatch]);

  useEffect(() => {
    let notificationTimer: ReturnType<typeof setTimeout>;
    if (notificationIsShown) {
      notificationTimer = setTimeout(() => {
        dispatch(
          uiAction.setNotification({
            type: "",
            message: "",
            isShown: false,
          })
        );
      }, 3000);
    }

    return () => {
      clearTimeout(notificationTimer);
    };
  }, [dispatch, notificationIsShown]);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />(
        <Route path="/:recipeid" element={<Detail />}>
          <Route path="comments" element={<DetailComments />} />
        </Route>
        )
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {notificationIsShown && <Notification />}
    </React.Fragment>
  );
}

export default App;
