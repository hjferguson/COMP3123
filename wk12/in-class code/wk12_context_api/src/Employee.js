import React, { Component } from 'react'
import EmployeeContext from './EmployeeContext'
import UserContext from './UserContext'
import UserChild1 from './UserChild1'

const user = {
    name: 'Pritesh Patel',
    city: 'Toronto'
}
export default class Employee extends Component {
    static contextType = EmployeeContext
    componentDidMount() {
        console.log(this.context)

    }
    render() {
    return (
    <div>
        <h3>Employee Context</h3>
        <p>Employee ID: {this.context.eid}</p>
        {/* <p>Employee Name: {this.context.display()}</p> */}
        <p>Employee Salary: {this.context.salary}</p>
        <UserContext.Provider value={user}>
            <UserChild1 />
        </UserContext.Provider>
    </div>
      
    )
  }
}
