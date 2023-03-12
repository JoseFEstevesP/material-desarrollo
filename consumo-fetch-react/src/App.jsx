import { Suspense } from 'react';
import './App.css';
/*
 esta el manera de hacer una llamada  fetch 
 con un hook personalizado useFetch en este
  hooks se usa el useState y se hacen barios 
	renderizados para una vez que los datos están listos
*/
// const App = () => {
// 	const { data, loading, error,handleCancelRequest } = useFetch(
// 		'https://jsonplaceholder.typicode.com/users'
// 	);
// 	return (
// 		<>
// 			<h1 className='title'>Fetch like a pro</h1>
// 			<button className='btn' onClick={handleCancelRequest}> cancel request </button>
// 			<div className='card'>
// 				<ul>
// 					{error && <li>Error: {error}</li>}
// 					{loading && <h2>Loading...</h2>}
// 					{data?.map(user => (
// 						<li key={user.id}> {user.name} </li>
// 					))}
// 				</ul>
// 			</div>
// 		</>
// 	);
// };
import { fetchData } from './fetchData';
const apiData = fetchData('https://jsonplaceholder.typicode.com/users');
const App = () => {
	const data = apiData.read()
	// console.log("App -> data:", data)
	
	return (
		<>
			<h1 className='title'>Fetch like a pro</h1>
			<Suspense fallback={<h2>Loading...</h2>}>
				<div className='card'>
					<ul>
					{data?.map(user=> <li key={user.id}>{user.name}</li> )}
					</ul>
				</div>
			</Suspense>
		</>
	);
};

export default App;
