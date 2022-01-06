import classNames from 'classnames'
import { atom, useAtom } from 'jotai'
import { useCallback } from 'react'

export type OverlayAtomValue = {
  visible: boolean
  blur?: boolean
  zIndex?: 'z-overlay-full' | 'z-overlay-header'
}

export const overlayAtom = atom<OverlayAtomValue>({
  visible: false,
  blur: true,
  zIndex: 'z-overlay-full',
})

export function Overlay() {
  const [{ visible, blur, zIndex }, setOverlay] = useAtom(overlayAtom)

  const onClick = useCallback(() => {
    setOverlay((prev) => ({ ...prev, visible: false }))
  }, [setOverlay])

  const cn = classNames(
    'fixed w-full h-full inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity pointer-events-none cursor-pointer',
    zIndex,
    {
      'opacity-100 pointer-events-auto': visible,
      'backdrop-blur-sm': blur,
    }
  )

  return (
    <div
      role="button"
      aria-label="Overlay"
      tabIndex={0}
      className={cn}
      onClick={onClick}
    />
  )
}
