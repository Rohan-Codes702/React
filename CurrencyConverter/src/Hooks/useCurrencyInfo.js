import { useEffect, useState } from "react"; 

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.rates);
            } catch (error) {
                setError(error.message);
                console.error("Error fetching currency data:", error);
            }
        };

        fetchCurrencyData();
    }, [currency]);

    if (error) {
        console.error("Error:", error);
        return {}; // Return an empty object on error
    }

    return data;
}

export default useCurrencyInfo;
