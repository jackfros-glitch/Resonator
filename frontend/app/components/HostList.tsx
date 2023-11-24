import { hosts } from "@/public/data";
import Host from "./Host";

const HostList = () => {
  return (
    <div className=" w-[90%]  sm:max-w-[1300px] borde-2 border-black grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 justify-center justify-items-center gap-4 gap-y-14 mx-auto mt-5 mb-8">
      {hosts.map((host) => (
        <Host key={host.name} host={host} />
      ))}
    </div>
  );
};

export default HostList;
