import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';
import { data } from './utils/data.js';

const { logo, alt, cover, title, description, company } = data;

const App = () => (
	<>
		<Header src={logo} alt={alt} />
		<Main src={cover} alt={alt} title={title} description={description} />
		<Footer company={company} />
	</>
);

export default App;
