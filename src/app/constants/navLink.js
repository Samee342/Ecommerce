import {
  HOME_ROUTE,
  CONTACT_ROUTE,
  PRODUCTS_ROUTE,
  ORDERS_ROUTE,
  ABOUT_ROUTE,
} from "./routes";

const navLink = [
  {
    route: HOME_ROUTE,
    label: "Home",
  },
  {
    route: ABOUT_ROUTE,
    label: "About",
  },
  {
    route: PRODUCTS_ROUTE,
    label: "Products",
  },
  {
    route: ORDERS_ROUTE,
    label: "Orders",
  },
  {
    route: CONTACT_ROUTE,
    label: "Contact",
  },
];
export default navLink;
