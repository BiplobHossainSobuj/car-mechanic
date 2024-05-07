import { useContext } from 'react';
import login from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignup=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(email,password,name);
        // const user = {email,password,name};
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left mr-6">
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" name='name' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                        </div>
                        <div className="form-control mt-6">
                        <button className='btn btn-primary'>Login</button>
                        </div>
                        <div className="form-control mt-6">
                        <p>Already Have Account?<Link to='/login'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;