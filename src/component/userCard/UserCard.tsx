import Image from "next/image";

const UserCard = () => {
  return (
    <div className="flex flex-col w-full h-[250px] bg-userCard p-2 justify-center rounded-lg">
      <div className="flex gap-10 items-start">
        <div className="w-[150px] h-[150px] relative rounded-full">
          <Image
            src="/img/man2.jpg"
            alt=""
            fill
            className="object-fit rounded-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold">Manager Dayif</h3>
          <p className="text-sm max-w-[300px] text-gray-700 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ad, exercitationem consectetur a beatae nobis culpa tenetur incidunt
          </p>
        </div>
      </div>
      <div className="flex mt-2 justify-between px-10">
        <div className="flex flex-col gap-2">
          <p className="flex gap-2 items-center text-gray-800">
            <Image src="/icons/email.png" alt="" width={15} height={15} />
            <span>managerdayif@gmail.com</span>
          </p>
          <p className="flex gap-2 items-center text-gray-800">
            <Image src="/icons/location.png" alt="" width={15} height={15} />
            <span>Moribabougou</span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex gap-2 items-center text-gray-800">
            <Image src="/icons/calendar.png" alt="" width={15} height={15} />
            <span>Janvier 2025</span>
          </p>
          <p className="flex gap-2 items-center text-gray-800">
            <Image src="/icons/call.png" alt="" width={15} height={15} />
            <span>79994640</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
