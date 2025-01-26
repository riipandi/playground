import type { JSX } from "react";
import type { TuonoProps } from "tuono";

interface Pokemon {
	name: string;
}

interface IndexProps {
	results: Pokemon[];
}

export default function IndexPage({
	data,
}: TuonoProps<IndexProps>): JSX.Element | null {
	if (!data?.results) {
		return null;
	}

	return (
		<>
			<header className="header">
				<a
					href="https://crates.io/crates/tuono"
					target="_blank"
					rel="noreferrer"
				>
					Crates
				</a>
				<a
					href="https://www.npmjs.com/package/tuono"
					target="_blank"
					rel="noreferrer"
				>
					Npm
				</a>
			</header>
			<div className="title-wrap">
				<h1 className="title">
					TU<span>O</span>NO
				</h1>
				<div className="logo">
					<img src="rust.svg" className="rust" alt="Rust" />
					<img src="react.svg" className="react" alt="React" />
				</div>
			</div>
			<ul className="flex flex-wrap flex-col">
				{data.results.map((pokemon) => (
					<li key={pokemon.name}>{pokemon.name}</li>
				))}
			</ul>
		</>
	);
}
