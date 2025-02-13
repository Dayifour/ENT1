'use client';
import { useState } from 'react';

function Message() {
  const [title, setTitle] = useState('');
  const [history, setHistory] = useState([
    'Supporting line text lorem ipsum dolor sit amet, consectetur.',
    'Supporting line text lorem ipsum dolor sit amet, consectetur.',
    'Supporting line text lorem ipsum dolor sit amet, consectetur.',
    'Supporting line text lorem ipsum dolor sit amet, consectetur.',
  ]);

  const handleSave = () => {
    if (title.trim() !== '') {
      setHistory([title, ...history]);
      setTitle('');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <p className="text-sm text-gray-500 mb-2">Les messages sont destinés à la direction, soyez prudent(e)</p>
      
      <div className="flex items-center border-b pb-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full border-none focus:ring-0 text-lg p-2"
        />
        <button onClick={() => setTitle('')} className="text-gray-400 hover:text-gray-600">&times;</button>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Save
          </button>
          <button
            onClick={() => setTitle('')}
            className="border px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
        <h3 className="font-semibold">Historique</h3>
      </div>
      
      <div className="mt-2 space-y-2">
        {history.map((item, index) => (
          <div key={index} className="p-3 bg-purple-50 rounded-lg shadow-sm">
            <p className="font-semibold">List item</p>
            <p className="text-sm text-gray-600">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Message;
