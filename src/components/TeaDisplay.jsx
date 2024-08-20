const TeaDisplay = ({ name, origin, description, url, className }) => {
  return (
    <div className={className}>
      <div>
        <p className="font-bold mb-8">{name}</p>
        <p className="italic mb-6">{origin}</p>
        <p className="w-11/12">{description}</p>
      </div>
      <img src={url} alt="green tea" className="w-48 h-48 m-2 rounded-full" />
    </div>
  );
};

export default TeaDisplay;
