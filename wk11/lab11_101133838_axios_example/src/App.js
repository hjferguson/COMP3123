// Remove the unused 'logo' import
import './App.css';
import PersonList from "./PersonList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <PersonList />
            </header>
            
        </div>
    );
}

export default App;
