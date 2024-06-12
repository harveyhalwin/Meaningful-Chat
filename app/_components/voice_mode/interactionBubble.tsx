import { Dispatch, SetStateAction } from "react"
import { RiChatSmile2Line, RiCloseLine, RiSendPlaneLine } from "react-icons/ri"

interface Props {
  setChatMode: Dispatch<SetStateAction<boolean>>
}

const InteractionBubble = ({ setChatMode }: Props) => {
  return (
    <div className="flex items-center justify-center gap-8">
      <button className="rounded-full bg-emerald-500 height-6 size-10 drop-shadow-md">
        <div className="flex items-center justify-center">
          <RiSendPlaneLine className="text-white" />
        </div>
      </button>
      <button
        className="rounded-full bg-slate-500 height-6 size-10 drop-shadow-md"
        onClick={() => setChatMode(true)}
      >
        <div className="flex items-center justify-center">
          <RiChatSmile2Line className="text-white" />
        </div>
      </button>
      <button className="rounded-full bg-red-500 height-6 size-10 drop-shadow-md">
        <div className="flex items-center justify-center">
          <RiCloseLine className="text-white" />
        </div>
      </button>
    </div>
  )
}

export default InteractionBubble
