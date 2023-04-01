import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Posts = () => {
    const navigate = useNavigate();


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");


    useEffect(() => {

        async function getPosts() {
            try {
                const { data } = await axios.get("http://localhost:3000/posts/" + id)
                    .then(data => {
                        setTitle(data.title)
                        setDescription(data.description)
                        setImage(data.image)
                    })
                    .catch()
                console.log(data);
                setData(data);
            } catch (err) {
                // console.log(err);
            }
        }
        getPosts();

    })
    // useEffect(() => {
    //     async function getPosts() {
    //         try {
    //             fetch("http://localhost:3001/posts/" + id)
    //                 .then(data => {
    //                     setTitle(data.title)
    //                     setDescription(data.description)
    //                     setImage(data.image)
    //                 })
    //                 .catch()
    //         } catch (err) {
    //             // console.log(err);
    //         }
    //     }
    //     getPosts();
    // }, []);

    //   const handleSubmit =(e)=>{
    //     e.preventDefault();
    //     const myPost={
    //         title,
    //         description,
    //         image
    //     }
    //   }

    const handelEditPost = (id) => {

        fetch("http://localhost:3001/posts/" + id, {
            method: "Put",
        }).then(() => window.location.replace("/"))

        const newData = data.filter(item => item.id != id);
        setData(newData);
    };

    return (
        <>
            <section className=" dark:bg-gray-900 mb-20 ">
                <form>
                    <div className="card lg:card-side border bg-base-100 shadow-2xl w-2/3 mx-auto mt-10">
                        <figure><img className="cursor-pointer hover:opacity-80 "
                            // src={item.image}
                            alt="Photo" /></figure>

                        <div className="card-body">

                            <input className="input rounded-full input-lg w-full bg-base-300 border-none"
                                type="text"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                            />
                            <input className="input rounded-full input-lg w-full bg-base-300 border-none mx-5 "
                                type="text"
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }} />

                        </div>
                        {/* <div className=" flex flex-col "> */}
                        {/* //submit */}

                        <button className="btn btn-xs sm:btn-sm md:btn-md mt-5"
                        >submit</button>


                    </div>
                </form>
            </section>

        </>
    )

}
export default Posts;