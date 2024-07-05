"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Pokedex from "./components/Pokedex";
import styles from '../styles/Geral.module.css';
import { useState } from "react";
import { isBot } from "next/dist/server/web/spec-extension/user-agent";


const pokemons = [
  {
    nome: "Bulbasaur",
    descricao: "Bulbasaur pode ser visto cochilando sob a luz do sol. Há uma semente nas suas costas. Ao absorver os raios solares, a semente cresce progressivamente maior. Poderes: Chicotada Vinha, Semente Sanguessuga, e Solar Beam.",
    url: "/images/bulba.png"
  },
  {
    nome: "Squirtle",
    descricao: "Squirtle é uma tartaruga pequena, azul, com uma cauda encaracolada. Ele usa seu casco para proteger seu corpo e para nadar rapidamente, retirando-se para dentro do casco quando está em perigo. Poderes: Jato d'Água, Retirada, e Hidro Bomba.",
    url: "/images/squartle.png"
  },
  {
    nome: "Flareon",
    descricao: "Flareon é a forma evoluída de Eevee quando exposto a uma Pedra de Fogo. Seu corpo pode aquecer a uma temperatura de 900 graus Celsius, expelindo calor por sua pele. Poderes: Lança-Chamas, Rajada de Fogo, e Sobrecalibração.",
    url: "/images/flareon.png"
  },
  {
    nome: "Eevee",
    descricao: "Eevee tem uma composição genética instável que se transforma em diferentes tipos de Pokémon com base no ambiente. Suas evoluções são variadas e amplas. Poderes: Investida, Cauda de Ferro, e Último Recurso.",
    url: "/images/eeve.png"
  },
  {
    nome: "Bulbasaur",
    descricao: "Bulbasaur pode ser visto cochilando sob a luz do sol. Há uma semente nas suas costas. Ao absorver os raios solares, a semente cresce progressivamente maior. Poderes: Chicotada Vinha, Semente Sanguessuga, e Solar Beam.",
    url: "/images/bulba.png"
  },
  {
    nome: "Squirtle",
    descricao: "Squirtle é uma tartaruga pequena, azul, com uma cauda encaracolada. Ele usa seu casco para proteger seu corpo e para nadar rapidamente, retirando-se para dentro do casco quando está em perigo. Poderes: Jato d'Água, Retirada, e Hidro Bomba.",
    url: "/images/squartle.png"
  },
  {
    nome: "Flareon",
    descricao: "Flareon é a forma evoluída de Eevee quando exposto a uma Pedra de Fogo. Seu corpo pode aquecer a uma temperatura de 900 graus Celsius, expelindo calor por sua pele. Poderes: Lança-Chamas, Rajada de Fogo, e Sobrecalibração.",
    url: "/images/flareon.png"
  },
  {
    nome: "Eevee",
    descricao: "Eevee tem uma composição genética instável que se transforma em diferentes tipos de Pokémon com base no ambiente. Suas evoluções são variadas e amplas. Poderes: Investida, Cauda de Ferro, e Último Recurso.",
    url: "/images/eeve.png"
  },
  {
    nome: "Flareon",
    descricao: "Flareon é a forma evoluída de Eevee quando exposto a uma Pedra de Fogo. Seu corpo pode aquecer a uma temperatura de 900 graus Celsius, expelindo calor por sua pele. Poderes: Lança-Chamas, Rajada de Fogo, e Sobrecalibração.",
    url: "/images/flareon.png"
  },
  {
    nome: "Flareon",
    descricao: "Flareon é a forma evoluída de Eevee quando exposto a uma Pedra de Fogo. Seu corpo pode aquecer a uma temperatura de 900 graus Celsius, expelindo calor por sua pele. Poderes: Lança-Chamas, Rajada de Fogo, e Sobrecalibração.",
    url: "/images/flareon.png"
  },
];

export default function Home() {

  const [isVisible, setIsVisible] = useState(false);
  const [pokemonSelected, setPokemonSelected] = useState();

  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Navbar></Navbar>
      {/* <button onClick={toggleDiv}>Toggle Div</button>   */}
      
      <div className={styles.mainContent}>
      
        {
          pokemons.map((pokemon)=>(
            <Card nome={pokemon.nome} descricao={pokemon.descricao.slice(0, 60)+"..."} imagem={pokemon.url} />
          ))
        }
      
        <Pokedex classe={isVisible ? 'visible': 'hidden'} nome="Bulbassaur" descricao="lorem ipsum sit amet"/>
      </div>
    </>
  );

}
