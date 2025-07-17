import React from "react";

function UserWelcome() {
  return (
    <section className="md:w-[60%] justify-self-center">
      <div className="wrapper bg-white p-10  rounded-4xl ">
        <div className="head">
          <h4 className="text-gray-500   md:text-2xl ">
            WE ARE GLAD TO SEE YOU <span className="text-black-700">; )</span>{" "}
          </h4>
          <h5 className=" md:text-4xl font-normal text-gray-700"> </h5>

          <img
            src="https://www.freepik.com/premium-vector/vector-guy-expressing-thumbs-up_138548975.htm#fromView=search&page=1&position=19&uuid=176ec226-84a0-4d2c-b7c7-5d53984688ba&query=hi"
            alt=""
          />
        </div>

        <img src="userwelcome.jpg" alt="" className="mt-2" />

        <h3></h3>
        <p className="mt-3  text-xl">
          {" "}
          <span className="font-bold text-black-800">Hi,</span>
          Welcome to the{" "}
          <span className="font-bold  text-black-500">HostBridge</span> web
          hosting control panel. You can log in{" "}
          <span className=" ">
            <a
              href="http://cp.hostbridge.co"
              className="underline text-purple-500"
            >
              here
            </a>{" "}
          </span>{" "}
          using a PC or mobile device.
        </p>
        <p>Your user name is —---- and your password is *Password*</p>
        <p className="mt-3 text-gray-800">
          <span className="font-bold text-black-600">HostBridge</span> gives you
          complete control over common tasks related to websites, including:
        </p>

        <ol className="list-decimal mt-4 t text-left font-semibold">
          <li>Building websites with our web builder</li>
          <li>transferring files securely</li>
          <li>installing software</li>
          <li>managing email</li>
          <li>scheduling tasks</li>
          <li>Managing domains and nameservers</li>
          <li>scanning for malware</li>
          <li>reviewing stats and logs</li>
        </ol>

        <p className="mt-5  text-black-500">
          You can also manage your contact and security details.
        </p>
        <p className="text-black-500">
          {" "}
          We recommend that you set up two-factor authentication (2FA) to
          improve account security. You can use 2FA apps from Microsoft and
          Google to obtain the single-use passcodes required for authentication.
        </p>

        <p className="text-gray-500 mt-4">
          If you have any questions about HostBridge, please contact us at{" "}
          <span className="text-blue-500">support@hostbridge.co</span>
          Thank you for choosing HostBridge
        </p>
      </div>
    </section>
  );
}

export default UserWelcome;
