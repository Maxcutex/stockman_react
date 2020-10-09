import { useEffect, useState } from 'react';
import { REQUEST_STATUSES } from '../types';
import axios from 'axios';
export function useDataApi<T>( initialUrl: string , initialData: any ) {
    const [data, setData] = useState(initialData);
    const [status, setStatus] = useState<REQUEST_STATUSES>(
        REQUEST_STATUSES.IDLE
    );
    const [error, setError] = useState<string>('');
    useEffect(() => {
        const fetchData = async () => {
            setStatus(REQUEST_STATUSES.LOADING);
            await axios(initialUrl)
                .then(data => {
                    setData(data);
                    setStatus(REQUEST_STATUSES.SUCCESS);
                })
                .catch(error => {
                    setStatus(REQUEST_STATUSES.ERROR);
                    setError(error.message);
                });
        };
        fetchData();
    }, [initialUrl]);
    return [{ data, status, error }];
}
