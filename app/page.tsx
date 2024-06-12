"use client"
import { useState } from "react"
import ChatMode from "@/app/_components/chat_mode/chatMode"
import VoiceMode from "@/app/_components/voice_mode/voiceMode"

export default function Home() {
  const [isChatMode, setChatMode] = useState(true)

  return (
    <main className="grid grid-cols-1 grid-rows-[24px,auto,30px] min-h-[96vh] mx-auto max-w-screen-xl mt-4 gap-5">
      {isChatMode ? (
        <ChatMode setChatMode={setChatMode} />
      ) : (
        <VoiceMode setChatMode={setChatMode} />
      )}
    </main>
  )
}
