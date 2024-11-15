import { createBrowserRouter } from "react-router-dom";
import Hello from "../components/sub4/Hello";
import Welcome from "../components/sub4/Welcome";
import Greeting from "../components/sub4/Greeting";

// 라우팅 테이블
const root = createBrowserRouter([
  { path: "/sub4/hello", element: <Hello /> },
  { path: "/sub4/Greeting", element: <Greeting /> },
  { path: "/sub4/Welcome", element: <Welcome /> },
]);

export default root;
