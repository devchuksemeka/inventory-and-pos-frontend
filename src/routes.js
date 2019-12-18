import Products from "pages/Products";
import Purchases from "pages/Purchases";
import Sales from "pages/Sales";
// import Icons from "pages/Icons";

const dashboardRoutes = [
  {
    path: "/products",
    name: "Products",
    icon: "pe-7s-note2",
    component: Products,
    layout: "/admin"
  },
  {
    path: "/purchases",
    name: "Purchases",
    icon: "pe-7s-study",
    component: Purchases,
    layout: "/admin"
  },
  {
    path: "/sales",
    name: "Sales",
    icon: "pe-7s-study",
    component: Sales,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-note2",
  //   component: Icons,
  //   layout: "/admin"
  // },

];

export default dashboardRoutes;
