type CardProps = {
    title: string;
    content: React.ReactNode;
    colorClass: string;
  };
  
  const ColorfulCard: React.FC<CardProps> = ({ title, content, colorClass }) => {
    return (
      <div className={`p-6 border  border-gray-300 rounded-lg shadow-lg ${colorClass}`}>
        <div className="flex space-x-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        {content}
      </div>
    );
  };
  
  export default ColorfulCard;
  