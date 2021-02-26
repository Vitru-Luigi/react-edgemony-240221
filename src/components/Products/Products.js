import './Products.scss';
const Products = ({ products }) => {
	console.log(products);
	return (
		<ul className='Products'>
			{products.map((product, key) => (
				<li key={key}>
					<img src={product.image} alt='' />
					<h3>{product.title}</h3>
					<h6>{product.category}</h6>
					<span>{product.prize}</span>
				</li>
			))}
		</ul>
	);
};

export default Products;
