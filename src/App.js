import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BauCua from "./component/GAME/BauCua/BauCua";

function App() {
    return (
        <>
            <ToastContainer />

            <BauCua></BauCua>
        </>
    );
}

export default App;
