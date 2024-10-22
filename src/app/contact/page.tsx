import Navbar from "../components/navbar"

export default function Contact() {
    return (
        <div className="bg-[url('/home1.jpg')] bg-cover h-screen">
            <Navbar />
            <div className="h-screen bg-black opacity-100 flex items-center justify-center absolute"></div>
            <div className="w-3/6 gap-8 h-3/4  rounded-xl  z-10 relative flex items-center justify-center flex-col m-20 ml-80 ">
                <h1 className="font-extrabold text-8xl text-purple-700 font-sans z-10 relative">CONTACT US</h1>
                <input type="text" placeholder="Enter Your Name"  className="w-1/2 text-center h-12 rounded-xl flex items-center justify-center"/>
                <input type="text" placeholder="Enter Your Email"  className="w-1/2 rounded-xl text-center h-12 flex items-center justify-center"/>
                <textarea placeholder="Message" className="w-1/2 h-20 pt-6 rounded-xl text-center flex items-center justify-center"></textarea>
                <button className=" w-40 h-10 rounded-md bg-purple-500 text-white hover:w-44 hover:font-bold hover:bg-purple-700">SEND MESSAGE</button>
            </div>
        </div>
    )
}