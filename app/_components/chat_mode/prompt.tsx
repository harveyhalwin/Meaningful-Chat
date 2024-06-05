import Image from "next/image"

const Prompt = () => {
  return (
    <div className="self-end w-full relative inline-block">
      <input
        type="text"
        placeholder="Type your prompt here"
        className="bg-gray-100 w-full py-2 px-4 rounded-2xl border-2 border-gray-200"
      />
      <button className="bg-indigo-700 text-gray-200 absolute right-0.5 top-0.5 w-16 h-[90%] rounded-2xl">
        send
      </button>
    </div>
  )
}

export default Prompt
