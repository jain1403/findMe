import axios from 'axios';

const getLocations = () => {
    let promise = new Promise((resolve, reject) => {
        axios.get('assets/locations.json').then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
            console.error(err);
        })
    });
    return promise;
}
export default {
    getLocations: getLocations
};