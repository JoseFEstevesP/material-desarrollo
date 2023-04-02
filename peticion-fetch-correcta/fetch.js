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
		const controller = new AbortController();
		const signal = controller.signal;
		const abortTime = setTimeout(() => controller.abort(), 3000);
		options.signal = signal;
		options.body = JSON.stringify(options.body) || false;
		if (!options.body) delete options.body;
		const requestOptions = Object.assign({}, defaultOptions, options);
		try {
			const response = await fetch(url, requestOptions);
			clearTimeout(abortTime);
			if (!response.ok) {
				throw new Error('La respuesta de la red no es correcta');
			}
			return await response.json();
		} catch (error) {
			if (error.name === 'AbortError') {
				throw new Error(`La solicitud fue cancelada despus de ${3} segundos`);
			} else {
				throw new Error(`Error de busqueda: ${error.message}`);
			}
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
