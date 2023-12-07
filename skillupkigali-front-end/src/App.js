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
import Stories from "./pages/Stories";
import ShareYourStory from "./pages/ShareYourStory";
import Media from "./pages/Media";
import StoryDetails from "./pages/StoryDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:id" element={<StoryDetails />} />
        <Route path="/shareyourstory" element={<ShareYourStory/>} />
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
