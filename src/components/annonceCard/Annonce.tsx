type CardProps = {
    title: string;
    description: string;
    actions: string[];
  };
  


export default function Annonce({title, description, actions }: CardProps) {
  return (
    <div className="max-w-md p-4 bg-purple-50 rounded-lg shadow-md mb-4">
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="flex space-x-4 mt-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="text-purple-500 hover:underline focus:outline-none"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}
