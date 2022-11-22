import {
  createBrowserRouter,
  redirect,
  Link,
  Outlet,
  useLoaderData,
  RouterProvider
} from "react-router-dom";
import Header from './components/partials/admin/Header'
import Sidebar from './components/partials/admin/Sidebar'
import routes from './routes'

const isAuthenticated = () => true;
const getUser = () => "user";

const authLoader = () => {
  if (!isAuthenticated()) {
    return redirect("https://google.com");
  } else {
    return getUser();
  }
};

const CommonHeader = () => <Header/>;
const CommonSidebar = () => <Sidebar routes={routes}/>;
const CommonFooter = () => <h1>Common Footer</h1>;

const Layout = () => (
  <>
    <CommonHeader />
    <CommonSidebar/>
    <Outlet />
    <CommonFooter />
  </>
);

const Home = () => {
  const loaderData = useLoaderData();

  return (
    <>
      <div>Header</div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <div>Home: {loaderData}</div>
      <Outlet />
    </>
  );
};

const About = () => {
  return <div>About</div>;
};

const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: authLoader
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);

export default function LayoutTest() {
  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}
