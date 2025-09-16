import React, { useState } from 'react'

function Registration() {
    const [user, setuser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: ''

    })


    const handeInputChange = (e) => {
        const { name, value } = e.target;

        setuser((prev) => ({ ...prev, [name]: value  }));


    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formdata = {
            email,
            phoneNumber,
            password,
            lastName,
            firstName
        }
        console.log(formdata);

    };
    return (
        <>
            <center>
                <form onSubmit={handleFormSubmit}>

                    <h1>Sign Up</h1>
                    <p>Please fill in the form to create an account</p>

                    <label>
                        <b>First Name </b>
                    </label>
                    <input type="text"
                        name='firstName'
                        placeholder='Enter first name'
                        required
                        value={user.firstName}
                        onChange={handeInputChange}
                    />
                    <br />
                    <br />



                    <label>
                        <b>Last  Name </b>
                    </label>
                    <input type="text"
                        name='lastName'
                        placeholder='Enter last name'
                        required
                        value={user.lastName}
                        onChange={handeInputChange}

                    />
                    <br />
                    <br />

                    <label>
                        <b>Email </b>
                    </label>
                    <input type="Email"
                        name='email'
                        placeholder='Enter Email'
                        required
                        value={user.email}
                        onChange={handeInputChange}

                    />
                    <br />
                    <br />

                    <label>
                        <b>PhoneNumber </b>
                    </label>
                    <input type="number"
                        name='phoneNumber'
                        placeholder='Enter phone number'
                        required
                        value={user.phoneNumber}
                        onChange={handeInputChange}

                    />
                    <br />
                    <br />

                    <label>
                        <b>password</b>
                    </label>
                    <input type="password"
                        name='password'
                        placeholder='Enter password '
                        required
                        value={user.password}
                        onChange={handeInputChange}

                    />
                    <br />
                    <br />

                    <button
                        type='submit'>
                        signup
                    </button>

                </form>
                <br />
                <br />

                <section>
                    Hello, my name is

                    <span>
                        {user.firstName} {user.lastName}
                    </span>
                    .My email  address is <span>{user.email}</span>
                    ans Phone Number is <span>{user.phoneNumber}</span>
                </section>

            </center>
        </>
    )

}

export default Registration
