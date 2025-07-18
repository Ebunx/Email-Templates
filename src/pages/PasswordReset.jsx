import React from 'react'

function PasswordReset() {
  return (
       <section class="md:w-[60%] justify-self-center">
      <div class="wrapper bg-white p-10  rounded-4xl ">
        <div class="head">
          <h4 class="   md:text-2xl font-bold">PASSWORD RESET </h4>
        </div>

        <img src="password-reset.jpg" alt="" class="mt-2" />

        <p class="text-left mt-4 font-bold   text-xl ">
        Hi,
        </p>

        <div class="text-center space-y-4 mt-5">
          <p> 
           You are receiving this email as a result of requesting a password reset. In order to reset your password please follow the link below:

          </p> 

          <button className=" text-white bg-blue-500 py-2 px-6 text-xl rounded-lg">RESET</button>
          <p className='text-left'>Best wishes,</p>
          <p class="font-bold text-left">HostBridge</p>

          <div></div>
        </div>
      </div>
    </section>
  )
}

export default PasswordReset