import React from "react";
import Layout from "./views/Layout";
import MemorialAnimation from "./views/MemorialAnimation";
import MemorialMainContent from "./views/MemorialMainContent";

function App() {
	const count = 172;
	return (
		<Layout>
			<MemorialAnimation count={count} />
			<MemorialMainContent />
		</Layout>
	);
}

export default App;
