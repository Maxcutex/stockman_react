import React, { useState, useEffect} from 'react';
import { config } from '../../../config';
import axios from 'axios';
 
const initialState = {
    categories: []
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
  

export default function FooterCategories() {
    
    
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        `${baseUrl}/categories/`,
        initialState,
      );
    //doFetch(`${baseUrl}/categories/`);
    return (<div><div className="cell-xs-6 cell-lg-3">
        <h4 className="footer-title">Categories</h4>
        <ul className="list">
        {isError && <div>Something went wrong ...</div>}
        {
            isLoading ? (
                <div>Loading ...</div>
                ) : (
                    
                    data.results && data.results.map(item => (
                        <li key={item.id}>
                            <a href='/'>{item.section_name}</a>
                        </li>
                        )   
                    )
        )
        }
             
            
        </ul>
    </div>
    
        </div>
    )
}