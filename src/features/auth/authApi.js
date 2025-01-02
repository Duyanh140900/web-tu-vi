import { API_GET_ACCOUNT } from '~/api/account/AccountApi';
import axiosInstance from '../../api/axiosInstance';

export const fetchDataAccount = () => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(API_GET_ACCOUNT)
            .then((response) => {
                if (response.data?.account) {
                    resolve(response.data?.account);
                } else {
                    reject(response.data);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};
