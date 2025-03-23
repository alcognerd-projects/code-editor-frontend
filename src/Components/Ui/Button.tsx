const Button = ({ name, className }: { name: string; className: string }) => {
  return <button className={className}>{name}</button>;
};

export default Button;
