import config from '../config/index.js';

const getReservation = () => {

  const id = window.localStorage.getItem("idUser");
  let token = window.localStorage.getItem("token");
  let url = config.baseUrl + ':8080/reservations/users/' + id;


  const requestModel = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  return fetch(url, requestModel)
    .then(data => data.json())
}

const deleteReservation = (idDelete) => {

  let token = window.localStorage.getItem("token");
  let url = config.baseUrl + ':8080/reservations/' + idDelete;


  const requestModel = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    }
  };

  // return fetch(url, requestModel)
  //   .then(()=>console.log("se borró con éxito"));

  return fetch(url, requestModel)
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))

}

export { getReservation, deleteReservation };