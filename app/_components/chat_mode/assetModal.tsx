import { Dispatch, SetStateAction } from "react"

interface Props {
  url: string | undefined
  showAssetModal: Dispatch<SetStateAction<boolean>>
}

const AssetModal = ({ url, showAssetModal }: Props) => {
  return (
    <div
      className="flex items-center justify-center z-10 bg-slate-50 w-screen h-screen absolute top-0 left-0"
      onClick={() => showAssetModal(false)}
    >
      <img
        src={url}
        className="aspect-auto max-h-[600px] max-w-md rounded-2xl"
      />
    </div>
  )
}

export default AssetModal
