import type { PlasmoContentScript, PlasmoGetMountPoint } from "plasmo"
import { useMemo, useRef } from "react"
import usePictureInPicture, { ExtendedHTMLVideoElement } from "react-use-pip"

export const config: PlasmoContentScript = {
  matches: ["https://www.twitch.tv/*", "https://twitch.tv/*"],
}

export const getMountPoint: PlasmoGetMountPoint = async () => document.querySelector<HTMLElement>(".video-ref")

const PlasmoTwitchPiper = () => {
  const videoRef = useRef(document.querySelector<ExtendedHTMLVideoElement>("video"))
  const {
    isPictureInPictureActive,
    isPictureInPictureAvailable,
    togglePictureInPicture,
  } = usePictureInPicture(videoRef);

  return (
    isPictureInPictureAvailable &&
      <button
        style={{ width: 48, height: 48, background: 'none', border: 'none' }} 
        onClick={() => togglePictureInPicture(!isPictureInPictureActive)}>
        <img style={{ width: 48, height: 48 }} src={chrome.runtime.getURL('pip.png')}></img>
      </button>
  )
}

export default PlasmoTwitchPiper