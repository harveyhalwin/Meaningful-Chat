import Bubbles from "@/app/_components/chat_mode/bubbles"
import Branding from "@/app/_components/branding"
import Prompt from "@/app/_components/chat_mode/prompt"
import { Dispatch, SetStateAction } from "react"

interface Props {
  setChatMode: Dispatch<SetStateAction<boolean>>
}

const ChatMode = ({ setChatMode }: Props) => {
  return (
    <>
      <Branding />
      <Bubbles />
      <Prompt setChatMode={setChatMode} />
    </>
  )
}

export default ChatMode
