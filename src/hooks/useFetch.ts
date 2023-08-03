import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(url: string) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(url)
			.then((response) => {
				setData(response.data);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [url]);

	return { data, isLoading, error };
}
