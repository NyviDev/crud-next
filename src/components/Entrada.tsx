interface EntradaProps {
  texto: string;
  tipo: "text" | "number";
  valor: any;
  somenteLeitura?: boolean;
  valorMudou?: (valor: any) => void
}
export default function Entrada({
  texto,
  tipo,
  valor,
  somenteLeitura,
  valorMudou,
}: EntradaProps) {
  return (
    <div className={`flex flex-col`}>
      <label className="mb-2">{texto}</label>
      <input
      onChange={(e) => valorMudou?.(e.target.value)}
        className={`
      border border-purple-500 rounded-lg 
      focus:outline-none ${!somenteLeitura && 'focus:bg-gray-100'} bg-gray-50
      px-4 py-2
      `}
        type={tipo}
        value={valor}
        readOnly={somenteLeitura}
      />
    </div>
  );
}
