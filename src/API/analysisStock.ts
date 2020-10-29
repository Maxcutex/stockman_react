import { StockStatistics } from './../types';
import axios from 'axios'

import { stockAnalysisType , StockInfoType, StockInfoTypeWithPrice  } from '../types'
import { config } from '../config/index';
export const baseUrl = config.STOCKMAN_API_BASE_URL; 
export const getStockStatistics= async (
    stock: string
  ): Promise<StockStatistics> => {
    try {
        const url = `${baseUrl}/stocks/statistics?stock_code=${stock}`
        const { data }  = await axios(url);
        return data
    } catch (error) {
    //   if (error?.response?.data?.message) {
    //     throw new Error(error.response.data.message)
    //   }
      throw new Error(
        error.message || `Oops! That's awkward. We messed up.`
      )
    }
  }
export const getCurrentAnalysis = async (
    stock: string
  ): Promise<stockAnalysisType> => {
    try {
        const url = `${baseUrl}/marketanalysisstock?sec_code=${stock}`
        const { data }  = await axios(url);
        return data
    } catch (error) {
    //   if (error?.response?.data?.message) {
    //     throw new Error(error.response.data.message)
    //   }
      throw new Error(
        error.message || `Oops! That's awkward. We messed up.`
      )
    }
  }
  export const getCompetitors = async (
    stock: string
  ): Promise<StockInfoTypeWithPrice[]> => {
    try {
        const url = `${baseUrl}/stocks/competitors?stock_code=${stock}`
        const { data }  = await axios(url);
        return data
    } catch (error) {
    //   if (error?.response?.data?.message) {
    //     throw new Error(error.response.data.message)
    //   }
      throw new Error(
        error.message || `Oops! That's awkward. We messed up.`
      )
    }
  }
  export const getStockInfo = async (
    stock: string
  ): Promise<StockInfoType> => {
    try {
        const url = `${baseUrl}/stocks/by-code/?stock_code=${stock}`
        const { data }  = await axios(url);
        return data
    } catch (error) {
    //   if (error?.response?.data?.message) {
    //     throw new Error(error.response.data.message)
    //   }
      throw new Error(
        error.message || `Oops! That's awkward. We messed up.`
      )
    }
  }