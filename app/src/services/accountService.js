import httpClient from './httpClient';
import tokenService from './tokenService';

const ACCOUNT_API_URL = 'https://manage.contacts.kostakuu.app/api/account/';

const accountService = {
    async get() {
        return await httpClient.get(ACCOUNT_API_URL, tokenService.getAuthHeader());
    },
    async update(body) {
        const formData = new FormData();
        formData.append('first_name', body.first_name);
        formData.append('last_name', body.last_name);

        return await httpClient.put(ACCOUNT_API_URL, formData, tokenService.getAuthHeader());
    }
};

export default accountService;
