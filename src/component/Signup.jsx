import { useState, useEffect } from "react";
import * as Yup from "yup";
import AuthService from "../AuthServices";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required("email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required(),
});

const SignUp = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await LoginSchema.validate({ name, email, password, confirmPassword }, { abortEarly: false });
            console.log(result);

            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, confirmPassword }),
            });
            const data = await response.json();
            console.log(data);
            if (!response.ok) {
                console.log(data);
                setErrorMessage(data);
                throw new Error(data);
            } else {
                window.location.replace("/login");
            }
        } catch (error) {
            const errors = {};
            error.inner.forEach((error) => {
                console.log(error.message);
                errors[error.path] = error.message;
            });
            setErrors(errors);
        }
    }

    return (
        <div className="card card-side bg-base-100 shadow-2xl mt-6 max-w-4xl mx-auto mb-10">
            <figure><img src="/images/HowToMake1.jfif" alt="Movie" /></figure>
            <div className="card-body w-96 ">
                <span className="label-text mt-3 text-3xl font-semibold font-serif">Welcome</span>
                <span className="label-text text-xl mx-5 font-normal text-slate-500 font-serif ">Sign Up now it's free !</span>

                <form onSubmit={handleSubmit}>

                    <div className="form-control w-full max-w-xs  mx-2">
                        <label htmlFor="name" className="label">
                        </label>
                        <input id='name'
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                                const newErrors = { ...errors }
                                delete newErrors.name;
                                setErrors(newErrors);
                            }}
                            type="text"
                            className="input input-bordered w-full max-w-xs input-accent" />
                        {errors?.name && <span className="text-red-700">{errors.name}</span>}
                    </div>

                    <div className="form-control w-full max-w-xs  mx-2">
                        <label htmlFor="email" className="label">
                        </label>                           <input id='email' placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                const newErrors = { ...errors }
                                delete newErrors.email;
                                setErrors(newErrors);
                            }}
                            type="text"
                            className="input input-bordered w-full max-w-xs input-accent" />
                        {errors?.email && <span className="text-red-700">{errors.email}</span>}
                    </div>

                    <div className="form-control w-full max-w-xs  mx-2">
                        <label htmlFor="password" className="label">
                        </label>
                        <input id='password'
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                const newErrors = { ...errors }
                                delete newErrors.password;
                                setErrors(newErrors);
                            }}
                            type="text"
                            className="input input-bordered  w-full max-w-xs input-accent" />
                        {errors?.password && <span className="text-red-700">{errors.password}</span>}
                    </div>

                    <div className="form-control w-full max-w-xs mx-2">
                        <label htmlFor="confirmPassword" className="label">
                        </label>
                        <input id='confirmPassword'
                            placeholder="confirm Password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value)
                                const newErrors = { ...errors }
                                delete newErrors.confirmPassword;
                                setErrors(newErrors);
                            }}
                            type="text"
                            className="input input-bordered  w-full max-w-xs input-accent" />
                        {errors?.confirmPassword && <span className="text-red-700">{errors.confirmPassword}</span>}

                        {errorMessage && <p className="text-red-700"> {errorMessage}</p>}
                    </div>

                    <div className="card-actions">
                        <button type="submit" className="btn btn-outline btn-accent font-serif mt-5 mx-28">Sign Up</button>
                        <div className=" grid grid-cols-3 items-center text-gray-500 ">
                            <hr className="outline-gray-400 " />
                            <p className="text-center text-xl mx-10">OR</p>
                            <hr className="outline-gray-400" />
                        </div>
                        <button className="btn btn-outline btn-accent font-serif mx-28"
                            onClick={() => navigate('/login')}
                        >Log in</button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignUp;
