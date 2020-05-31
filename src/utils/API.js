import axios from "axios";

function getEmployees() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
}

export default getEmployees;

