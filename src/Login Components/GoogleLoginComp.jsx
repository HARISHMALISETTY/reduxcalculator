import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const GoogleLoginComp = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const customStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  };

  const handleSuccess = (response) => {
    console.log(response.profileObj);
    setErrorMsg("");
    setIsLoggedIn(true);
    setName(response.profileObj.name);
    setPhoto(response.profileObj.imageUrl);
  };

  const handleFailure = (response) => {
    console.log(response);
    setErrorMsg(response.error);
  };
  const handleLogout = () => {
    setErrorMsg("");
    setIsLoggedIn(false);
    setName("");
    setPhoto("");
  };

  return (
    <div style={customStyle}>
      {isLoggedIn ? (
        <GoogleLogout
          clientId="126421120628-4ilcus5dcqscjgalp6vqstr0otqbm40k.apps.googleusercontent.com"
          buttonText="Logout With Google"
          onLogoutSuccess={() => {
            handleLogout();
          }}
        />
      ) : (
        <>
          <GoogleLogin
            clientId="813755426604-c14fjkrfta5up8p97rptleprf7ua6l3l.apps.googleusercontent.com"
            buttonText="Login with Google"
            cookiePolicy={"single_host_origin"}
            onSuccess={(response) => {
              handleSuccess(response);
            }}
            onFailure={(response) => handleFailure(response)}
          />
          <br />
        </>
      )}
      {name && <h1>Name: {name}</h1>}
      <br />
      {photo && (
        <h1>
          Image: <img src={`${photo}`} alt={`${name}`} />
        </h1>
      )}
      <br />

      {errorMsg && <h1 style={{ color: "red" }}>{errorMsg}</h1>}

      <br />
    </div>
  );
};

export default GoogleLoginComp;
