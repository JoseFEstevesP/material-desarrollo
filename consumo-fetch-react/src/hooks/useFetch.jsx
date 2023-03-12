import { useState, useEffect } from 'react';
const useFetch = url => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [controller, setController] = useState(null);
	useEffect(() => {
		setLoading(true);
		const abortController = new AbortController();
		setController(abortController);
		fetch(url, { signal: abortController.signal })
			.then(res => res.json())
			.then(data => setData(data))
			.catch(error => {
				if (error.name === 'AbortError') {
					console.log('request cancelled');
				}else{
					setError(error);
				}
			})
			.finally(() => setLoading(false));
		return () => {abortController.abort()};
	}, []);
	const handleCancelRequest = () => {
		if (controller) {
			controller.abort();
			setError('request cancelled');
		}
	};
	return { data, loading, error, handleCancelRequest };
};
export default useFetch;
