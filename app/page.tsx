import Bubbles from "@/app/_components/chat_mode/bubbles"
import Branding from "@/app/_components/branding"
import Prompt from "@/app/_components/chat_mode/prompt"

export default function Home() {
  return (
    <main className="grid grid-cols-1 grid-rows-[24px,auto,30px] min-h-[96vh] mx-auto max-w-screen-xl mt-4 gap-5">
      <Branding />
      <Bubbles />
      <Prompt />
    </main>
  )
}
