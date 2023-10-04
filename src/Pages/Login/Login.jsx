import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

  const {signin} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        console.log(e.currentTarget);
        console.log(form.get('email'));
        const email = form.get('email')
        const password = form.get('password')


        signin(email,password)
        .then(result => {
          console.log(result.user);


          // navigate after login
          navigate(location?.state? location.state : '/')


        })
        .catch(error => {
          console.log(error);
        })
    }
  return (
    <div className="">
      <Navbar></Navbar>
      
      <div className="md:3/4 lg:w-1/2 mx-auto my-16 bg-gray-200 p-16 rounded">
      <h2 className="text-3xl font-medium text-center">Login your account</h2>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="mt-4 text-center">Do not have an account? Please <Link className="text-red-600 font-bold" to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
