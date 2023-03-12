// hay apis q no aceptan el 'Content-Type': 'application/json' esta cabezera se tiene q modificar depende de la api  
export const fetchData = () => {
	const helpFetch = async (url, options = {}) => {
		const defaultOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			mode: 'cors',
		};
		options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;
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
		return helpFetch(url, options);
	};
	const put = (url, options = {}) => {
		options.method = 'PUT';
		return helpFetch(url, options);
	};
	const del = (url, options = {}) => {
		options.method = 'DELETE';
		return helpFetch(url, options);
	};
	return { get, post, put, del };
};
