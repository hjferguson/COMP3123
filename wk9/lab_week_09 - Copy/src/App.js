import logo from './logo.svg';
import './App.css';

function App() {
 
  const myInfo = {
    studentID: '101133838',
    studentName: 'Harlan Ferguson',
    collegeName: 'George Brown College',
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab Exercise</h2>

        {/* Use props to display the information */}
        <MyInfo
          studentID={myInfo.studentID}
          studentName={myInfo.studentName}
          collegeName={myInfo.collegeName}
        />
      </header>
    </div>
  );
}

// Create a new functional component to display the student information
function MyInfo(props) {
  return (
    <div>
      <h3>{props.studentID}</h3>
      <h4>{props.studentName}</h4>
      <h5>{props.collegeName}</h5>
    </div>
  );
}

export default App;
