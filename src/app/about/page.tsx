import Navbar from "../components/navbar"

export default function About(){
    return(
        <div className="bg-[url('/about.jpg')] bg-cover h-screen w-full ">
          <Navbar/>  
        <div className=" ml-60 mt-10 h-4/5 w-3/5 rounded-xl bg-black opacity-30 flex items-center justify-center absolute ">
        </div>
        

        <div className="  w-10/12 m-10 ml-24 z-10  flex items-center justify-center flex-col h-5/6 text-center gap-4 absolute">
      
        <h1 className="font-extrabold text-7xl text-center text-white z-10 relative">ABOUT US</h1>
        <p className="text-white text-lg text-center w-2/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, iste. Voluptatum blanditiis error eaque commodi rerum debitis quis. Consequuntur ullam qui aut nihil, error nesciunt autem sint nulla hic.</p>
        <p className="text-white text-lg text-center w-2/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laborum est quidem adipisci quisquam harum provident enim iusto, reprehenderit eius optio fuga minima repellendus suscipit eveniet quis blanditiis.</p>
        <p className="text-white text-lg text-center w-2/4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi officiis et iusto rem sapiente necessitatibus vitae! Minus velit eveniet tenetur. Sit explicabo nostrum aliquid maiores corporis asperiores voluptates adipisci nesciunt.</p>
        <button className="w-60 h-10 text-center rounded-lg font-bold hover:bg-slate-700 hover:font-extrabold hover:w-64 text-white border-2 border-orange-600"> READ MORE</button>
        </div>
       
            
        </div>
    )
}