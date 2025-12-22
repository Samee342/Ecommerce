import {
  CATEGORIES_ROUTE,
  HOME_ROUTE,
  POPULAR_ROUTE,
  PRODUCTS_ROUTE,
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
    route: POPULAR_ROUTE,
    label: "popular",
  },
  {
    route: CATEGORIES_ROUTE,
    label: "categories",
  },
];
export default navLink;
