import React, { useState } from 'react'

function Login() {

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const handleformSubmit=(e)=>{
e.preventDefault()
    const logindata={
      username:username,
      password:password
    }
    console.log(logindata)
  }

  return (
    <center>
      <form onSubmit={handleformSubmit}>
        <h1>LoginForm</h1>
        <label htmlFor="">
          UserName:
        </label>

        <input type="text"
          name='usename'
          value={username}
          required

          onChange={(e) => setusername(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="">
          Password:
        </label>

        <input type="password"
          name='password'
          value={password}
          required
          onChange={(e) => setpassword(e.target.value)}

        />

        <br />
        <br />


        <button type='submit'>Submit</button>

        <br />
        <br />

      </form>

      <p>
        UserName id {username} and the passWord is{password}
      </p>
    </center>
  )

}

export default Login
