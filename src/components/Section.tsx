import React from "react";

const Section =(props: any) => {
  return (
    <div className={"section"}>
      <div className="section-content" id={props?.id}>
        <h1>{props?.title}</h1>
        <p>{props?.subtitle}</p>
      </div>
    </div>
  );
}

export default Section;