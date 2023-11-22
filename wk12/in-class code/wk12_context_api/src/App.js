import './App.css';
import EmployeeContext from './EmployeeContext';
import Home from './Home';
import Employee from './Employee';
import React, {useState} from "react";


const employee = {
  eid: 1,
  firstName: 'John',
  lastName: 'Cena',
  salary: 50000000,
  display: function(){
    return this.firstName + " " + this.lastName;
  },
  setName: (fnm) => {
    this.firstName = fnm;
  }
}

function App() {
  const [emp, setEmp] = useState(employee);
  return (
    <div>
      <h1>React Context API example</h1>
      <EmployeeContext.Provider value={{employee}}>
        <Home />
        <Employee />

      </EmployeeContext.Provider>
      {/* <HomeWithNoContext /> */}
    </div>
  );
}

export default App;
