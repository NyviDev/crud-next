import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import useClientes from "@/hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,
    adicionarCliente,
    clienteExcluido,
    clienteSelecionado,
    salvarCliente,
    exibirTabela,
    tabelaVisivel,
  } = useClientes();

  return (
    <div
      className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={adicionarCliente} className="mb-4" cor="green">
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            clienteMudou={salvarCliente}
            cliente={cliente}
            cancelado={() => exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}
