import Home from './pages/home/home';
import PriceListPage from './pages/pricelist/pricelist'
import PriceMovementPage from './pages/pricemovement/pricemovement'
import PriceAnalysisPage from './pages/price-analysis/price-analysis'
import ContentPage from './pages/content-page/content-page'
import QuotePage from './pages/quote-page/quote-page';


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
    path: '/market_price_analysis',
    component: PriceAnalysisPage,
    exact: true
},{
    path: '/daily_market_summary',
    component: PriceMovementPage,
    exact: true
},{
    path: '/asi_movement',
    component: PriceMovementPage,
    exact: true
},{
    path: '/asi_vs_stocks',
    component: PriceMovementPage,
    exact: true
},{
    path: '/screened_stocks',
    component: PriceMovementPage,
    exact: true
},{
    path: '/content-page/:pageType/:id',
    component: ContentPage, exact: true
},{
    path: '/quote-page/:stock_code',
    component: QuotePage, exact: true
}];

export default routes;
