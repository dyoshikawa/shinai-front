import { debugMode } from '~/config/config'

export default function trace(s) {
  if (debugMode) {
    console.log(s)
  }
}
