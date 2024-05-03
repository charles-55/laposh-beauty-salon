import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar, Footer } from './components';
import { Home, Login, PageNotFound } from './pages';

import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<NavBar />
			<main>
				<BrowserRouter>
					<Routes>
						<Route index path="/" element={<Home />} />
						<Route index path="/login" element={<Login />} />
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>
			</main>
			<Footer />
		</div>
	);
}

export default App;
