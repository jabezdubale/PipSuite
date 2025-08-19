import { LuCircleGauge } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";

const CTAItems = ({ variant }) => {
  return (
    <div className="text-primary-headings flex flex-col items-start justify-center w-full md:w-1/3 md:p-2 gap-2">
      <div className="flex justify-start items-center gap-4 py-4">
        <div className="text-brand-green">
          <LuCircleGauge size={64} />
        </div>
        <p className="text-4xl">{variant[0]}</p>
      </div>

      <div className="flex justify-start items-center gap-2">
        <div className="text-brand-green">
          <FaCheck size={24} />
        </div>
        <p className="text-primary-headings text-xl">{variant[1]}</p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <div className="text-brand-green">
          <FaCheck size={24} />
        </div>
        <p className="text-primary-headings text-xl">{variant[2]}</p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <div className="text-brand-green">
          <FaCheck size={24} />
        </div>
        <p className="text-primary-headings text-xl">{variant[3]}</p>
      </div>
    </div>
  );
};

export default CTAItems;
