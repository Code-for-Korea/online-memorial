import React from "react";
import Layout from "./views/Layout";
import MemorialAnimation from "./views/MemorialAnimation";
import MemorialPosts from "./views/MemorialPosts";

function App() {
	const count = 172;
	return (
		<Layout>
			<MemorialAnimation count={count} />
			<MemorialPosts />
		</Layout>
	);
}

export default App;
