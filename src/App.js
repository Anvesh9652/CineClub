import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import { auth } from "./FirebaseFile";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import MovieScreen from "./screens/MovieScreen";


function App() {
  const user = useSelector(selectUser);
  // console.log(user)
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // console.log(userAuth.email);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path = "/profile" element = {<ProfileScreen/>}/>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/movie/:id/:isTv" element = {<MovieScreen/>}/>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
