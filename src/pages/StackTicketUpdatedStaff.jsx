import React from "react";

function StackTicketUpdatedStaff() {
  return (
    <section className="md:w-[60%] justify-self-center">
      <div className="wrapper bg-white p-10  rounded-4xl ">
        <div className="head">
          <h4 className="text-gray-500   md:text-2xl ">Hi Jane Doe, </h4>
          <h5 className=" md:text-4xl font-normal text-gray-700"> </h5>
        </div>

        <img src="chher.jpg" alt="" className="mt-2" />

        <h3 className="mt-8 text-2xl">
          An update has been made to your support ticket: 000000
        </h3>
        <p className="mt-4">You can take a look and respond </p>
        <button className="mt-5 text-xl text-white rounded-md p-4 font-bold bg-[#0050E5]">
          {" "}
          <a href="https://mysupporturl.com/">Here's Your Link</a>
        </button>
        <p className="mt-3 text-left">Kind regards,</p>

        <p className="mt-2 text-left font-bold">HostBridge</p>
      </div>
    </section>
  );
}

export default StackTicketUpdatedStaff;
