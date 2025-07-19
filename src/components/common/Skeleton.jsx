const Skeleton = ({ 
  variant = 'text',
  width,
  height,
  className = '',
  circle = false,
  count = 1,
  inline = false
}) => {
  const baseClasses = "bg-gray-200 animate-pulse";
  const shapeClasses = circle ? "rounded-full" : "rounded";
  const displayClasses = inline ? "inline-block" : "block";
  
  const getSkeletonStyle = () => {
    const style = {};
    if (width) style.width = typeof width === 'number' ? `${width}px` : width;
    if (height) style.height = typeof height === 'number' ? `${height}px` : height;
    return style;
  };

  const renderSkeleton = () => {
    switch (variant) {
      case 'text':
        return (
          <div 
            className={`${baseClasses} ${shapeClasses} ${displayClasses} h-4 ${className}`}
            style={getSkeletonStyle()}
          />
        );
      case 'circular':
        return (
          <div 
            className={`${baseClasses} rounded-full ${displayClasses} ${className}`}
            style={getSkeletonStyle()}
          />
        );
      case 'rectangular':
        return (
          <div 
            className={`${baseClasses} ${shapeClasses} ${displayClasses} ${className}`}
            style={getSkeletonStyle()}
          />
        );
      default:
        return null;
    }
  };

  return count === 1 ? (
    renderSkeleton()
  ) : (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </div>
  );
};

export default Skeleton; 