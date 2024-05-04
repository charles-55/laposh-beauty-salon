import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar, Footer } from './components';
import { AdminPage, Home, Login, PageNotFound, Products } from './pages';

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
						<Route index path="/products" element={<Products />} />
						<Route index path="/login" element={<Login />} />

						<Route index path="/admin" element={<AdminPage />} />

						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>
			</main>
			<Footer />
		</div>
	);
}

export default App;
