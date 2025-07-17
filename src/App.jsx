import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import BillingDue from './pages/Billing-due'
import Vps from './pages/Vps'
import NewVps from './pages/NewVps'
import ServerDetails from './pages/ServerDetails'
import UserWelcome from './pages/UserWelcome'
import WelcomEmail from './pages/WelcomEmail'
import PasswordReset from './pages/PasswordReset'
import ServiceManagement from './pages/ServiceManagement'
import StackTicketUpdate from './pages/StackTicketUpdate'
import NewStackTicket from './pages/NewStackTicket'
import NewStackTicketOpened from './pages/NewStackTicketOpened'
import StackTicketUpdatedStaff from './pages/StackTicketUpdatedStaff'
import StackTicketClosed from './pages/StackTicketClosed'
import StackTicketUpdateCustomer from './pages/StackTicketUpdateCustomer'
import Nav from './components/nav'
import PackageWelcome from './pages/packageWexlcome'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className="bg-purple-100 p-4">
      <BrowserRouter>
        <button className="text-2xl p-2" onClick={() => setIsOpened(prev => !prev)}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {isOpened && <Nav />}

        <Header />
        <Routes>
          <Route path="/billing" element={<BillingDue />} />
          <Route path="/Managevps" element={<Vps />} />
          <Route path="/NewVps" element={<NewVps />} />
          <Route path="/PasswordReset" element={<PasswordReset />} />
          <Route path="/ServerDetails" element={<ServerDetails />} />
          <Route path="/UserWelcome" element={<UserWelcome />} />
          <Route path="/WelcomeEmail" element={<WelcomEmail />} />
          <Route path="/ServiceManagement" element={<ServiceManagement />} />
          <Route path="/StackTicketUpdate" element={<StackTicketUpdate />} />
          <Route path="/NewStackTicket" element={<NewStackTicket />} />
          <Route path="/NewStackTicketOpened" element={<NewStackTicketOpened />} />
          <Route path="/StackTicketUpdatedStaff" element={<StackTicketUpdatedStaff />} />
          <Route path="/StackTicketClosed" element={<StackTicketClosed />} />
          <Route path="/StackTicketUpdateCustomer" element={<StackTicketUpdateCustomer />} />
          <Route path="/PackageWelcome" element={<PackageWelcome />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
