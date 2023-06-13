import React from "react";
import { useCountdown } from "../../hooks/useCountDown";

const ContDownClock = () => {
  const [days, hours, minutes, seconds] = useCountdown("2023/01/01");
  return (
    <div className="flex md:flex-row flex-col md:justify-between justify-center items-center">
      <div className="rounded-xl bg-[#00b1d7] pw-4 py-10 text-center items-center h-1/2 w-3/4 md:mb-0 mb-2 md:w-1/5 bg-gradient-to-l from-[#00b0d7d3] to-[#00b0d7c7] shadow-lg shadow-cyan-500/50">
        <p className="normalText font-extrabold">{days}</p>
        <p>Days</p>
      </div>
      <div className="rounded-xl bg-[#8511b5] pw-4 py-10 text-center items-center h-1/2 w-3/4 md:mb-0 mb-2 md:w-1/5 bg-gradient-to-l from-[#9c20ced3] to-[#cf90d4c7] shadow-lg shadow-purple-500/50">
        <p className="normalText font-extrabold">{hours}</p>
        <p>Hours</p>
      </div>
      <div className="rounded-xl bg-[#08b7fd] pw-4 py-10 text-center items-center h-1/2 w-3/4 md:mb-0 mb-2 md:w-1/5 bg-gradient-to-l from-[#0599d3d3] to-[#0599d3c7] shadow-lg shadow-teal-500/50">
        <p className="normalText font-extrabold">{minutes}</p>
        <p>Minutes</p>
      </div>
      <div className="rounded-xl bg-[#0a6eff] pw-4 py-10 text-center items-center h-1/2 w-3/4 md:mb-0 mb-2 md:w-1/5 bg-gradient-to-l from-[#0a6effd3] to-[#0a6effc7] shadow-lg shadow-blue-500/50">
        <p className="normalText font-extrabold">{seconds}</p>
        <p>Secunds</p>
      </div>
    </div>
  );
};

export default ContDownClock;
