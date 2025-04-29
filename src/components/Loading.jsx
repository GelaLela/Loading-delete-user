import React, { useEffect, useState } from 'react';
import smload from './Shadow_milk_gacha_animation.webp';
import './load.css';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        setStatus('loading');
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        setTimeout(() => {
            setUsers([
                { id: 1, name: 'Holy Berry Cookie' },
                { id: 2, name: 'Pure Vanilla Cookie' },
                { id: 3, name: 'White Lily Cookie' },
                { id: 4, name: 'Golden Cheese Cookie' },
                { id: 5, name: 'Dark Cacoa Cookie' },
            ]);
            setStatus('idle');
        }, 3000);
    };

    const handleAdd = () => {
        if (name.trim()) {
            setUsers((prevUsers) => [...prevUsers, { id: Date.now(), name }]);
            setName('');
            setError('');
        } else {
            setError('Please enter a valid name.');
        }
    };

    const handleDelete = (id) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    };

    if (status === 'loading') {
        return (
            <div className="loader">
                <img src={smload} alt="Loading..." className="loading-gif" />
                <h4 className="loadtitle">
                    Shadow Milk Cookie is fetching your Data
                    <span className="dots">
                        <span style={{ "--i": 0 }}>.</span>
                        <span style={{ "--i": 1 }}>.</span>
                        <span style={{ "--i": 2 }}>.</span>
                        <span style={{ "--i": 3 }}>.</span>
                    </span>
                </h4>
            </div>
        );
    }

    if (status === 'failed') {
        return <p className="fail">Failed to load users.</p>;
    }

    return (
        <div>
            <div className="EntUser">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Username"
                    className="input"
                />
                <button
                    className="addUserBtn"
                    onClick={handleAdd}
                    disabled={!name.trim()}
                >
                    Add User
                </button>
                {error && <p>{error}</p>}
            </div>

            <ul className="fetchingUL">
                <h2 className="fu">FETCHED COOKIES</h2>
                <div className="listOfUSER">
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </div>
            </ul>

            <ul className="containerUL">
                <h2 className='um'>DELETE COOKIES</h2>
                <div className="listOfUN">
                    {users.map((user) => (
                        <li className="listItem" key={user.id}>
                            <div className="un">{user.name}</div>
                            <button
                                className="deleteBtn"
                                onClick={() => handleDelete(user.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
};


export default UserManagement;
