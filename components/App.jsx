import { useState } from "react";

import { Modala } from "./components/Modal";
import { tabel2 } from "./components/tabel2";

function App() {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className={styles.App}>
            <Table />
            <button className={styles.btn} onclick={() => setModalOpen}>Add</button>
            {modalOpen && (
                <Modal
                    closeModal={() => {
                        setModalOpen(false);
                    }}
                />
            )}
        </div>
    )
}

export default App;