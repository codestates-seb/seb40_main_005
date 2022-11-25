import axios from "axios";

interface ResetPwData {
  id: string;
  email: string;
  password: string;
}

const petchPassword = async ({ id, email, password }: ResetPwData) => {
  const data = {
    id: id,
    email: email,
    password: password,
  };
  return await axios.patch(`http://13.209.7.184:8080/members`, data);
};

export default petchPassword;

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   headers: { "Content-type": "application/json" },
//   body: JSON.stringify({ title: "Corrected post" }),
// })
//   .then(response => {
//     console.log(response.status);
//     return response.json();
//   })
//   .then(data => console.log(data));

// // PUT/PATCH REQUEST
// function updateTodo() {
//   // put replaces the entire thing with the data we provided for the ID
//   //   axios
//   //     .put("https://jsonplaceholder.typicode.com/todos/1", {
//   //       title: "Updated Todo",
//   //       completed: true,
//   //     })
//   //     .then((res) => showOutput(res))
//   //     .catch((err) => console.error(err));

//   // patch replaces only the data which we provided for the ID
//   axios
//     .patch("https://jsonplaceholder.typicode.com/todos/1", {
//       title: "Updated Todo",
//       completed: true,
//     })
//     .then(res => showOutput(res))
//     .catch(err => console.error(err));
// }

// export function getToggle({ id, newStatus }) {
//   return axios({
//     url: `https://json-server-mocker-masai.herokuapp.com/tasks/${id}`,
//     method: "PATCH",
//     data: {
//       status: newStatus
//     }
//   });
// }
