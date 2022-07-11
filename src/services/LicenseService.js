import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.10:8080/api/v1/auth';
let token = null;
let user = null;

class LicenseService {


    getProduct() {
        user = JSON.parse(localStorage.getItem('user'));
        console.log(JSON.stringify(user));
        token = user.Authorization;
       
//        return axios.get(PRODUCT_API_BASE_URL + '/offer', { headers: { Authorization: token } });
        return axios.get('/offer', { headers: { Authorization: token } });
    }

    addProduct(product) {
        //        token=localStorage.getItem('user');
    //    user = JSON.parse(localStorage.getItem('user'));
    //    token = user.Authorization;

//        return axios.post(PRODUCT_API_BASE_URL + '/product', product, { headers: { Authorization: token } });
        return axios.post('/saveproduct', product,{headers: {"Access-Control-Allow-Origin": "*"}} );
    }


    updateProduct(product, id) {
//        return axios.put(PRODUCT_API_BASE_URL + '/product/' + id, product, { headers: { Authorization: token } });
        return axios.put('/product/' + id, product, { headers: { Authorization: token } });
    }

    getProductById(id) {
//        return axios.get(PRODUCT_API_BASE_URL + '/product/' + id, { headers: { Authorization: token } });
        return axios.get('/product/' + id, { headers: { Authorization: token } });
    }

}

export default new LicenseService(); 