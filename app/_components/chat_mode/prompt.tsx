import { Dispatch, SetStateAction } from "react"
import { RiSendPlaneLine, RiMic2Line } from "react-icons/ri"

interface Props {
  setChatMode: Dispatch<SetStateAction<boolean>>
}

const Prompt = ({ setChatMode }: Props) => {
  return (
    <div className="flex self-end w-full relative items-center gap-3">
      <button
        className="size-10 bg-emerald-300 rounded-full"
        onClick={() => setChatMode(false)}
      >
        <div className="flex items-center justify-center">
          <RiMic2Line />
        </div>
      </button>
      <input
        type="text"
        placeholder="Type your prompt here"
        className="bg-gray-100 w-full py-2 px-4 rounded-2xl border-2 border-gray-200"
      />
      <button className="bg-indigo-600 text-gray-200 absolute right-0.5 top-0.5 w-12 h-[90%] rounded-2xl text-center">
        <div className="flex items-center justify-center">
          <RiSendPlaneLine />
        </div>
      </button>
    </div>
  )
}

export default Prompt
