import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const { logIn } = use(AuthContext)
    const handleForm = (e) => {
        e.preventDefault()
        //const form = e.target;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log({
        //     name, email, password, photo
        // })
        logIn(email, password)
            .then(res => {
                console.log(res.user)
                alert("Log In hoise")
            })
            .catch((err) => {
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
                            {/* Email */}
                            <label className="label">Email</label>
                            <input required type="email" name='email' className="input" placeholder="Email" />
                            {/* password */}
                            <label className="label">Password</label>
                            <input required type="password" name='password' className="input" placeholder="Password" />

                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                            <p>
                                Have an account? Please: {" "}
                                <Link className='text-secondary' to={'/auth/register'}>
                                    Register in
                                </Link> In
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;