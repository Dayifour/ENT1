const Emploie = () => {
    const daysOfWeek = ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];
    const rows = [
      ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
      ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
    ];
  
    return (
      <div className="max-w-md mx-auto w-50 p-4 border rounded-lg shadow-sm bg-white">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Emploie</h2>
          <button className="text-gray-500">
          </button>
        </div>
  
        {/* Table */}
        <div className="border-t border-gray-300">
          {/* Days of the week */}
          <div className="grid grid-cols-6 border-b border-gray-300">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center font-semibold py-2 border-r border-gray-300 last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>
  
          {/* Rows of labels */}
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-6 border-b border-gray-300"
            >
              {row.map((label, colIndex) => (
                <div
                  key={colIndex}
                  className="text-center py-4 border-r border-gray-300 last:border-r-0 text-gray-500"
                >
                  {label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Emploie;
  