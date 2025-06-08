const ToolTipIcon = ({
  label,
  children,
  onClick,
}: {
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div className="relative group">
      <div
        className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer 
                 hover:text-gray-800 hover:bg-white transition duration-300"
        onClick={onClick}
      >
        {children}
      </div>
      <div
        className="absolute left-12 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-xs 
                 px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 
                 transition-opacity duration-300 whitespace-nowrap z-10"
      >
        {label}
      </div>
    </div>
  );
};
export default ToolTipIcon;
