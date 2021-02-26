import { Component } from 'react';
import './Body.scss';
import PropTypes from 'prop-types';

class Body extends Component {
	render() {
		const { src, alt, title, description } = this.props;
		return (
			<main className='Body'>
				<img src={src} alt={alt} />
				<h1>{title}</h1>
				<h2>{description}</h2>
			</main>
		);
	}
}

export default Body;

Body.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	alt: PropTypes.string,
};
