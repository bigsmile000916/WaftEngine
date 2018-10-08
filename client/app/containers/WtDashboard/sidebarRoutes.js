// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from '../Dashboard';
import OrganizationInfoPage from '../OrganizationInfoPage';

const dashboardRoutes = [
  {
    path: "/wt",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    exact: true,
  },
  {
    path: "/wt/organization-info",
    sidebarName: "Organization Info",
    navbarName: "Organization Info",
    icon: Dashboard,
    component: OrganizationInfoPage,
    exact: true,
  },
  // {
  //   path: "/wt",
  //   sidebarName: "Table List",
  //   navbarName: "Table List",
  //   icon: "content_paste",
  //   component: DashboardPage
  // },
  // {
  //   path: "/wt",
  //   sidebarName: "Typography",
  //   navbarName: "Typography",
  //   icon: LibraryBooks,
  //   component: DashboardPage
  // },
  // {
  //   path: "/wt",
  //   sidebarName: "Icons",
  //   navbarName: "Icons",
  //   icon: BubbleChart,
  //   component: DashboardPage
  // },
  // {
  //   path: "/wt",
  //   sidebarName: "Maps",
  //   navbarName: "Map",
  //   icon: LocationOn,
  //   component: DashboardPage
  // },
  // {
  //   path: "/wt",
  //   sidebarName: "Notifications",
  //   navbarName: "Notifications",
  //   icon: Notifications,
  //   component: DashboardPage
  // },
  { redirect: true, path: "/", to: "/wt", navbarName: "Redirect" }
];

export default dashboardRoutes;
