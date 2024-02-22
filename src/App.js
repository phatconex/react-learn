import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Review from "./component/USESTATE/reviewlist/Review";

function App() {
    return (
        <>
            <ToastContainer />

            <Review></Review>
        </>
    );
}

export default App;
