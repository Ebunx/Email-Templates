import React from 'react'

function PackageWelcome() {
  return (
    
     <section className="w-[60%] justify-self-center">
        <div className="wrapper bg-white p-10  rounded-4xl ">
            <div className="head"> 
            <h4 className="text-gray-500   md:text-2xl font-bold">HOSTING DETAILS</h4>
            </div>

            <img src="Happy Black woman illustration.jpg" alt="" className="mt-2"/>

              <p className="text-left mt-4 font-bold text-gray-600 md:text-lg text-sm" >Hiya Jane Doe,  
</p>
<p className="text-left mt-4 font-bold text-gray-600 md:text-lg text-sm" > 
Thanks for choosing HostBridge.
Your new example.name is now ready to use.
</p>
<p className="text-left mt-4 font-bold   text-xl " > 
    Your Hosting Details
    </p>

    <div className="text-left space-y-4 mt-5">
        <p><span className="font-semibold">Domain Name:</span>domainone.com</p> 
        <p><span className="font-semibold">Account Setup Date:</span>04/04/2018</p> 
        <p><span className="font-semibold">Web Hosting Package Type:</span> Linux Unlimited</p> 
        <p className="mt-8"><span className="font-semibold mt-4">StackCP Control Panel </span></p> 
        <p><span className="font-semibold">Username:</span>domainone.com</p> 
        <p><span className="font-semibold">Password:</span>*Password* </p> 
        <p><span className="font-semibold">Control Panel Login:</span>http://cp.hostbridge.co</p> 
        <p className="mt-5"><span className="font-semibold ">FTP</span></p> 
        <p><span className="font-semibold" >Username: </span>domainone.com </p> 
        <p><span className="font-semibold" >Password: </span>*Password* </p> 
        <p><span className="font-semibold" >Server: </span>ftp.domainone.com</p> 
        <p className="mt-5 text-gray-500">To transfer your your website files, you can use FTP. This needs to be unlocked first. 

You can do this in StackCP, using these credentials:</p> 
        <p><span className="font-semibold" >Email:</span></p> 
        <p><span className="font-semibold" >Incoming Mail Server:</span> mail.domainone.com </p> 
        <p><span className="font-semibold" >Outgoing Mailserver: </span>mail.domainone.com </p> 
        <p><span className="font-semibold" >Webmail URL:</span> http://mail.*</p> 
        <p className="text-center text-sm"> You can configure your email by logging in to StackCP, and selecting “Email accounts”

If you have any issues, please go to <span className="text-blue-500 underline"><a href="#">https://hostbridge.co</a></span>  or email us at: <span className="text-blue-500">support@hostbridge.co</span> 

Thank you for choosing HostBridge. We look forward to helping you succeed online!</p> 
    
 




    </div>
        </div>
        
    </section>
  )
}

export default PackageWelcome