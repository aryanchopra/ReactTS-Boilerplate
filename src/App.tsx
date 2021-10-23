import React from "react";

type Person = {
  name: string;
  age: number;
};

export default function App() {
  let Aryan: Person = {
    age: 22,
    name: "Aryan22",
  };
  return <h1 className="font-bold text-8xl text-red-400">{Aryan.name}</h1>;
}
