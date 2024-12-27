//Ce composant permet de créer un lien avec un icone

const IconLien = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  return (
    <li className="my-2 ml-2 hover:bg-green-300 rounded-lg w-4/5 py-2 pl-1 flex">
      {children}
      <a href="">{text}</a>
    </li>
  );
};

export default IconLien;
