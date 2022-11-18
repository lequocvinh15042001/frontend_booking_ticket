import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import UserInformation from "../components/UserInformation/UserInformation";
import { userLogin } from "../config/setting";
const Profile = (props) => {
  if (!localStorage.getItem(userLogin)) {
    props.history.push("/");
  }
  return <>
    {/* <Header/> */}
    <UserInformation />
    <Footer/>
  </>
};

export default Profile;
