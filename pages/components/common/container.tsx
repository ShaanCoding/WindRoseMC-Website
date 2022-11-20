import React from "react";

const Container = (props: any) => {
  return (
    <div className="bg-secondary-background mx-8 xl:mx-[22.5%] px-8 py-16 sm:p-16 my-8">
      {props.children}
    </div>
  );
};

export default Container;
