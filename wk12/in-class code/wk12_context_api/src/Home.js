import React, { useContext } from "react";
import EmployeeContext from "./EmployeeContext";
import HomeWithNoContext from "./HomeWithNoContext";

export default function Home(){
    const employeeContext = useContext(EmployeeContext)
    return(
        <div>
            <h3>Home</h3>
            <p>Employee ID: {employeeContext.eid}</p>
            {/* <p>Employee Name: {employeeContext.display()}</p> */}
            <p>Employee Salary: {employeeContext.salary}</p>
            <button onClick={() => console.log(employeeContext.display())}>Display</button>
            <button onClick={() => employeeContext.setName()}>SetName</button>
            
        </div>
    )
}