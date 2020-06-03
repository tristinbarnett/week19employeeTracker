import React, { Component } from "react";
import Search from "../components/Search";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Table from "../components/Table";
import _ from 'lodash';


class Home extends Component {
    state = {
        search: "",
        initResults: [],
        filteredResults: [],
        error: "",
        asc: true
    };

    componentDidMount() {
        API.getEmployees()
            .then(res =>{
                console.log("component did mount", res.data.results);
                this.setState({
                    initResults: res.data.results,
                    filteredResults: res.data.results
                })
            })
            .catch(err => console.log(err));
            
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
        // const newResults = this.state.filteredResults.filter(item => item.name.last=this.state.search);
        // this.setState({filteredResults:newResults})

    };
    handleFormSubmit = event => {
        event.preventDefault();
        
        const newResults = this.state.filteredResults.filter(item => item.name.last.toLowerCase()===this.state.search.toLowerCase());
        if(this.state.search !== ""){
            this.setState({filteredResults:newResults})
        }else {
            console.log("handle form submit", this.state.initResults);
            this.setState({filteredResults:this.state.initResults})
        }
        
    }

    sortResults = () => {
        const oldResults = this.state.filteredResults;
        const isAsc = this.state.asc;
        console.log("help me");
        const newResults = _.sortBy(oldResults, [function (res) {
            return res.name.last;
        }]);
        if (!isAsc) {
            _.reverse(newResults);
        }
        this.setState({
            filteredResults: newResults,
            asc: false
        })

    }
    render() {
        return (
            <div>
                <Jumbotron />
                <Search 
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Table
                    results={this.state.filteredResults}
                    sortResults={this.sortResults}
                />
            </div>
        );
    }
}
export default Home;