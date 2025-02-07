import React from "react";

// SimpleComponent for Drink
const Eat = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-bold mb-2">Eat</p>
      <img
        src="https://via.placeholder.com/150?text=Eat"
        alt="Eat"
        className="w-32 h-32 object-cover"
      />
    </div>
  );
};

export default Eat;
