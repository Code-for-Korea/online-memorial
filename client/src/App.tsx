import React, { useEffect, useState } from "react";
import DataService from "./services/data.service";
import Layout from "./views/Layout";
import MemorialAnimation from "./views/MemorialAnimation";
import MemorialMainContent from "./views/MemorialMainContent";

function App() {
    const [deathCount, setDeathCount] = useState<number>(0);

    const initializeDeathCount = async () => {
        const data = await DataService.getTotalCount("death", new Date(Date.now()).getFullYear());
        if (data !== null) {
            setDeathCount(data);
        }
    }

    useEffect(() => {
        initializeDeathCount();
    }, []);

    return (
        <Layout>
            <MemorialAnimation count={deathCount} />
            <MemorialMainContent />
        </Layout>
    );
}

export default App;
