import Home from './pages/home/home';
import PriceListPage from './pages/pricelist/pricelist'
import PriceMovementPage from './pages/pricemovement/pricemovement'
import ContentPage from './pages/content-page/content-page'


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
},{
    path: '/content-page/:pageType/:id',
    component: ContentPage, exact: true
}];

export default routes;
