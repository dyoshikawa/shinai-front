import { debugMode } from '~/config/config'

export default function trace(s) {
  if (debugMode && this.console && typeof trace != 'undefined') {
    trace(s)
  }
}
