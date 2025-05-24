import { useState, useEffect } from 'react';

export const useApi = (apiFunction, params = [], dependencies = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (customParams = params) => {
        try {
            setLoading(true);
            setError(null);
            const result = await apiFunction(...customParams);
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [...params, ...dependencies]);

    return { data, loading, error, refetch: fetchData };
};