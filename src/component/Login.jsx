import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required("email is required"),
    password: Yup.string().required("Password is required"),
});

const Login = () => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await LoginSchema.validate({ email, password }, { abortEarly: false });
            console.log(result);

            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log(data);
            if (!response.ok) {
                console.log(data);
                setErrorMessage(data);
                throw new Error(data);
            } else {
                localStorage.setItem("userToken", JSON.stringify(data));
                localStorage.setItem("userName", data.user.name);

                console.log("data is : " + data);
                window.location.replace("/");   
            }
        }
        catch (error) {
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
            <figure><img src="/images/StrawberryProteinCrepes4.jfif" alt="Movie" /></figure>
            <div className="card-body w-96 ">
                <span className="label-text text-3xl font-semibold mt-8 font-serif ">Welcome Back!</span>
                <span className="label-text text-xl  mx-5 font-normal mt-3 text-slate-500 font-serif ">Login with your account </span>

                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full max-w-xs mt-2 mx-2">
                        <label htmlFor="email" className="label">
                        </label>
                        <input id='email' placeholder="Enter your Email"
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

                    <div className="form-control w-full max-w-xs mt-2 mx-2">
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
                    {errorMessage && <p className="text-red-700"> {errorMessage}</p>}
                    
                    <div className="card-actions ">
                        <button type="submit"
                            className="btn btn-outline btn-accent w-52 text-xl font-serif max-w-xs mt-8 mx-16"
                        >LOGIN</button>
                    </div>

                    <div className="mt-10 flex">
                        <span className="label-text text-base  mt-3 mx-3 font-normal text-slate-500 font-serif ">Don't have an account?</span>
                        <button type="submit" className="btn btn-active w-32  max-w-xs btn-ghost  text-xl font-serif"
                            onClick={() => navigate('/signup')}
                        >SIGN UP</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
