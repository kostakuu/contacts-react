const httpClient = {
    get(url, headers = {}) {
        return fetch(url, {
            method: 'GET',
            headers: {
                ...headers
            }
        })
            .then(response => response.json())
            .catch(errorMessage => console.error(errorMessage));
    },
    post(url, body = {}, headers = {}) {
        return fetch(url, {
            method: 'POST',
            headers: {
                ...headers
            },
            body: body
        })
            .then(response => ({data: response.json(), status: response.status}))
            .catch(errorMessage => console.error(errorMessage));
    },
    put(url, body = {}, headers = {}) {
        return fetch(url, {
            method: 'PUT',
            headers: {
                ...headers
            },
            body: body
        })
            .then(response => ({data: response.json(), status: response.status}))
            .catch(errorMessage => console.error(errorMessage));
    },
    delete(url, body = {}, headers = {}) {
        return fetch(url, {
            method: 'DELETE',
            headers: {
                ...headers
            },
            body: body
        })
            .then(response => response.json())
            .catch(errorMessage => console.error(errorMessage));
    }
};

export default httpClient;
