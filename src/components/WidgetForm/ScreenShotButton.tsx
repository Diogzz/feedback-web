import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenShotButtonProps {
  screenshot: string | null,
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenShotButton({screenshot, onScreenshotTook}: ScreenShotButtonProps) {
  const [isTakingScreenShot, setIsTakeScreenShot] = useState(false);

  async function handleTakeScreenShot() {
    setIsTakeScreenShot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTook(base64image);
    setIsTakeScreenShot(false);
  }

  if(screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 hover:transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill"></Trash>
      </button>
    )
  }
  return (
    <>
      <button 
        type="button" 
        onClick={handleTakeScreenShot}
        className="p-2 gap-2 rounded-md hover:bg-zinc-700 transition-colors text-zinc-100
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      >
        {isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6" /> }
      </button>
    </>
  )
}