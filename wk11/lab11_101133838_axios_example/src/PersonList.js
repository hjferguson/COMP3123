
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonList extends React.Component {
    // Initialize the state
    state = {
        persons: []
    };

    // Fetch data when the component mounts
    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                this.setState({ persons: [] }); // Set to empty array in case of error
            });
    }

    // Render method
    render() {
        return (
            <div>
                <h2>Person List</h2>
                {this.state.persons.map(person => (
                    <div key={person.login.uuid} className="row mb-3">
                        <div className="col-md-3">
                            <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} className="img-fluid"/>
                            <button className="btn btn-primary btn-sm mt-2">Details</button>
                        </div>
                        <div className="col-md-9">
                            <p><strong>Name:</strong> {person.name.first} {person.name.last}</p>
                                <p><strong>Username:</strong> {person.login.username}</p>
                                <p><strong>Gender:</strong> {person.gender}</p>
                                <p><strong>Timezone:</strong> {person.location.timezone.description}</p>
                                <p><strong>Address:</strong> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country}`}</p>
                                <p><strong>Email:</strong> {person.email}</p>
                                <p><strong>Birth Date and Age:</strong> {new Date(person.dob.date).toLocaleDateString()} (Age: {person.dob.age})</p>
                                <p><strong>Registered:</strong> {new Date(person.registered.date).toLocaleDateString()}</p>
                                <p><strong>Phone:</strong> {person.phone}</p>
                                <p><strong>Cell:</strong> {person.cell}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonList;

