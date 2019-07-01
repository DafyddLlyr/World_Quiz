const baseURL = 'http://localhost:3000/api/users/'

export default {
  getUsers(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  updateUser(id, payload){
    return fetch(baseURL + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }
}
