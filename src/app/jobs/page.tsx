
import Navbar from "../components/navbar";

export default async function Jobs() {
  await new Promise((resolve) => {
    setTimeout(resolve,5000)
  })
  return(
    <div className="bg-[url('/jobs.jpg')] bg-cover h-screen">
    <Navbar/>
    <div className=" ml-96 mt-16 h-3/5 w-2/4 rounded-xl bg-black opacity-30 flex items-center justify-center absolute "></div>
    <div className="w-2/3 flex items-center justify-center ">
        <h1 className="text-green-300 z-10 relative ml-10 pt-20 pl-96 font-extrabold text-7xl text-center flex items-center justify-center">JOBS AND INTERNSHIPS ARE COMING SOON!</h1>
    </div>
  </div>
  )
}