import React, {useState, useEffect} from 'react';

import accountService from '../../services/accountService';

const DEFAULT_ACCOUNT = {
    first_name: '',
    last_name: ''
};

const AccountDetails = () => {
    const [account, setAccount] = useState(DEFAULT_ACCOUNT);

    useEffect(() => {
        const loadContact = async () => {
            const data = await accountService.get();
            setAccount(data);
        };

        loadContact().then(null);
    }, [])

    const handleChange = (event, prop) => {
        setAccount({
            ...account,
            [prop]: event.target.value
        });
    };

    const handleSave = async () => {
      const response = await accountService.update(account);
      alert(response.status >= 400 ? 'Please fill data' : 'Updated');
    };

    return (
        <section className="container details">
            <label>
                Username:
                <input type="text" value="kostakuu" disabled/>
            </label>
            <label>
                Email:
                <input type="email" value="kosta@justbeing.dev" disabled/>
            </label>
            <label>
                First name:
                <input type="text" value={account.first_name} onChange={(event) => handleChange(event, 'first_name')}/>
            </label>
            <label>
                Last name:
                <input type="text" value={account.last_name} onChange={(event) => handleChange(event, 'last_name')}/>
            </label>
            <button onClick={handleSave} className="primary">Save</button>
        </section>
    );
};

export default AccountDetails;
