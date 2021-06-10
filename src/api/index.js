import axios from "axios";

const BASE_URL = 'http://localhost:22639/api/'

export const ENDPOINTS = {
    TOKEN : 'token',
    USER_SUBJECTS : 'User/subjects',
    USER_MYSUBJECTS : 'User/mysubjects',
    USER_POSSIBLESUBJECTS : 'User/possiblesubjects'
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + endpoint + '/';

    return {
        fetchAll : () => axios.get(url),
        fetchById : id => axios.get(url + id),
        create : newRecord => axios.post(url, newRecord),
        update : (id, updatedRecord) => axios.put(url+id, updatedRecord),
        delete : (id => axios.delete(url + id))
    }
}

// export const AxiGET = () => {
//         console.log(axios.get(BASE_URL + 'User/subjects'))
// }