import './Products.scss';
import PropTypes from 'prop-types';
const Products = ({ products }) => (
	<ul className='Products'>
		{products.map((product, key) => {
			return (
				<li key={key}>
					<img src={product.image} alt='' />
					<h3>{product.title}</h3>
					<span>€ {product.price}</span>
					<h6>{product.category}</h6>
				</li>
			);
		})}
	</ul>
);

Products.propTypes = {
	products: PropTypes.array.isRequired,
};

export default Products;
