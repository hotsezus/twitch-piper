import type { PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo"
import { useRef } from "react"
import usePictureInPicture, { ExtendedHTMLVideoElement } from "react-use-pip"

export const config: PlasmoCSConfig = {
  matches: ["https://www.twitch.tv/*", "https://twitch.tv/*"]
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () => document.querySelector<HTMLElement>("video")

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
      onClick={() => togglePictureInPicture(!isPictureInPictureActive)}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        width: "var(--button-size-default)",
        height: "var(--button-size-default)"
      }}
      >
        <svg preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" fill="none" style={{color: "var(--color-text-button-overlay)"}}>
          <path fillRule="evenodd" clipRule="evenodd" d="M38.5355 3.46447C39.4732 4.40215 40 5.67392 40 7V14.75C40 15.413 39.7366 16.0489 39.2678 16.5178C38.7989 16.9866 38.163 17.25 37.5 17.25C36.837 17.25 36.2011 16.9866 35.7322 16.5178C35.2634 16.0489 35 15.413 35 14.75V7H5V32H13.75C14.413 32 15.0489 32.2634 15.5178 32.7322C15.9866 33.2011 16.25 33.837 16.25 34.5C16.25 35.163 15.9866 35.7989 15.5178 36.2678C15.0489 36.7366 14.413 37 13.75 37H5C3.67392 37 2.40215 36.4732 1.46447 35.5355C0.526786 34.5979 0 33.3261 0 32V7C0 5.67392 0.526786 4.40215 1.46447 3.46447C2.40215 2.52678 3.67392 2 5 2H35C36.3261 2 37.5979 2.52678 38.5355 3.46447ZM40 23C40 21.6739 39.4732 20.4021 38.5355 19.4645C37.5979 18.5268 36.3261 18 35 18H22.1115C21.0341 18 19.9925 18.3478 19.1368 18.9811C18.9394 19.1273 18.7518 19.2887 18.576 19.4645C18.4077 19.6328 18.2526 19.8118 18.1115 20C17.4662 20.8604 17.1115 21.9119 17.1115 23V32C17.1115 33.3261 17.6383 34.5979 18.576 35.5355C19.5137 36.4732 20.7854 37 22.1115 37H35C36.3261 37 37.5979 36.4732 38.5355 35.5355C39.4732 34.5979 40 33.3261 40 32V23ZM35 23V32H22.1115V23H35Z" fill="white"/>
        </svg>
    </button>
  )
}

export default PlasmoTwitchPiper