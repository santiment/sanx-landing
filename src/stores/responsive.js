import { writable } from 'svelte/store'
import { mapWidthToDevice, responsive$ } from 'webkit/responsive'

const checkIsMobile = (device) => device !== 'desktop'

export const IsMobile = writable(checkIsMobile(mapWidthToDevice))
responsive$.subscribe((device) => IsMobile.set(checkIsMobile(device)))
