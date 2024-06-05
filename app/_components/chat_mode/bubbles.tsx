import data from "@/app/_mocks/mock_data"

const Bubbles = () => {
  return (
    <div className="grid grid-cols-1 h-fit">
      {data["interaction"].map((interact) => (
        <p
          className={`
          bg-gray-100 py-2 px-4 
            ${
              interact.type === "prompt"
                ? "justify-self-end rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
                : "justify-self-start rounded-bl-2xl rounded-br-2xl rounded-tr-2xl"
            }
          `}
        >
          {interact?.text}
        </p>
      ))}
    </div>
  )
}

export default Bubbles
