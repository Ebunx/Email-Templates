import React from 'react'

function WelcomEmail() {
  return (
    
     <section className="w-[60%] justify-self-center">
        <div className="wrapper bg-white p-10  rounded-4xl ">
            <div className="head"> 
            <h4 className="text-gray-500   md:text-2xl ">WE ARE GLAD TO SEE YOU :)</h4>
            <h5 className=" md:text-4xl font-normal text-gray-700">Welcome to the Family.</h5> 
            </div>

            <img src="Happy Black woman illustration.jpg" alt="" className="mt-2"/>

             <p className="text-center  mt-4 font-bold text-gray-600 md:text-lg text-sm" >Hiya Jane Doe, 
Thanks for choosing HostBridge.
Your new example.name is now ready to use.
</p>
        </div>

       

        <button className="bg-purple-400 text-white font-bold p-4 rounded-full mt-3 md:text-xl">ACTIVATE ACCOUNT</button>
    </section>
  )
}

export default WelcomEmail