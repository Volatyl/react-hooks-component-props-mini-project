import React from "react";
function About({ img, about }) {
  const imgUrl = img ? img : "https://via.placeholder.com/215";
  return (
    <aside>
      <img src={imgUrl} alt={'blog logo'}/>
      <p>{about}</p>
    </aside>
  );
}
export default About;
