import React, { useEffect, useState } from "react";
import DataService from "./services/data.service";
import Layout from "./views/Layout";
import MemorialAnimation from "./views/MemorialAnimation";
import MemorialMainContent from "./views/MemorialMainContent";

function App() {
    const [postSubmitted, setPostSubmitted] = useState<boolean>(false);

    const onPostSubmit = () => {
        setPostSubmitted((prev) => !prev);
    }

    return (
        <Layout>
            <MemorialAnimation onPostSubmit={onPostSubmit} />
            <MemorialMainContent postSubmitted={postSubmitted} />
        </Layout>
    );
}

export default App;
