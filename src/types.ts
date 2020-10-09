export enum REQUEST_STATUSES {
    IDLE,
    LOADING,
    SUCCESS,
    ERROR,
  }
  export interface IStock {
    Stock: string
  }
  export type stockAnalysisType = {
    id: number,
    sec_code: string,
    price: number,
    min_year: number,
    max_year: number,
    min_six_months: number,
    max_six_months: number,
    min_three_months: number,
    max_three_months: number,
    min_one_week: number,
    max_one_week: number,
    price_one_week: number,
    price_three_months: number,
    price_six_months: number,
    price_one_year: number,
    one_week_cent: number,
    three_months_cent: number,
    six_months_cent: number,
    one_year_cent: number,
    price_year_to_date_cent: number,
    previous_price: number,
    current_price: number,
    today_change: number,
    today_volume: number,
    today_sign: string,
    today_day_range: string,
    today_52_week_range: string
  }
  export type StockInfoType = {
    id: number,
    name: string,
    stock_code: string,
    is_active: true,
    exchange_code: string,
    contact: string,
    description: string,
    tier_code: string,
    par_value: string,
    asset_class_code: string,
    list_date: string,
    outstanding_shares: string,
    grp_code: string,
    registrar: string,
    address_1: string,
    address_2: string,
    address_3: string,
    state_code: string,
    website: string,
    email: string,
    gsm: string,
    land_tel: string,
    fax_no: string,
    regis_close: string,
    year_end: string,
    logo: string,
    shares_in_issue: number,
    capitalization: number,
    industry: IndustryType,
    sub_sector: SubSectorType
  }

  export type IndustryType = {
    id: number, 
    name: string, 
    exchange_code: number, 
    sync_flag: boolean, 
    logo: string, 
  }
  export type MainSectorType = {
    id: number, 
    name: string, 
    is_active: boolean
  }
  export type SubSectorType = {
    id: number, 
    name: string, 
    is_active: boolean, 
    main_sector: MainSectorType
  }
  export type TParams = {stock_code: string}