import { useEffect } from 'react';

import './App.css';

function App() {
	useEffect(() => {
		document.title = "La Posh Beauty Supply and Salon";
	}, []);

	return (
		<div className="App">
		</div>
	);
}

export default App;
