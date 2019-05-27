import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.magicthegathering.io/v1/cards',
    headers: {
        Authorization: 
            'Client-ID 87c1329f00e8b1bd322315ae2d1558eb672f4fbe91bd7265f7cc13bcd1c9707d'
    }
});