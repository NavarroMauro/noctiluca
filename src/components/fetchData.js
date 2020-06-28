import { useState } from "react"
import Axios from "axios"

const [arr, setArr] = useState([])

const FetchData = ({ API_URL, STATE }) => {
  Axios.get(API_URL)
    .then(res => {
      STATE(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export default FetchData
