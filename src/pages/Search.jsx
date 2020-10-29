import React, { Component } from 'react';
import Table from "../components/Table/Table"
import API from "../utils/API"

class Search extends Component {
    state = {employees:[], searchTerm:"", filteredEmployeesArray:[]}
    

    componentDidMount(){
        API.getEmployeeList()
        .then(res=>{
            console.log(res);
            this.setState({employees: res.data.results, filteredEmployeesArray: res.data.results})

        })
    }

    handleChange = (e)=>{
        this.setState({
            searchTerm: e.target.value
        }, () => {
            if(this.state.searchTerm === ""){
                this.setState({filteredEmployeesArray: this.state.employees})
                
            }
            else{
                const searchedEmployeeArray = this.state.employees.filter((employee)=>{
                return employee.name.first.slice(0, this.state.searchTerm.length).toLowerCase() === this.state.searchTerm.toLowerCase()
                })
        
                this.setState({filteredEmployeesArray: searchedEmployeeArray})
            }        
           
        })

        
    }

    render() {
        return (
            <div className="col-12">
                <h1 className="text-center my-2">Look up employees by First Name!</h1>
                <form className="my-4 d-flex justify-content-center">
                    <input type="text" name="searchTerm" placeholder="Search an Employee..." id="employeeSearch" value={this.state.searchTerm} onChange={this.handleChange}/>
                </form>
                <Table employees={this.state.filteredEmployeesArray} />
            </div>
        );
    }
}

export default Search;;