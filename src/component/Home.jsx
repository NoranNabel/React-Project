import AddPost from "./AddPost";
import Footer from "./Footer";
import Posts from "./Posts";

function Home() {
    return (<>
        {/* <div className="bg-[url('/images/rachel-park2.jpg')] h-96 bg-cover">
        </div>

        <div className="card lg:card-side bg-white rounded-none">
            <div className="card-body">
                <h1 className="card-title text-5xl font-serif text-accent-focus mx-auto ">Hello Foodies !</h1>
                <h2 className="card-title text-3xl font-serif mt-3 mx-auto">Welcome To Our Cooking Food Blog</h2>
                <span className="max-w-5xl text-center text-2xl text-slate-500 font-serif mt-3 mx-auto">We are sharing easy food recipes with new ideas using minimal spices that will help you to prepare tasty and delicious dishes in your Home kitchen</span>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div> */}

        <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/rachel-park2.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello Foodies !</h1>
                    <p className="mb-5">Welcome To Our Cooking Food Blog</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>

        <div className="card-body w-full border-t border-slate-300 mb-5 ">
            <p className="card-title max-w-5xl text-accent-focus text-center text-4xl font-serif mx-auto"> Recipes </p>
            <p className="text-2xl font-serif  mt-3 font-normal max-w-6xl mx-auto text-center ">We’ve organized these recipes every way we could think of so you don't have to! Dietary restrictions, weeknight dinners, meal prep recipes, some of our most tried-and-true… no matter how you browse, we’re sure you’ll find just what you were looking for.</p>
        </div>

        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6  mb-10">
            <div className="rounded-xl relative">
                <img
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                    src="/images/chad-montano-MqT0asuoIcU-unsplash.jpg"
                    alt=""
                />
            </div>
            <div className="rounded-xl relative">
                <img
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
                    src="/images/victoria-shes-unsplash.jpg"
                    alt=""
                />
            </div>
            <div className="rounded-xl relative">
                <img
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
                    src="/images/HomemadeChicken.jfif"
                    alt=""
                />
            </div>
        </div>

        <AddPost />
        <Posts />

        <Footer />
    </>)
}

export default Home;