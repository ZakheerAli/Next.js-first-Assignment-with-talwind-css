import Image from "next/image";
import Navbar from "./components/navbar";
export default function Home(){
  return(
    <div className="bg-[url('/contact.jpg')] bg-cover h-screen ">
      <Navbar/>
      <div className="h-3/5  rounded-2xl m-10 ml-28 mt-20 bg-black opacity-55 flex items-center justify-center absolute">
      </div>

      <div className=" gap-4 flex text-center flex-col items-center justify-center h-full">
        <h1 className="text-white  z-10 relative font-extrabold text-7xl font-sans">WELCOME TO OUR HOME PAGE</h1>
        <p  className="text-white z-10 relative font-bold text-xsl w-4/6 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit suscipit voluptatibus provident at ipsam pariatur, dolorem architecto autem deserunt debitis quaerat velit quas nulla minima illo molestias incidunt hic nam.</p>
        <button className=" z-10 relative bg-transparent rounded border-2 border-blue-400 w-32 font-bold flex items-center justify-center mt-4 h-10 text-white hover:font-bold hover:bg-sky-500">CLICK HERE!</button>
        </div>
      
    </div>
  )
}