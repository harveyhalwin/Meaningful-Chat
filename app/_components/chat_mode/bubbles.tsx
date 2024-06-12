import data from "@/app/_mocks/mock_data"

const Bubbles = () => {
  return (
    <div className="grid grid-cols-1 h-fit">
      {data["interaction"].map((interact) => (
        <p
          className={`
          rounded-bl-2xl rounded-br-2xl py-2 px-4 
            ${
              interact.role === "user"
                ? "justify-self-end rounded-tl-2xl bg-sky-100"
                : "justify-self-start rounded-tr-2xl bg-gray-100"
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
