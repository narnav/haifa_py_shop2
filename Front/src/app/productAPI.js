import axios from 'axios'

const URL = "http://127.0.0.1:8000/api/products/"
// async(2)
export function getproducts(catId) {
    return new Promise((resolve) =>
        axios(URL +catId).then((res) => resolve({ data: res.data }))
    );
}
