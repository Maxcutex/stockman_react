import Home from "./components/Home/Home";
import PriceListPage from "./pages/pricelist/pricelist"


const routes = [{
    path: "/",
    component: Home,
    exact: true
},{
    path: "/pricelist",
    component: PriceListPage,
    exact: true
}];

export default routes;
