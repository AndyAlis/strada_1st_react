
import { useEffect, useState } from "react";
import Home from "./pages/Home"
import Modal from "./components/modal/Modal";
import LoginForm from "./components/loginForm/LoginForm";
import RegistrationForm from "./components/registrationForm/RegistrationForm";

export default function App() {

  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [isLogined, setIsLogined] = useState(false);

// couldn't find another fast solution then useEddect
// help to show modal
  useEffect(()=>{
    if(showLogin) setShowModal(true)
    if(showRegistration) setShowModal(true)
  },[showLogin, showRegistration ])

  // turn of registration and login form when modal is off
  useEffect(()=>{
    if(!showModal) {
      setShowLogin(false)
      setShowRegistration(false)
    }
  },[showModal])

//turn modal off after login
  useEffect(()=>{
    if (isLogined) setShowModal(false)
  },[isLogined])


  return (
    <>
        <Modal isActive={showModal} showActive={setShowModal}>
        <LoginForm isActive={showLogin} setIsLogined={setIsLogined}/>
        <RegistrationForm isActive={showRegistration} setShowLogin={setShowLogin} setShowRegistration={setShowRegistration}/>
      </Modal>
      <Home isLogined={isLogined} login={setShowLogin} register={setShowRegistration} setIsLogined={setIsLogined}/>
    </>
  );
}

