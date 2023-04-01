import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Posts = () => {
    const navigate = useNavigate();
    // const { name } = useParams();

    const [name, setName] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {

        async function getPosts() {
            try {
                let post = [...data];
                post = await axios.get("http://localhost:3000/posts");
                console.log(data);
                setData(post.data);
                return post.data;
            } catch (err) {
                // console.log(err);
            }
        }

        getPosts();
    }, []);

    const handelDeletePost = (id) => {

        fetch("http://localhost:3000/posts/" + id, {
            method: "DELETE",
        }).then(() =>
            console.log(id)
        )

        const newData = data.filter(item => item.id != id);
        setData(newData);
    };

    const userData = JSON.parse(localStorage.getItem('userToken'))
    console.log("user data: " + userData);

    
    const userName = localStorage.getItem("userName");
    console.log("userName isss: " + userName)

    return (
        <>
            <section className=" dark:bg-gray-900 mb-20 ">
                <h1 className="card-title text-3xl mt-8 font-serif text-accent-focus font-semibold mx-20">THE LATEST & GREATEST</h1>

                {data.map((item) => (
                    <div key={item.id}
                        className="card lg:card-side border bg-base-100 shadow-2xl w-2/3 mx-auto mt-10 hover:scale-105 duration-300">

                        <figure className="w-1/2"><img className="cursor-pointer  " width="400" height="400"
                            // src={`Data/${item.image}`}
                            src={item.imageUrl}
                            // src={item.file}
                            alt="Photo" /></figure>

                        <div className="card-body w-1/2">
                            <div className="flex flex-row">
                                <div className=" flex flex-col ">
                                   {/* <span className="mx-2 mt-1 text-2xl font-serif font-semibold">{userData.user.name}</span> */}
                                    <span className="mx-2 mt-1 text-2xl font-serif font-semibold">{userName}</span>
                                    <span className="mx-3 text-zinc-400 font-semibold mb-3">{new Date().toLocaleDateString()}</span>
                                </div>
                            </div>
                            <h1 className="card-title text-2xl font-serif  font-semibold mt-5 text-slate-700">{item.title} </h1>
                            <span className="max-w-5xl  text-1xl  font-serif mt-2 ">{item.description}</span>
                        </div>

                        <button className="btn btn-xs sm:btn-sm md:btn-md mt-5"
                            onClick={() => handelDeletePost(item.id)}>Delete</button>

                        <button className="btn btn-xs sm:btn-sm md:btn-md mt-5 mx-5"
                            onClick={() => navigate('/edit')} >Edit</button>

                    </div>))}
            </section>
        </>
    )

}
export default Posts;