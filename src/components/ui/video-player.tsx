'use client'

import { useRef, useState } from 'react'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface VideoPlayerProps extends ComponentProps<'div'> {
  src: string
  className?: string
  classVideo?: string
}

const VideoPlayer = ({
  src,
  className,
  classVideo,
  ...props
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={twMerge('relative rounded-lg', className)} {...props}>
      {/* Vídeo */}
      <video
        controls
        ref={videoRef}
        className={twMerge('w-full rounded-lg', classVideo)}
        src={src || ''}
        onClick={handlePlay} // Permite clicar no vídeo para iniciar
        onKeyUp={handlePlay}
        tabIndex={0} // Make the video element focusable
      >
        <track
          kind="captions"
          srcLang="en"
          src="/videos/meu-video-captions.vtt"
          label="English captions"
        />
      </video>

      <button
        type="button"
        onClick={handlePlay}
        className={twMerge(
          'group absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-transparent cursor-pointer hover:bg-gradient-to-b hover:from-black/50 hover:to-transparent h-[calc(100%-80px)] transition-all duration-300 z-10',
          isPlaying ? '' : 'bg-gradient-to-b from-black/50 to-transparent'
        )}
      >
        <div
          className={twMerge(
            'mt-[88px] w-25 h-25  bg-opacity-50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gray-900',
            isPlaying
              ? 'hidden group-hover:flex opacity-50'
              : 'flex bg-gray-950'
          )}
        >
          {!isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-13 h-13 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-13 h-13 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
            </svg>
          )}
        </div>
      </button>
    </div>
  )
}

export default VideoPlayer
