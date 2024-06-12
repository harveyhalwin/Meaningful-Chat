import BrandBubble from "@/app/_components/voice_mode/brandBubble"
import InteractionBubble from "@/app/_components/voice_mode/interactionBubble"
import { Dispatch, SetStateAction } from "react"

interface Props {
  setChatMode: Dispatch<SetStateAction<boolean>>
}

const VoiceMode = ({ setChatMode }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-10">
      <BrandBubble />
      <InteractionBubble setChatMode={setChatMode} />
    </div>
  )
}

export default VoiceMode
