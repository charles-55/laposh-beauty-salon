import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar, Footer } from './components';
import { Home } from './pages';

import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<NavBar />
			<BrowserRouter>
				<Routes>
					<Route index path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
