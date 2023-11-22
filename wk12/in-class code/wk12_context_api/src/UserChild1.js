import React, {useContext} from 'react'
import UserContext from './UserContext'
import EmployeeContext  from './EmployeeContext'

export default function UserChild1() {
    const userContext = useContext(UserContext)
    const empContext = useContext(EmployeeContext)ls
    
  return (
    <div>
        <h3>UserChild1</h3>

        <UserContext.Consumer>
        {(user) => {
            return (
                <div>
                    <p>User Name: {user.name}</p>
                    <p>User City: {user.city}</p>
                </div>
            )
          }
        }
        </UserContext.Consumer>
        <EmployeeContext.Consumer>
            {(employee) => {
                return (
                    <div>
                        <p>Employee ID: {employee.eid}</p>
                        <p>Employee Name: {employee.name}</p>
                        <p>Employee Salary: {employee.salary}</p>
                    </div>
                )
             }
            }
        </EmployeeContext.Consumer>
    </div>
  )
}
