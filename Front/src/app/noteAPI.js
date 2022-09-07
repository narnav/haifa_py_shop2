import axios from 'axios'

const URL = "http://127.0.0.1:8000/api/notes/"
// async(2)
export function getNotes(token) {
    return new Promise((resolve) =>
        axios(URL, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => resolve({ data: res.data }))
    );
}
