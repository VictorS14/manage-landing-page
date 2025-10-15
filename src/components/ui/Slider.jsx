export const Slider = ({ ...props }) => {
  return (
    <div className={props.className}>
      <img
        src={props.avatar}
        alt="Ali avatar"
        className="w-16 absolute top-0 transform -translate-y-1/2 rounded-full"
      />
      <h3 className="text-blue-950 font-bold">{props.name}</h3>
      <p className="text-center text-gray-500 px-4">
        {props.text}
      </p>
    </div>
  );
};
