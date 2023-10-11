import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import MyMainLayout from "../MyLayout/MyMainLayout";
import Statistics from "../Pages/Statistics/Statistics";
import CardDetails from "../Pages/CardDetails/CardDetails";
// import ErrorElement from "../Components/ErrorElement/ErrorElement";

const MyRoute = createBrowserRouter([
  {
    path: "/",
    element: <MyMainLayout></MyMainLayout>,
    // errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/Donation",
        element: <Donation></Donation>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/CardDetails/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default MyRoute;
