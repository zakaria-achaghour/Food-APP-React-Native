
import axios from "axios";
import { API_URL } from "../../Constants";
import authHeader from "./auth-header";

const add = (values) => {
    return axios.post(API_URL+ "categories",values,{headers: authHeader()});
};

const getAll = () => {
    return axios.get(API_URL+ "categories",{headers: authHeader()});

};
  
  const get = id => {
    return axios.get(API_URL+`categories/${id}`,{headers: authHeader()});
  };

  const update = (id, values) => {
    return axios.put(API_URL+`categories/${id}`,values,{headers: authHeader()});

  };
  
  const remove = id => {
    return axios.delete(API_URL+`categories/${id}`,{headers: authHeader()});
  };
  
  
  

export default {add,update,remove,get,getAll};



// import http from "../http-common";
// class TutorialDataService {
//   getAll() {
//     return http.get("/tutorials");
//   }
//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }
//   create(data) {
//     return http.post("/tutorials", data);
//   }
//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }
//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
// }
// export default new TutorialDataService();