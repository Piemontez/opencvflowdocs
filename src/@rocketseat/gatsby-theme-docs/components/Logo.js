import React from "react";

// Path to the logo file on your project
import rocketseatLogo from "../../../assets/logo.png";

const Logo = () => (
  <>
    <img
      src={rocketseatLogo}
      alt="Rocketseat logo"
      style={{ width: 32, marginRight: 10 }}
    />
    <strong>IAM Docs</strong>
  </>
);

export default Logo;
