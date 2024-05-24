import React, { useState } from 'react';

function Validation() {

    const [form, setForm] = useState({
        name: "",
        password: "",
        email: ""
    })
    const [error, setError] = useState({
        name: "",
        password: "",
        email: ""
    })
    const handleonChange = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setForm({
                name: "",
                password: "",
                email: ""
            })
        }
    };



    const validateForm = () => {
        let isValid = true;
        const updatedErrors = { name: "", password: "", email: "" }

        if (!form.name) {
            updatedErrors.name = "Name is required"
            isValid = false
        }

        if (!form.email) {
            updatedErrors.email = "email is required"
            isValid = false
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
            updatedErrors.email = "invalid email"
            isValid = false
        }

        if (!form.password) {
            updatedErrors.password = "password is required"
            isValid = false
        } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(form.password)) {
            updatedErrors.password = "invalid password"
            isValid = false
        }

        setError(updatedErrors);
        return isValid;
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div>
                    <label htmlFor='name'>Name </label>
                    <input type='text' id='name' value={form.name} onChange={handleonChange} />
                    {error.name}
                </div>
                <div>
                    <label htmlFor='password'>password </label>
                    <input type='text' id='password' value={form.password} onChange={handleonChange} />
                    {error.password}
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' value={form.email} onChange={handleonChange} />
                    {error.email}
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Validation;
