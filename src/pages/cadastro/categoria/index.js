import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handlerMudancas(infosDoEvento) {
    setValor(
      infosDoEvento.target.getAttribute("name"),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

      <form
        onSubmit={function handleSubmit(infoDoEvento) {
          infoDoEvento.preventDefault();
          setCategorias([...categorias, valores]);

          setValores({ valoresIniciais });
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handlerMudancas}
        />

        <FormField
          label="Descrição"
          type="textfield"
          name="descricao"
          value={valores.descricao}
          onChange={handlerMudancas}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handlerMudancas}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria.nome}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Voltar para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
