import TeaDisplay from "./components/TeaDisplay";
const teas = [
  {
    name: "Green Tea",
    origin: "China",
    description:
      "It is known for its fresh, grassy flavor and high antioxidant content.",
    url: "src/assets/green.jpeg",
    className:
      "flex justify-around mx-2 my-4 px-2 py-4 md:w-1/2 md:mx-auto bg-cyan-500 shadow-lg shadow-cyan-500/50",
  },
  {
    name: "Oolong Tea",
    origin: "China",
    description:
      "It is known for its complex taste, which can range from sweet and fruity to woody and roasted",
    url: "src/assets/oolong.jpeg",
    className:
      "flex justify-around mx-2 my-4 px-2 py-4 md:w-1/2 md:mx-auto bg-cyan-500 shadow-lg shadow-cyan-500/50",
  },
  {
    name: "Black Tea",
    origin: "China",
    description:
      "It is made from the leaves of the Camellia sinensis plant and is known for its robust and bold taste.",
    url: "src/assets/black.jpeg",
    className:
      "flex justify-around mx-2 my-4 px-2 py-4 md:w-1/2 md:mx-auto bg-cyan-500 shadow-lg shadow-cyan-500/50",
  },
  {
    name: "Yellow Tea",
    origin: "China",
    description:
      "It is known for its smooth, mellow flavor and is relatively rare and expensive.",
    url: "src/assets/yellow.jpeg",
    className:
      "flex justify-around mx-2 my-4 px-2 py-4 md:w-1/2 md:mx-auto bg-cyan-500 shadow-lg shadow-cyan-500/50",
  },
  {
    name: "White Tea",
    origin: "China",
    description:
      "It undergoes minimal processing.The name comes from the fine white hairs on the unopened buds.",
    url: "src/assets/white.jpeg",
    className:
      "flex justify-around mx-2 my-4 px-2 py-4 md:w-1/2 md:mx-auto bg-cyan-500 shadow-lg shadow-cyan-500/50",
  },
];
const App = () => {
  return (
    <div>
      {teas.map((tea) => (
        <TeaDisplay
          name={tea.name}
          origin={tea.origin}
          description={tea.description}
          url={tea.url}
          className={tea.className}
        ></TeaDisplay>
      ))}
      {/* <TeaDisplay
        className={
          "flex justify-around mx-2 my-4 px-2 py-4 md:w-1/2 md:mx-auto bg-cyan-500 shadow-lg shadow-cyan-500/50"
        }
        name="Green Tea"
        origin="China"
        description="It is known for its fresh, grassy flavor and high antioxidant content."
        url="src\assets\green.jpeg"
      ></TeaDisplay>
      <TeaDisplay
        className={
          "flex justify-around mx-2 my-4 px-2 py-4 md:w-1/2 md:mx-auto bg-cyan-500 shadow-lg shadow-cyan-500/50"
        }
        name="Oolong Tea"
        origin="China"
        description="It is known for its complex taste, which can range from sweet and fruity to woody and roasted"
        url="src\assets\oolong.jpeg"
      ></TeaDisplay>
      <TeaDisplay
        className={
          "flex justify-around mx-2 my-4 px-2 py-4 md:w-1/2 md:mx-auto bg-cyan-500 shadow-lg shadow-cyan-500/50"
        }
        name="Black Tea"
        origin="China"
        description=" It is made from the leaves of the Camellia sinensis plant and is known for its robust and bold taste."
        url="src\assets\black.jpeg"
      ></TeaDisplay>
      <TeaDisplay
        className={
          "flex justify-around mx-2 my-4 px-2 py-4 md:w-1/2 md:mx-auto bg-cyan-500 shadow-lg shadow-cyan-500/50"
        }
        name="Yellow Tea"
        origin="China"
        description=" It is known for its smooth, mellow flavor and is relatively rare and expensive."
        url="src\assets\yellow.jpeg"
      ></TeaDisplay>
      <TeaDisplay
        className={
          "flex justify-around mx-2 my-4 px-2 py-4 md:w-1/2 md:mx-auto bg-cyan-500 shadow-lg shadow-cyan-500/50"
        }
        name="White Tea"
        origin="China"
        description="It undergoes minimal processing.The name comes from the fine white hairs on the unopened buds."
        url="src\assets\white.jpeg"
      ></TeaDisplay> */}
    </div>
  );
};

export default App;
