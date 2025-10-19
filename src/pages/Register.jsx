import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser, setUser } = use(AuthContext)
    const handleForm =(e)=>{
        e.preventDefault()
        //const form = e.target;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        // console.log({
            //     name, email, password, photo
            // })
        createUser(email,password,photo,name)
        .then(res=>{
            const user = res.user;
            setUser(user);
        })
        .catch((err)=>{
            const errorCode = err.code;
            const errorMessage = err.message;
            alert(errorMessage)
        })
        }




    return (
         <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleForm} className="card-body">
                        <h1 className="text-3xl font-bold">Register your account</h1>
                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input  required type="text" name='name' className="input" placeholder="Enter Your name" />
                            {/* Photo */}
                            <label className="label">Photo Url</label>
                            <input  required type="text" className="input" name='photo' placeholder="Input your photo url" />
                            {/* Email */}
                            <label className="label">Email</label>
                            <input  required type="email" name='email' className="input" placeholder="Email" />
                            {/* password */}
                            <label className="label">Password</label>
                            <input  required type="password" name='password' className="input" placeholder="Password" />
                            
                            <button type='submit' className="btn btn-neutral mt-4">Register in</button>
                            <p>
                                Have an account? Please: {" "}
                                <Link className='text-secondary' to={'/auth/register'}>
                                    Log in
                                </Link> In
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;