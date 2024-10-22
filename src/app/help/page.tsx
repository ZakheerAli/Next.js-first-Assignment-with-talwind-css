import Navbar from "../components/navbar"
export default function Help(){
 return(
    <div className="bg-[url('/help.jpg')] bg-cover h-screen">
        <Navbar/>
        <div className="h-screen bg-black opacity-60 flex items-center justify-center absolute text-center"></div>
        <div className="flex items-center justify-center m-10 flex-col w-2/4 h-5/6 z-10 ml-80 relative gap-7">
            <h1 className="text-white text-7xl text-center font-extrabold">HI,HOW CAN WE HELP?</h1>
            
            <textarea placeholder="ENTER YOUR PROBLEM" className="w-3/5 h-20 text-center pt-7 rounded-lg"></textarea>
            <input type="text" placeholder="ENTER YOUR EMAIL" className="w-3/5 h-12 rounded-lg text-center"/>
            <input type="text" placeholder="USER-NAME" className="w-3/5 h-12 rounded-lg text-center"/>
            <button className="text-white border-2 w-36 rounded-md border-sky-800 hover:w-40 hover:font-bold">SUBMIT</button>

        </div>
    </div>
 )
}