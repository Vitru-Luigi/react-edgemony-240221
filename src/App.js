import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.scss';
import { data } from './utils/data.js';

const { logo, alt, cover, title, description, company, name } = data;

const App = () => (
	<div className='App'>
		<Header src={logo} alt={alt} name={name} />
		<Main src={cover} alt={alt} title={title} description={description} />
		<Footer company={company} />
	</div>
);

export default App;
