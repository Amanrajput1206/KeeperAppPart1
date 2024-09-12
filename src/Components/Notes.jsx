import React from "react";
/*Also you will notice that you can create a class in css, use it as a custom element and
also specify the styling of other elements within that tag or class */
function Note() {
  return (
    <div className="note">
      <h1>Title</h1>
      <p>Content</p>
    </div>
  );
}

export default Note;
