import { Component } from 'react';
import './Main.scss';
import PropTypes from 'prop-types';

class Main extends Component {
	render() {
		const { src, alt, title, description } = this.props;
		return (
			<main className='Main'>
				<img src={src} alt={alt} />
				<h1>{title}</h1>
				<h2>{description}</h2>
			</main>
		);
	}
}

export default Main;

Main.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	alt: PropTypes.string,
};
