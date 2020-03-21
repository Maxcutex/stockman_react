// import React from 'react';
// import { connect } from 'react-redux';
// import parse from 'html-react-parser';
// import { fetchNewsById } from '../../actions/newsSingleAction';
// import SidePageOne from '../../components/side-page-one/side-page-one';
// import Loader from '../../components/Loader/Loader';
import React, { useState, useEffect} from 'react';
import { config } from '../../config';
import axios from 'axios';
import SidePageOne from '../../components/side-page-one/side-page-one';
import parse from 'html-react-parser';
 
const initialState = {
    quote: null
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
          console.log(url)
          console.log(result.data)
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

const QuotePage = (props) => {
    const {stock_code} = props.match.params;
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        `${baseUrl}/stocks/by-code/?stock_code=${stock_code}`,
        initialState,
      );
      let myData = data[0] || {} ;
    return (  
        <section className='bg-white section-xs-type-1'>
                        <div className='shell'>
                            <div className='range range-center range-50'>
                                <div className='cell-md-9 cell-lg-9'>
                                <ul className="breadcrumb-custom-type-1">
                                    <li><a href="/">Home  </a></li>
                                    <li> Quote </li>
                                    <li> {stock_code} </li> 
                                </ul>
                                <div className="post-content">
                                {isError && <div>Something went wrong ...</div>}
                                {
                                    isLoading ? (
                                        <div>Loading Quote...</div>
                                        ) : (
                                            data && <div>
                                                <h2>{myData.stock_code} </h2>
                                                {parse(`${myData.description}`)}
                                            </div>
                                        )
                                }
                                    
                                    
                                    <br/>
                                </div>
                                </div>
                                <div className='cell-md-3'>
                                <SidePageOne />
                                </div>
                            </div>
                        </div>
                    </section>
    );
}
 
export default QuotePage;