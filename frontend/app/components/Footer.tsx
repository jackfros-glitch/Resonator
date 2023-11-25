import Image from "next/image";

const Footer = () => {
  const imageStyle = {
    width: "147px",
    height: "23px",
  };
  return (
    <footer className="bg-black w-full px-3 pl-6 lg:px-0 lg:pl-0">
      <div className=" max-w-[1236px] mx-auto flex flex-col lg:flex-row justify-between pt-[134px] pb-[130px]">
        <div className="mb-8">
          <Image
            src="/images/logonew7.png"
            alt="Logo"
            width={147}
            height={23}
            style={imageStyle}
          />
          <p className=" text-sm text-[#969696] font-sans mt-3">
            The great connection.
          </p>
        </div>
        <div className=" ">
          <p className="text-[#FFFFFF] font-bold text-3xl max-w-[711px] leading-[34.02px] mb-[113px]">
            We collaborate with ambitious brands and people; let’s build
            something great together.
          </p>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
            <div className=" max-w-[332.5px]">
              <h2 className="text-[#969696] font-bold text-lg mb-6">
                Start a conversation:
              </h2>
              <div className="text-[#CCCCCC] leading-[27.03px] font-[17px] mb-20">
                <span className="block">podcast@example.com</span>
                <span className="block">+2 969 866 7033</span>
              </div>
              <span className="text-[#CCCCCC] text-sm">Terms & Conditions</span>
            </div>
            <div className="max-w-[332.5px]">
              <h2 className="text-[#969696] font-bold text-lg mb-6">
                Find us here:
              </h2>
              <div className="text-[#CCCCCC] leading-[27.03px] font-[17px] mb-20">
                <span className="block">Brooklyn, NY 11201</span>
                <span className="block">United States</span>
              </div>
              <span className="text-[#CCCCCC] text-sm">Privacy Policy</span>
            </div>
            <div className="max-w-[332.5px] md:mt-10 lg:mt-0">
              <h2 className="text-[#969696] font-bold text-lg mb-8">
                Follow us on:
              </h2>
              <div className="text-[#CCCCCC] leading-[27.03px] font-[17px] mb-24">
                <div>
                  <a
                    href="#"
                    className="w-6 h-6 inline-flex items-center justify-center rounded-xl mr-3"
                  >
                    <span className="bg-facebook1 w-[21px] h-[19px] inline-block"></span>
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 inline-flex items-center justify-center  rounded-xl mr-3"
                  >
                    <span className="inline-block  w-[21px] h-[19px] bg-twitter1 "></span>
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 inline-flex items-center justify-center rounded-xl mr-3"
                  >
                    <span className=" inline-block bg-instagram w-[20px] h-[19px] "></span>
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 inline-flex items-center justify-center rounded-xl mr-3"
                  >
                    <span className=" inline-block bg-youtube w-[23px] h-[17px] "></span>
                  </a>
                </div>
              </div>
              <span className="text-[#CCCCCC] text-sm">
                © 2021 Qode Interactive. All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
