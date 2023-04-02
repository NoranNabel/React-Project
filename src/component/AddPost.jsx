import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import handleSubmit from './Login'


const AddPost = () => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [file, setFile] = useState(null);

    // const [image, setImage] = useState("");

    const PostSchema = Yup.object().shape({
        title: Yup.string().required("title is required"),
        description: Yup.string().required("description is required"),
        imageUrl: Yup.mixed().required("Please select an image of yourself for upload")
    });

    const fileChangedHandler = event => {
        let file = event.target.files[0];
        let reader = new FileReader();

        console.log("file isss:" + file);

        reader.onload = function (e) {
            setFile(e.target.result);
        };

        reader.readAsDataURL(event.target.files[0]);

        if (file != ".png" || file != ".jpg") {
            window.alert("File does not support. You must use .png or .jpg ");
            return false;
        }
        if (file.size > 10e6) {
            window.alert("Please upload a file smaller than 10 MB");
            return false;
        }
    };

       
    const handleSubmitPost = async (e) => {
        e.preventDefault();
        try {
            const result = await PostSchema.validate({ title, description, imageUrl }, { abortEarly: false });
            console.log(result);
            let UserName = localStorage.getItem("userName")
            console.log("the anme iss "+ UserName);

            const userID=  JSON.parse(localStorage.getItem("userToken")).user.id

            const response = await fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description, imageUrl ,UserName, userID }),
            });
            const data = await response.json();
            console.log(data);
            if (!response.ok) {
                console.log(data);
                setErrorMessage(data);
                throw new Error(data);
            } else {
                window.location.replace("/");
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (

        <>
            {localStorage.getItem("userToken") ? <section className=" dark:bg-gray-900 mb-20 ">
                <div className="card border bg-base-100 shadow-2xl w-2/3 mx-auto mt-10">
                    <div className="card-body">
                        <form onSubmit={handleSubmitPost}>
                            <div className="flex flex-col ">
                                <h2 className="card-title text-3xl font-serif font-normal mx-auto"> Share with us your Taste and Inspiration </h2>

                                <div className="w-full ">
                                    <input type="text"
                                        placeholder="Type here your title"
                                        className="input  input-lg w-full mt-5 bg-base-300 border-none h-12 "
                                        value={title}
                                        onChange={(e) => {
                                            setTitle(e.target.value)
                                        }}
                                    />
                                </div>
                                <div className="w-full ">
                                    <textarea
                                        placeholder="Type here your description"
                                        className="input  input-lg w-full mt-5 bg-base-300 border-none h-28"
                                        value={description}
                                        onChange={(e) => {
                                            setDescription(e.target.value)
                                        }}
                                    ></textarea>

                                    <div >
                                        <input
                                            placeholder="ImageURL:"
                                            type="url"
                                            name="sitelink"
                                            value={imageUrl}
                                            // onChange={(e) => setImage(e.target.files[0])}
                                            onChange={(e) => setImage(e.target.value)}

                                            // className="text-black  input input-bordered border-gray-400 bg-transparent mb-5 input-md w-full max-w-xs"
                                            className="input input-lg w-full bg-base-300 border-none mt-5 h-12 "
                                        />

                                        {/* <input className="btn btn-secondary"
                                            id="fileInput"
                                            name="file" type="file"
                                            inputProps={{ accept: 'image/*' }}
                                            onChange={fileChangedHandler}
                                        /> */}
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-row mt-5 w-full">
                                <div className="flex flex-row ">
                                    <button type="submit"
                                        className="btn btn-active btn-accent w-34 text-xl font-serif ml-96  max-w-xs "
                                    >Post</button>

                                    
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </section> 
            : <div className="navbar">
                <button onClick={() => navigate('/login')} className="btn btn-active btn-accent w-96 h-16 text-xl font-serif mx-auto max-w-xs hover:btn-ghost hover:scale-105 duration-300 "> Add Your Posts</button>
            </div>}

        </>
    )
}
export default AddPost;