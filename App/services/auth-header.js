export default function authHeader() {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

  
    if (user && token) {
      // For Spring Boot back-end
      //  return { Authorization: `bearer ${token}` };
     
      return { Authorization: "Bearer " + token };
      // for Node.js Express back-end
     // return { "x-access-token": token };
    } else {
      return {};
    }
  }