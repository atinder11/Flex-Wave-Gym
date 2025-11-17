import React from "react";

function Cta() {
  return (
    <>
      <div className="bg-mainblue h-1/2">
        <div className="container mx-auto px-4">
          <div className="text-center p-8 ">
            <h1 className="text-3xl font-bold text-white text-pretty">
              What are you waiting for ?
              <br />
              Let&apos;s register yourself now
            </h1>
            <p className="text-xl font-semibold text-white text-pretty">
                <br/>
              Here, we not only offee the best fitness equipment, but also a
              supportive environment <br />
              and training programs specifically designed to help you achieve
              fitness goals.
            </p>
            <br />
            <button className="btn btn-outline rounded-2xl bg-white text-mainblue text-xl">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cta;
