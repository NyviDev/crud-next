interface BotaoProps {
  children: any;
  cor?: "gray" | "green" | "blue";
  className?: string;
  onClick?: () => void;
}

export default function Botao({
  children,
  cor = "gray",
  className,
  onClick,
}: BotaoProps) {
  return (
    <button
      onClick={onClick}
      className={`
  bg-gradient-to-r from-${cor}-400 to-${cor}-700
  text-white px-4 py-2 rounded-md
  ${className}
  `}
    >
      {children}
    </button>
  );
}
