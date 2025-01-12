import React from "react";

interface BaseFormulaireProps {
  fields: { name: string; label: string; type: string }[];
  onSubmit: (data: Record<string, string>) => void;
}

export const BaseFormulaire: React.FC<BaseFormulaireProps> = ({
  fields,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    onSubmit(data as Record<string, string>);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label htmlFor={field.name} className="text-sm font-medium">
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Envoyer
      </button>
    </form>
  );
};
