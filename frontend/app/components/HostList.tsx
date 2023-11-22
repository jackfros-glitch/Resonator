import { hosts } from "@/public/data";
import Host from "./Host";

const HostList = () => {
  return (
    <div className=" max-w-[1300px] borde-2 border-black grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 justify-center justify-items-center gap-4 gap-y-14 mx-auto mt-5">
      {hosts.map((host) => (
        <Host key={host.name} host={host} />
      ))}
    </div>
  );
};

export default HostList;
