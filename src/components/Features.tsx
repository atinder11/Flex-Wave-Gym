import React from "react";

function Features() {
  return (
    <>
      <div className="bg-mainblack ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <h2 className="text-2xl text-center text-white md:text-left dark:text-white font-bold">
                Best Features
                <br />
                we offer for you
              </h2>
            </div>
            <div>
              <p className="text-xl text-center md:text-right text-[#9596a1] text-pretty font-semibold">
                crafted with care and with your needs in mind,
                these features are designed to provide a better and more satisfying 
                experience for our users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
