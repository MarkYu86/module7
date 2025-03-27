import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClockDisplay from "./components/ClockDisplay";
import { ActivityFinder } from "./components/ActivityFinder";
import RefCounter from "./components/Refcounter";
import VideoPlayer from "./components/Videoplayer";
import ReducerCounter from "./components/ReducerCounter";
import PostListReducer from "./components/PostListReducer";
import SubscribeForm from "./components/SubscribeForm";
import { UserProvider } from "./context/UserContext";
import LoginForm from "./components/LoginForm";
import React from "react";
import TestComponent from "./components/TestComponent";
import CORSAnywhereDemo from "./CORSAnywhere";
import MyThemeProvider from "./context/ThemeContext";
import Smile from "./components/Emoji";
import BitcoinRates from "./components/BitcoinRates";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from "./components/tealTheme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
           <NavBar />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <UserProvider>
        <ThemeProvider theme={tealTheme}>
 
          <MyThemeProvider>
          <AppRoutes />
            <Smile />
            <TestComponent />
          
            <SubscribeForm />
            <PostListReducer />
            <ReducerCounter />
            <VideoPlayer />
            <RefCounter />
            <ActivityFinder />
            <ClockDisplay />
          </MyThemeProvider>
        </ThemeProvider>
      </UserProvider>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
