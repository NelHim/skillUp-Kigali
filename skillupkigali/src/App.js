import "./App.css";
import HomePage from "./pages/HomePage";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import GetInspired from "./pages/GetInspired";
import ShareYourStory from "./pages/ShareYourStory";
import Media from "./pages/Media";
// import Header from "./components/UI/Header";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/getInspired" element={<GetInspired/>} />
        <Route path="/shareYourStory" element={<ShareYourStory/>} />
        <Route path="/media" element={<Media/>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
