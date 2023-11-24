import React, { useState } from "react";
import UsersForm from "../components/UsersForm.jsx";
import Header from "../components/Header.jsx";
import LayoutModal from "../components/LayoutModal.jsx";
import UserInformation from "../components/UserInformation.jsx";

const Users = () => {
  const [modalUserData, setModalUserData] = useState({
    user: null,
    isOpen: false,
  });

  const handleSendContact = (user) => {
    setModalUserData({
      user,
      isOpen: true,
    });
  };

  return (
    <React.Fragment>
      <Header />

      {modalUserData.isOpen ? (
        <LayoutModal
          title="Usuario registrado correctamente"
          show={true}
          handleChangeStatusModal={() =>
            setModalUserData({ isOpen: false, user: null })
          }
        >
          <UserInformation user={modalUserData.user} />
        </LayoutModal>
      ) : null}

      <UsersForm handleSendContact={handleSendContact} />
    </React.Fragment>
  );
};

export default Users;
