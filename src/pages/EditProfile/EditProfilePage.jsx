import React from "react";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import EditProfile from "../../components/Form/EditProfile/EditProfile.jsx"
import "./EditProfilePage.css"
const EditProfilePage = () => {
  return (
    <div className="edit-profile">
      <ContainerHome>
        <div className="edit-profile-container-page">
          <EditProfile />
        </div>
      </ContainerHome>
    </div>
  );
};

export default EditProfilePage;
