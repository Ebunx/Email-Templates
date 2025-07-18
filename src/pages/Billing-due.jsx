import React from 'react'

function BillingDue() {
  return (
    <section class="md:w-[60%] justify-self-center">
        <div class="wrapper bg-white p-10  rounded-4xl ">
            <div class="head"> 
            <h4 class="font-bold :text-2xl ">BILLING DUE </h4>
            </div>

            <img src="BillingDue.jpg" alt="" class="mt-2"/>

              <p class="text-left mt-4 font-bold text-black md:text-lg text-sm" >Hiya Jane Doe,  
</p>
<p class="text-left mt-4 font-bold text-gray-600 md:text-lg text-sm" > 
We hope this message finds you well. We're reaching out to remind you that the following services are due for renewal:
</p>
<p class="text-left mt-4 font-bold   text-lg " > 
  Service Type	Service Name	Billing period	Expiry date
    </p>

    <div class="text-left space-y-4 mt-5">
        <p> <span class="font-semibold">package	Excample Package Type (example-package.name):</span>	12 months	1900-12-31</p> 
        <p><span class="font-semibold">domain	example-domain.name	:</span>12 months	1900-12-31
        </p> 
        <p>To ensure uninterrupted access, please complete the renewal process promptly. You can manage your renewals easily by visiting:</p> 
        <p class="mt-8 "> <span class="font-semibold">Renew Now </span>[CTA - cp.hostbridge.co]</p> 
        <p> If you have any questions or need assistance, our support team is here to help.</p> 
        <p>Thank you for choosing HostBridge. We look forward to continuing to serve you. </p> 
        <p>
Best wishes,
</p> 
        <p class="mt-5 font-bold">The HostBridge Team</p> 
       
    </div>
        </div>
        
    </section>

  )
}

export default BillingDue