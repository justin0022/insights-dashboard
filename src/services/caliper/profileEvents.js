import { PROFILE_EVENTS, TOOL_LAUNCH_EVENT, TOOL_USE_EVENT } from './constants'
import {partition} from '../../utils/array'

export default class ProfileEvents {
  static countEventType (rsp) {
    if (rsp) {
      const { data } = rsp
      const [pass, fail] = partition(data, (event) => event.type === TOOL_LAUNCH_EVENT)
      return {
        data: [
          { x: 1, label: [ TOOL_LAUNCH_EVENT ], y: pass.length },
          { x: 2, label: [ TOOL_USE_EVENT ], y: fail.length }
        ],
        name: PROFILE_EVENTS
      }
    }
    return { [TOOL_LAUNCH_EVENT]: {}, [TOOL_USE_EVENT]: {} }
  }
}
