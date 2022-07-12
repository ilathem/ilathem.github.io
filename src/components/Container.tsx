import React from "react";
import "../styles/styles.scss";

function Container(props: { children: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {

  return (
    <div 
      className="container"
    >
      {props.children}
    </div>
  );
}

export default Container;