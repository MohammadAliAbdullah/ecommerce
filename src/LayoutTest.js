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
import Notification from './components/partials/admin/Notification'

const isAuthenticated = () => true;
const getUser = () => "user";

const authLoader = () => {
  if (!isAuthenticated()) {
    return redirect("https://google.com");
  } else {
    return getUser();
  }
};

const CommonHeader = () => <Header />;
const CommonSidebar = () => <Sidebar routes={routes} />;
const CommonFooter = () => <Notification />;

const Layout = () => (
  <>
    <div className="wrapper vertical light">
      <CommonHeader />
      <CommonSidebar />
      <main role="main" className="main-content">
        <Outlet />
        {/* <Dashboard /> */}
      </main>
      <CommonFooter />
    </div>
  </>
);

const Home = () => {
  const loaderData = useLoaderData();

  return (
    <>
      <div><h1>Home This Page</h1></div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <div>Home: {loaderData}</div>
      {/* <Outlet /> */}
    </>
  );
};


const About = () => {
  return <div>
    <h1>About This Page</h1>
    <br></br>
    <Link to="/">Home</Link>
  </div>;
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
