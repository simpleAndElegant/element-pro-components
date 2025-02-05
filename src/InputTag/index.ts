import { withInstall, modelValueEmit } from '../utils/index'
import InputTag from './InputTag'
import props from './props'
import type { IDefineProps, IDefineEmits } from '../types/index'

export const ProInputTag = withInstall(InputTag)
export type IInputTagProps = IDefineProps<typeof props>
export type IInputTagEmits = IDefineEmits<typeof modelValueEmit>
