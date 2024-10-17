import type { InferResponseType } from "hono/client";
import { hc } from "hono/client";
import { useEffect, useState } from "react";
import type { AppType } from "../functions/api/[[route]]";

export default function App() {
	const client = hc<AppType>("/");
	const $get = client.api.hello.$get;

	const [data, setData] = useState<InferResponseType<typeof $get>>();

	// biome-ignore lint/correctness/useExhaustiveDependencies: avoid multiple calls
	useEffect(() => {
		const fetchData = async () => {
			const res = await $get({
				query: { name: "Hono Pages" },
			});
			const responseData = await res.json();
			setData(responseData);
		};
		fetchData();
	}, []);

	return (
		<>
			<h1>{data?.message}</h1>
			<p>The heading value is from API</p>
		</>
	);
}
