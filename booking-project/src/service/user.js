import Swal from "sweetalert2";
import config from '../config/index.js';

export function getUserInfo(username) {

    const userInfo = async () => {
        let url = config.baseUrl + ':8080/users/' + username;
        const res = await fetch(url);

        const data = await res.json();
        const avatar = data ?
            `${data.firstName.toUpperCase()[0]}${data.lastName.toUpperCase()[0]}` :
            "";

        window.localStorage.setItem("avatar", avatar);
        window.localStorage.setItem("idUser", data.id);
        window.localStorage.setItem("firstName", data.firstName);
        window.localStorage.setItem("lastName", data.lastName);
        return (data);
    };

    return userInfo();
}

export const getAccessToken = ({ email, password, firstName, lastName }) => {

    const requestModel = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    };

    let url = config.baseUrl + ':8080/login?username=' + email + "&password=" + password;
    return fetch(url, requestModel)
        .then((response) => {
            if (!response.ok) {
                Swal.fire({
                    icon: "error",
                    title: "Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde",
                    showConfirmButton: true,
                    timer: 3000,
                });
                return null;
            }
            return response.json();
        })
        .then((data) => {
            window.localStorage.setItem("token", data.access_token);
            window.localStorage.setItem("username", email);
            window.localStorage.setItem("name", firstName);
            window.localStorage.setItem("lastName", lastName);

            return getUserInfo(email);

        })
        .catch((error) => {
            console.log("error: " + error);
        });;
};