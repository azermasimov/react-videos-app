import axios from 'axios';

const KEY = "AIzaSyCN-sUSIyfAcY4hDlHQuJr2o5jC7Kd8FgI";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResult: 5,
        key: KEY,
    },
});