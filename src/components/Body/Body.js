import { Component } from 'react';
import './Body.scss';
import PropTypes from 'prop-types';
import Products from '../Products/Products';

class Body extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showProducts: false,
		};
	}

	makeProductsVisible() {
		this.setState({ showProducts: !this.state.showProducts });
	}

	render() {
		const { cover, title, description, products } = this.props;
		const { showProducts } = this.state;
		console.log(this.state.showProducts);

		return (
			<main className='Body'>
				<img src={cover} alt={title} />
				<div className='content'>
					<h1>{title}</h1>
					<h2>{description}</h2>
					<button onClick={() => this.makeProductsVisible()}>Show products</button>
					<div className='products-container'>{showProducts && <Products products={products} />}</div>
				</div>
			</main>
		);
	}
}

Body.propTypes = {
	cover: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	products: PropTypes.array.isRequired,
};

export default Body;
