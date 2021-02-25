import { Component } from 'react';
import './Main.css';

export default class Body extends Component {
	render() {
		const { src, alt, title, description } = this.props;
		return (
			<main>
				<img src={src} alt={alt} />
				<h1>{title}</h1>
				<h2>{description}</h2>
			</main>
		);
	}
}
