import Home from './pages/home/home';
import PriceListPage from './pages/pricelist/pricelist'


const routes = [{
    path: '/',
    component: Home,
    exact: true
},{
    path: '/pricelist',
    component: PriceListPage,
    exact: true
}];

export default routes;
