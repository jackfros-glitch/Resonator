import Image from "next/image";

interface HostProps {
  host: HostInterface;
}

interface HostInterface {
  name: string;
  thumbnail: string;
  career: string;
  linkedInUrl: string;
  facebookUrl: string;
  twitterUrl: string;
}

const Host = ({ host }: HostProps) => {
  return (
    <div className=" flex flex-col max-w-[387px]  shadow-[0_0_25px_0_#00000014] rounded-lg overflow-hidden">
      <div className="relative">
        <img
          className="w-full sm:max-w[387px] h-[371px] sm:h-[448px] rounded-tl-[10px] rounded-tr-[10px]"
          src={host.thumbnail}
          alt="host_image"
        />
      </div>

      <div className="flex flex-col justify-center items-center max-w-[387px] h-[160px] bg-[#fff] ">
        <div className=" flex flex-col h-[200px] w-[302px] justify-center">
          <div className="flex flex-col mb-2">
            <span className=" text-3xl font-bold text-[#000000] inline-block">
              {host.name}
            </span>
            <span className="inline-block text-sm text-[#8E8B8C] mt-2">
              {host.career}
            </span>
          </div>
          <div>
            <a
              href={`${host.facebookUrl}`}
              className="w-6 h-6 inline-flex items-center justify-center bg-[#8E8B8C] rounded-xl mr-3"
            >
              <span className="bg-facebook w-3 h-3 inline-block"></span>
            </a>
            <a
              href={`${host.linkedInUrl}`}
              className="w-6 h-6 inline-flex items-center justify-center bg-[#8E8B8C] rounded-xl mr-3"
            >
              <span className="inline-block bg-linkedin w-3 h-3"></span>
            </a>
            <a
              href={`${host.twitterUrl}`}
              className="w-6 h-6 inline-flex items-center justify-center bg-[#8E8B8C] rounded-xl mr-3"
            >
              <span className=" inline-block bg-twitter w-3 h-3 "></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Host;
