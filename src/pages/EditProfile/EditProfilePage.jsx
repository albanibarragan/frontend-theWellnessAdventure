import React from "react";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import EditProfile from "../../components/Form/EditProfile/EditProfile.jsx"
import "./EditProfilePage.css"
import Navbarhome from "../../components/Navbar/NavbarHome/NavbarHome.jsx"
const EditProfilePage = () => {
  return (
    <div className="edit-profile">
    <ContainerHome/>
        <div className="edit-profile-container-page">
          <EditProfile />
        </div>
        
    </div>
  );
};

export default EditProfilePage;
