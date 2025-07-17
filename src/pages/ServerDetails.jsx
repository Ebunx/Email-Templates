import React from "react";

function ServerDetails() {
  return (
    <section className="md:w-[60%] justify-self-center">
      <div className="wrapper bg-white p-10  rounded-4xl ">
        <div className="head">
          <h4 className="text-gray-500   md:text-2xl font-bold">
            SERVER DETAILS
          </h4>
        </div>

        <img src="serverDetails.jpg" alt="" className="mt-2" />

        <p className="text-left mt-4 font-bold    text-sm">
          Your Server Details
        </p>

        <div className="text-left space-y-4 mt-5">
          <p>
            <span className="font-semibold">Server Name: </span>server.name
          </p>
          <p>
            <span className="font-semibold">Login Password:</span>password
          </p>
          <p>
            <span className="font-semibold">Server Specifications:</span>4
            cores, 4 GB RAM, 2 GB SSD
          </p>

          <div></div>
        </div>
      </div>
    </section>
  );
}

export default ServerDetails;
