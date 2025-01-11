import Image from "next/image";
import Link from "next/link";

const Links = ({
  image,
  path,
  title,
}: {
  image: string;
  path: string;
  title: string;
}) => {
  return (
    <Link
      className="mx-6 hover:bg-green-300 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex"
      href={path}
    >
      <Image src={image} width={20} height={20} alt="" />
      <p>{title}</p>
    </Link>
  );
};

export default Links;
