import { NavBar, Footer } from './components';
import { Home } from './pages';

import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
