export default {
  isLoading: false,
  activeUser: {},
  menus: [],
};

export const initialNews = {
  isLoading: false,
  isUpdating: false,
  generalNews: null,
  featuredNews: null,
  worldNews: null,
  generalNewsLoading: false,
  worldNewsLoading: false,
  featuredNewsLoading: false,
  insideBusinessLoading: false,
  insideBusiness: null,
  insideBusinnesSingle:null, 
  newsSingle:null,
};

export const initialPriceList = {
  isLoading: false,
  isUpdating: false,
  priceList: null,
  priceListLoading: false,
};

export const initialNewsSearch = {
  isLoading: false,
  newsSearched: [],
};

export const initialStocksSearch = {
  isLoading: false,
  stocksSearched: [],
}

export const initialStocksFetched = {
  stocksLoading: false,
  stocksFetched: null,
}
export const initialPriceMovement= {
  priceMovementLoading: false,
  priceMovement: null,
}