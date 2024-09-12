import React from "react";
const obj = new Date();
const year = obj.getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright @{year}</p>
    </footer>
  );
}

export default Footer;
