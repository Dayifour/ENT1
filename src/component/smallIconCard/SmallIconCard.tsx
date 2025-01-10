import Image from "next/image";

const SmallIconCard = () => {
  return (
    <div className="flex flex-col p-4 bg-gray-200 gap-4 justify-center items-center rounded-lg">
      <div className="flex justify-between gap-10">
        <Image src="/icons/calendarColor.png" alt="" width={40} height={40} />
        <h4 className="text-4xl font-bold">90%</h4>
      </div>
      <div className="">
        <h4 className="text-lg text-gray-800 font-medium">Présence</h4>
      </div>
    </div>
  );
};

export default SmallIconCard;
