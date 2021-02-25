import './Header.css';

export default function Header(props) {
	const { src, alt } = props;
	return (
		<header>
			<img src={src} alt={alt} />
		</header>
	);
}
