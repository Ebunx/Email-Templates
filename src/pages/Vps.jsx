import React from "react";

function Vps() {
  return (
    <section class="md:w-[60%] justify-self-center">
      <div class="wrapper bg-white p-10  rounded-4xl ">
        <div class="head">
          <h4 class="text-gray-500   md:text-2xl font-bold">VPS</h4>
        </div>

        <img src="ManageVps.jpg" alt="" class="mt-2" />

        <p class="text-left mt-4 font-bold  ">
          How to Manage your VPS
        </p>

        <div class="text-left space-y-4 mt-5">
          <p> 
            You can log in to HostBridge CP and begin managing your VPS right
            away.
          </p>
          <p>
            Go to ‘Manage VPS’ from the HostBridge home page or click here:
            Manage VPS.
          </p>
          <p>If you have issues with your VPS, please get in touch.</p>
          <p>Best wishes,</p>
          <p class="font-bold">HostBridge</p>

          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Vps;
