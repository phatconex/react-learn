import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollEffect from "./component/USEEFFECT/ScrollEffect/ScrollEffect";

function App() {
    return (
        <>
            <ToastContainer />
            <ScrollEffect></ScrollEffect>
        </>
    );
}

export default App;
