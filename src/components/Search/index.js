import React from "react";

function Search() {
    return (
        <div>
            <form>
                <div className="form-group">
                    <input type="search" className="form-control" id="search" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Search;