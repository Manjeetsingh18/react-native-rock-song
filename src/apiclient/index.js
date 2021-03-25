import axios from 'axios';
import config from '../config';

function get() {

    const headers =
    {
        'Accept': 'application/xml',
        'Content-Type': 'application/json',
    }

    const API = axios.create({
        baseURL: config.BASEURL,
        headers: headers
    });

    return new Promise((resolve, reject) => {
        API.get()
            .then(res => {
                console.log('API Response ==>>', res)
                if (res.status !== 200) {
                    console.log('Api_error', res)
                    return reject(res);
                } else {
                    // console.log('Api_response', res)
                    return resolve(res.data);
                }

            }).catch((error) => {
                console.log('catch_error', error)
                reject()
            })

    });
}



module.exports = {
    get
};