import { faker_data } from "@/app/_mocks/mock_data"
import AssetModal from "./assetModal"
import { useState } from "react"

const Bubbles = () => {
  const [assetUrl, setAssetUrl] = useState("")
  const [showAssetModal, setShowAssetModal] = useState(false)

  // TODO: Only for testing on local with mock data
  const chat = faker_data

  return (
    <div className="grid grid-cols-1 h-fit gap-2">
      {chat["interaction"].map((interact) =>
        interact.role !== "asset" ? (
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
        ) : (
          <>
            <img
              src={interact?.url}
              className="aspect-auto max-h-[200px] max-w-md rounded-bl-2xl rounded-br-2xl rounded-tr-2xl"
              onClick={() => {
                setAssetUrl(interact?.url || "")
                setShowAssetModal(true)
              }}
            />
            {showAssetModal && (
              <AssetModal url={assetUrl} showAssetModal={setShowAssetModal} />
            )}
          </>
        )
      )}
    </div>
  )
}

export default Bubbles
