import { hosts } from "@/public/data";
import Host from "./Host";

const HostList = () => {
  return (
    <div className=" w-[90%]  sm:max-w-[1300px] grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 justify-center justify-items-center gap-4 gap-y-14 mx-auto mt-5 mb-8">
      {hosts.map((host) => (
        <Host key={host.name} host={host} />
      ))}
      <span className="inline-block md:hidden font-bold text-base leading-8 mt-5 cursor-pointer">
        View all of them{" "}
        <span className=" inline-block bg-arrow w-[19px] h-[14px] mr-3 ml-1"></span>
      </span>
    </div>
  );
};

export default HostList;
