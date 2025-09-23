import React from 'react'

function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phoneNumber, setphoneNumber] = React.useState('');

  const handeInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;

      case 'lastName':
        setLastName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      case 'phoneNumber':
        setphoneNumber(value);
        break;
    }
  }

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
            value={firstName}
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
            value={lastName}
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
            value={email}
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
            value={phoneNumber}
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
            value={password}
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
           {firstName} {lastName}
        </span>
        .My email  address is <span>{email}</span>
        ans Phone Number is <span>{phoneNumber}</span>
      </section>

      </center>
    </>
  )
}

export default App
