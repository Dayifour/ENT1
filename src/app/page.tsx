import SmallIconCard from "@/component/smallIconCard/SmallIconCard";
import UserCard from "@/component/userCard/UserCard";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div className="w-full mt-16 gap-10 flex flex-col justify-center items-center">
      <div className="flex gap-5 min-h-[clac(100vh-100px)] items-start">
        <div className="flex flex-col gap-5 w-[600px] h-full">
          <UserCard />
          <div className="bg-userCard h-[500px] rounded-lg"></div>
        </div>
        <div className="flex flex-col gap-5 h-full">
          <div className="flex flex-col gap-5 h-[250px]">
            <div className="flex gap-5">
              <SmallIconCard
                photoName="/icons/calendarColor.png"
                stats="90%"
                name="Présence"
              />
              <SmallIconCard
                photoName="/icons/book.png"
                stats="3"
                name="Filière"
              />
            </div>
            <div className="flex h-full gap-5">
              <SmallIconCard
                photoName="/icons/text-books.png"
                stats="10"
                name="Matière"
              />
              <SmallIconCard
                photoName="/icons/teach.png"
                stats="9"
                name="classes"
              />
            </div>
          </div>
          <div className="bg-userCard h-[500px] rounded-lg"></div>
        </div>
      </div>
      <div className="flex flex-col gap-10"></div>
    </div>
  );
}
