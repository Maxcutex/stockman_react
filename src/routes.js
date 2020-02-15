import Home from './pages/home/home';
import PriceListPage from './pages/pricelist/pricelist'
import PriceMovementPage from './pages/pricemovement/pricemovement'


const routes = [{
    path: '/',
    component: Home,
    exact: true
},{
    path: '/pricelist',
    component: PriceListPage,
    exact: true
},{
    path: '/pricemovement',
    component: PriceMovementPage,
    exact: true
}];

export default routes;
