import {
  CATEGORIES_ROUTE,
  HOME_ROUTE,
  POPULAR_ROUTE,
  PRODUCTS_ROUTE,
  ORDERS_ROUTE,
} from "./routes";

const navLink = [
  {
    route: HOME_ROUTE,
    label: "Home",
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
    route: POPULAR_ROUTE,
    label: "popular",
  },
  {
    route: CATEGORIES_ROUTE,
    label: "categories",
  },
];
export default navLink;
