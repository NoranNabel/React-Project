import Footer from "./Footer";

function About() {
    return (
        <>
            <div className="card lg:card-side rounded-none ml-28 mr-20">
                <figure className=""><img src="/images/download (1).jfif" alt="Album" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-5xl font-serif text-accent-focus mt-8">About Me</h1>
                    <h2 className="card-title text-3xl font-serif mt-5">I Love Food!</h2>
                    <span className="max-w-2xl text-xl text-slate-500 font-serif mt-5">In this space, I am always sharing fresh, flavorful, (mostly) healthy recipes that I love to make and eat in my real, actual, every day life. If I wouldn’t eat it in real life, I won’t put in on the blog.</span>
                    <span className="max-w-2xl text-xl text-slate-500 font-serif mt-3">My goal is to inspire you with food that is both approachable AND exciting, whether you’re cooking for yourself, your family, your roommates, or your friends.</span>
                    <span className="max-w-2xl text-xl text-slate-500 font-serif mt-3">I want you to be so excited about these recipes that you eagerly await 5pm when you can go home from work and start cooking.</span>
                    <span className="max-w-2xl text-xl  font-serif mt-4">We’ve organized these recipes every way we could think of so you don't have to! Dietary restrictions, weeknight dinners, meal prep recipes, some of our most tried-and-true… no matter how you browse, we’re sure you’ll find just what you were looking for.</span>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default About;