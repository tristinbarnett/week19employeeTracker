import React, { Component } from "react";
import Search from "../components/Search";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Table from "../components/Table";


class Home extends Component {
    state = {
        search: "",
        results: [],
        error: ""
    };

    componentDidMount() {
        API.getEmployees()
            .then(res => this.setState({ results: res.data.message }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getEmployees(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <div>
                <Jumbotron />
                <Search />
                <Table
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    results={this.state.results}
                />
            </div>
        );
    }
}
export default Home;