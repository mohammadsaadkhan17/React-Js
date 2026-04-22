import axios from 'axios';


//This is custom axios instance and this is static
const api = axios.create({
    
    baseURL: `https://jsonplaceholder.typicode.com`,
    headers: {
        'Content-Type':'application/json'
    }
})

api.interceptors.response.use((request) =>{
    console.log(`Starting the request`, request);
    return request;
},
(config) =>{
    const token = localStorage.getItem('token');

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config; //If token is not found in the local storage then this is kept
},
(error) => {
    console.error('Request error', error);
    return Promise.reject(error);
}
)

api.interceptors.response.use((response) =>{
    //success check, return data
    return response;
},

(error)=>{
    if(error.response && error.response.status ===401){
        console.error('Unauthorized!')
    }
    if(error.response && error.response.status ===500){
        console.error('Server Error!')
    }

    return Promise.reject(error);
}
)



axios.interceptors.request.use(request => {
  console.log(`Starting request `, request);
  return request;
});

axios.interceptors.response.use(response =>{
  console.log(`Response `, response);
  return response;
  
})

export default api;