import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import './App.css';



class App extends Component {
    constructor(){
        super()
        this.state = {
            lastName: '',
            firstName: '',
            email: '',
            dob: '',
            phoneNumber: '',
            gender: '',
            address: '',
            city: '',
            state: '',
            course:''

        }
        this.changeLastName = this.changeLastName.bind(this)
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeDob = this.changeDob.bind(this)
        this.changePhoneNumber = this.changePhoneNumber.bind(this)
        this.changeGender = this.changeGender.bind(this)
        this.changeAddress = this.changeAddress.bind(this)
        this.changeCity = this.changeCity.bind(this)
        this.changeState = this.changeState.bind(this)
        this.changeCourse = this.changeCourse.bind(this)        
        this.onSubmit = this.onSubmit.bind(this)

        
    }
    changeLastName(event){
        this.setState({
            lastName:event.target.value
        })
    }
    changeFirstName(event){
        this.setState({
            firstName:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changeDob(event){
        this.setState({
            dob:event.target.value
        })
    }
    changePhoneNumber(event){
        this.setState({
            phoneNumber:event.target.value
        })
    }
    changeGender(event){
        this.setState({
            gender:event.target.value
        })
    }

    changeAddress(event){
        this.setState({
            address:event.target.value
        })
    }
    changeCity(event){
        this.setState({
            city:event.target.value
        })
    }

    changeState(event){
        this.setState({
            state:event.target.value
        })
    }
    changeCourse(event){
        this.setState({
            course:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()

        const registered = {
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            email: this.state.email,
            dob: this.state.dob,
            phoneNumber: this.state.phoneNumber,
            gender: this.state.gender,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            course: this.state.course
        }
        axios.post('http://localhost:4000/app/registrationform', registered)
            .then(response => console.log(response.data))
            alert('You have been successfully registered.')    

        this.setState({
            lastName: '',
            firstName: '',
            email: '',
            dob: '',
            phoneNumber: '',
            gender: '',
            address: '',
            city: '',
            state: '',
            course:''
        })
    }
    
    render() {
        return (
            <div>

                <div className='form-div'>
                    <h3 > Student Registration Form</h3>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="text">Last Name</label>    
                        <input type = 'text'
                        placeholder='Enter Your Last Name'
                        onChange={this.changeLastName}
                        value={this.state.lastName}
                        className='form-control form-group'
                        />
                        <label htmlFor="text">First Name</label>    
                        <input type ='text'
                        placeholder='enter Your First Name'
                        onChange={this.changeFirstName}
                        value={this.state.firstName}
                        className='form-control form-group'
                        />

                        <label htmlFor="text">E-mail</label>    
                        <input type ='text'
                        placeholder='Enter Your E-mail'
                        onChange={this.changeEmail}
                        value={this.state.email}
                        className='form-control form-group'
                        />

                        <label htmlFor="text">Birth Date</label>    
                        <input type ='text'
                        placeholder="DD/MM/YYYY.."
                        onChange={this.changeDob}
                        value={this.state.dob}
                        className='form-control form-group'
                        />
                        <label htmlFor="text">Phone Number</label>    
                        <input type ='text'
                        placeholder='Enter Phone Number'
                        onChange={this.changePhoneNumber}
                        value={this.state.phoneNumber}
                        className='form-control form-group'
                        />                            
                        <label htmlFor="text">Gender</label>    
                        <select name="gender" onChange={this.handleChange}    
                                className='form-control form-group'   
                                onChange={this.changeGender}
                                value={this.state.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="other">Other</option>    
                            </select> 
                        <label htmlFor="text">Address</label>    
                        <input type ='text'
                        placeholder='Enter Address'
                        onChange={this.changeAddress}
                        value={this.state.address}
                        className='form-control form-group'
                        />

                        <label htmlFor="text">City</label>    
                        <input type ='text'
                        placeholder='Enter City'
                        onChange={this.changeCity}
                        value={this.state.city}
                        className='form-control form-group'
                        />

                        <label htmlFor="text">State</label>    
                        <input type ='text'
                        placeholder='Enter State'
                        onChange={this.changeState}
                        value={this.state.state}
                        className='form-control form-group'
                        />  
                        <label htmlFor="text">Course</label>    
                        <input type ='text'
                        placeholder='Enter Course'
                        onChange={this.changeCourse}
                        value={this.state.course}
                        className='form-control form-group'
                        />

                        <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;