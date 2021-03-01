import httpClient from './httpClient';

const TOKEN_API_URL = 'https://manage.contacts.kostakuu.app/api/token/';

const tokenService = {
    async getToken(body) {
        const formData = new FormData();
        formData.append('username', body.username);
        formData.append('password', body.password);

        return await httpClient.post(TOKEN_API_URL, formData);
    },
    getTokenFromStorage() {
        return sessionStorage.getItem('token');
    },
    getAuthHeader() {
        return {'Authorization': `Bearer ${this.getTokenFromStorage()}`};
    }
};

export default tokenService;
