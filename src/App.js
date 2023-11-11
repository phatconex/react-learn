import "./App.css";
import DarkMode from "./component/USECONTEXT/darkmode/DarkMode";
import { ThemeProvider } from "./component/USECONTEXT/darkmode/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <DarkMode></DarkMode>
        </ThemeProvider>
    );
}

export default App;
