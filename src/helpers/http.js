import axios from "axios"

const http = () => {

    let options = {
        baseURL: 'https://hatodtakabackend-production.up.railway.app/',
        headers: {}
    }

    if(localStorage.getItem('token')){
        options.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }

    return axios.create(options)
}

export default http