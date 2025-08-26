import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log('Form submitted', data);
  }

  return (
    <div bg-gray-100 className='flex justify-center items-center h-screen'> 
        <div className='bg-white-500 p-5'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div >
        <label>Enter Your Name: </label>
        <input
        placeholder='Enter Name'
        type='text'
          {...register('Name', { 
            required: 'First Name is required',
            minLength: { value: 50, message: 'Minimum length is 3' }
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <br />

      <div>
        <label>Enter Age</label>
        <input
        placeholder='Enter Age'
        type='number'
       {...register('age')} />
      </div>

      <br />

      <div>
        <label>Enter Email:</label>
        <input
        placeholder="Enter Email"
        type='email'
         {...register('email')} />
      </div>

      <br />

      <div>
        <label>Enter Mobile Number:</label>
        <input
        placeholder='Enter Mobile Number'
        type='tel'

        {...register('mobile', {
          required: 'Mobile number is required',
          pattern: {
            value: /^[0-9]{10}$/,
            message: 'Mobile number must be 10 digits'
          }
        })}
        />
        errors.mobile && <p>{errors.mobile.message}</p>
      </div>

      <input type="submit" />
    </form>
    </div>
    </div>
 
  );
}

export default App;
