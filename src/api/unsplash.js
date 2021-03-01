import axios from 'axios'; 

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID eNfnw8l4NA71zNrBwJeHyTJLJcR1o47RQSNF3DfiVvw'
    }
})