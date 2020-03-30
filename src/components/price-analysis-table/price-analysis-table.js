import React, { useState, useEffect} from 'react';
import { config } from '../../config';
import axios from 'axios';
 
const initialState = {
    dataResult: {}
}
const useDataApi = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
          const result = await axios(url);
          setData(result.data);
          //console.log(result.data);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      };
      fetchData();
    }, [url]);
    return [{ data, isLoading, isError }, setUrl];
  };

export const baseUrl = config.STOCKMAN_API_BASE_URL; 

const PriceAnalysisTable = () => {
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        `${baseUrl}/PriceLists/market-analysis/`,
        initialState,
      );

    return ( <div>
         
         {isError && <div>Something went wrong ...</div>}
            {
                isLoading ? (
                    <div>Loading ...</div>
                    ) : (
                       
                        data.results && <div>
                            <h4>Price List as at </h4>
                            {console.log(data)}
                           { 
                          
                           data.results.map(item => (
                            
                            <li key={item.id}>
                                <a href='/'>{item.section_name}</a>
                            </li>
                            )   
                        )}
                        </div>
            )
            }
    </div> );
}
 
export default PriceAnalysisTable;