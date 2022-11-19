import React from "react";

const Container = (props: any) => {
  return (
    <div className="bg-secondary-background mx-[22.5%] p-16 my-8">
      {props.children}
    </div>
  );
};

export default Container;
