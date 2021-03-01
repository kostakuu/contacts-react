import httpClient from './httpClient';
import tokenService from './tokenService';

const CONTACT_API_URL = 'https://manage.contacts.kostakuu.app/api/contact/';

const contactService = {
    async getAll() {
        return await httpClient.get(CONTACT_API_URL, tokenService.getAuthHeader());
    },
    async add(body) {
        const formData = new FormData();
        formData.append('name', body.name);
        formData.append('description', body.description);
        formData.append('email', body.email);
        formData.append('image', body.image);

        return await httpClient.post(CONTACT_API_URL, formData, tokenService.getAuthHeader());
    },
    async update(body) {
        const formData = new FormData();
        formData.append('id', body.id);
        formData.append('name', body.name);
        formData.append('description', body.description);
        formData.append('email', body.email);
        formData.append('image', body.image);

        return await httpClient.put(CONTACT_API_URL, formData, tokenService.getAuthHeader());
    },
    async delete(body) {
        const formData = new FormData();
        formData.append('id', body.id);

        return await httpClient.delete(CONTACT_API_URL, formData, tokenService.getAuthHeader());
    }
};

export default contactService;
