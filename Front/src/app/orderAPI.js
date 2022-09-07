import axios from "axios";

const URL = "http://127.0.0.1:8000/api/addorder/";
// async(2)
export function sendOrders(myCart, token) {
  console.log(myCart, token);
  return new Promise((resolve) =>
    axios
      .post(URL, myCart, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => resolve({ data: res.data }))
  );
}
