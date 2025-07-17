import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
     <div className="md:move absolute bg-white md:w-[20%]  w-[50%]">
        <nav className="flex flex-wrap justify-between items-center text-black-500 w-[55%] mx-auto">

            <ul>
               <Link to="/billing"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500">BILLING</li></Link>
               <Link to="/NewStackTicket"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500">NEW STACK TICKET</li></Link> 
               <Link to="/NewStackTicketOpened"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500"> NEW TICKET OPENED</li></Link>
               <Link to="/PackageWelcome"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500">PACKAGE WELCOME</li></Link> 
               <Link to="/PasswordReset"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500">PASSWORD RESET</li></Link>
               <Link to="/ServerDetails"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500">SERVER DETAILS</li></Link> 
               <Link to="/ServiceManagement"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500">SERVICE MANAGEMENT</li></Link>
               <Link to="/StackTicketClosed"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500">TICKET UPDATE CLOSED</li></Link>
               <Link to="/StackTicketUpdate"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500">TICKET UPDATE</li></Link>
               <Link to="/StackTicketUpdateCustomer"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500">TICKET UPDATE CUSTOMER</li></Link> 
               <Link to="/StackTicketUpdatedStaff"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500">TICKET UPDATE STAFF</li></Link>
               <Link to="/UserWelcome"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500">USER WELCOME</li></Link>
               <Link to="/Managevps"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500">MANAGE VPS</li></Link>
               <Link to="/NewVps"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500">NEW VPS</li></Link>
               <Link to="/WelcomeEmail"><li className=" font-bold py-2 text-gray-700 hover:text-purple-500">WELCOME EMAIL</li></Link>
 
      
            </ul>
            </nav>
     </div>
  )
}

export default Nav