import React, { useContext } from "react";
import EmployeeContext from "./EmployeeContext";

export default function HomeWithNoContext(){
    const employeeContext = useContext(EmployeeContext)
    return(
        <div>
            <h3>Home With No Context</h3>
            <p>Employee ID: {employeeContext.eid}</p>
            <p>Employee Name: {employeeContext.display()}</p>
            <button onClick={() => console.log(employeeContext.display())}>Display</button>
            <button onClick={() => employeeContext.setName()}>SetName</button>
        
        </div>
    )
}