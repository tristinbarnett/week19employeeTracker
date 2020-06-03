import React from "react";

function Search(props) {
    return (
        <div>
            <form onSubmit={props.handleFormSubmit}>
                <div className="form-group">
                    <input type="search" className="form-control" id="search" placeholder="Search" onChange={props.handleInputChange} />
                </div>
            </form>
        </div>
    );
}

export default Search;