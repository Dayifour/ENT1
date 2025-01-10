import SmallIconCard from "@/component/smallIconCard/SmallIconCard";
import UserCard from "@/component/userCard/UserCard";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div className="w-full mt-16 flex justify-center">
      <div className="flex gap-10">
        <UserCard />
        <div className="flex flex-col gap-8">
          <SmallIconCard />
          <SmallIconCard />
        </div>
        <div className="flex flex-col gap-8">
          <SmallIconCard />
          <SmallIconCard />
        </div>
      </div>
    </div>
  );
}
