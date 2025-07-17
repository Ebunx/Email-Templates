import React from 'react';

function NewVps() {
  return (
    <section className="w-[60%]  justify-self-center">
      <div className="wrapper bg-white p-10 rounded-4xl">
        <div className="head">
          <h4 className="text-gray-500 md:text-2xl font-bold">VPS</h4>
        </div>

        <img src="Managevps.jpg" alt="Happy Black woman" className="mt-2" />

        <p className="text-left mt-4 font-bold text-sm">
          Hi Jane Doe,
        </p>

        <div className="text-left space-y-4 mt-5">
          <p>Thanks for choosing HostBridge for your VPS..</p>
          <p>Your server is being provisioned and will be ready in seconds.</p>
          <p>Best wishes,</p>
          <p className="font-bold">HostBridge</p>
        </div>
      </div>
    </section>
  );
}

export default NewVps;
