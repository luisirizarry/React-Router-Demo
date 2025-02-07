import React from 'react';

// SimpleComponent for Drink
const Drink = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-bold mb-2">Drink</p>
      <img src="https://via.placeholder.com/150?text=Drink" alt="Drink" className="w-32 h-32 object-cover" />
    </div>
  );
};

export default Drink;