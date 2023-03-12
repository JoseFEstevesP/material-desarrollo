export const fetchData = () => {
	const helpFetch = async (url, options = {}) => {
		const defaultOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			mode: 'cors',
		};
		const requestOptions = Object.assign({}, defaultOptions, options);
		try {
			const response = await fetch(url, requestOptions);
			if (!response.ok) {
				throw new Error('La respuesta de la red no es correcta');
			}
			return await response.json();
		} catch (error) {
			throw new Error(`Error de búsqueda: ${error.message}`);
		}
	};
	const get = (url, options = {}) => {
		return helpFetch(url, options);
	};
	const post = (url, options = {}) => {
		options.method = 'POST';
		options.body = JSON.stringify(options.data);
		return helpFetch(url, options);
	};
	const put = (url, options = {}) => {
		options.method = 'PUT';
		options.body = JSON.stringify(options.data);
		return helpFetch(url, options);
	};
	const del = (url, options = {}) => {
		options.method = 'DELETE';
		options.body = JSON.stringify(options.data);
		return helpFetch(url, options);
	};
	return { get, post, put, del };
};
