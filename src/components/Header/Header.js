import './Header.css';

export default function Header(props) {
	const { src, alt, name } = props;
	return (
		<header>
			<img src={src} alt={alt} />
			<span>{name}</span>
		</header>
	);
}
