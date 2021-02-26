import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import './App.scss';
import { data } from './utils/data.js';

const { logo, alt, cover, title, description, company, name, products } = data;

const App = () => (
	<div className='App'>
		<Header src={logo} alt={alt} name={name} />
		<Body cover={cover} alt={alt} title={title} description={description} products={products} />
		<Footer company={company} />
	</div>
);

export default App;
