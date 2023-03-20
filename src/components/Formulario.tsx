import Cliente from "@/core/Cliente";
import Entrada from "./Entrada";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Formulario({
  cliente,
  cancelado,
  clienteMudou,
}: FormularioProps) {
  const id = cliente?.id;
  const [nome, setNome] = useState(cliente.nome ?? "");
  const [idade, setIdade] = useState(cliente.idade ?? 0);
  return (
    <div className="flex flex-col gap-4">
      {id && <Entrada texto="Código" tipo="text" valor={id} somenteLeitura />}
      <Entrada texto="Nome" tipo="text" valor={nome} valorMudou={setNome} />
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      />

      <div className=" flex justify-end mt-3">
        <Botao
          onClick={() => clienteMudou?.(new Cliente(nome, +idade, id))}
          cor="blue"
          className="mr-2"
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
}
