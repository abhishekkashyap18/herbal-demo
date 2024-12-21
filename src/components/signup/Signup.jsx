import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Login() {

    const { register, handleSubmit, formState:{ errors }} = useForm()
    const onSubmit = (data) => console.log(data)    


  return (
    <div className=" flex justify-center items-center min-h-screen bg-[#e5f4e6]">
      <div className=" w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className=" text-center">
          <h1 className=" text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Register
          </h1>
          <p className="mb-4">Sign up to shop now!!</p>
        </div>
        <form className='flex flex-col gap-10' onSubmit={handleSubmit(onSubmit)}>
            <input className='w-full border-2 border-solid border-black rounded-md p-4' placeholder='username' {...register("username", {required: true})} />
            {errors.email && <span className='text-red-600 text-base '>This field is required</span>}

            <input className='w-full border-2 border-solid border-black rounded-md p-4' placeholder='email' {...register("email", {required: true})} />
            {errors.email && <span className='text-red-600 text-base '>This field is required</span>}

            <input className='w-full border-2 border-solid border-black rounded-md p-4' placeholder='password' type='password'  {...register("password", { required: true })} />
            {errors.exampleRequired && <span className='text-red-600 text-base'>This field is required</span>}

            <input type="submit" className='w-full border-2 border-solid border-black rounded-md p-4 hover:cursor-pointer bg-[#18841e] hover:bg-[#146f18]'/>
        </form>
        <div className=" text-center mt-4">
          <p>
            Not a member yet?{' '}
            <Link to='/signup' className=" text-blue-600 hover:text-blue-800">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
