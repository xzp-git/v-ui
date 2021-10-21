// 这里放置的主要是组件的props 及一些 公告的方法
import type {ExtractPropTypes} from 'vue'


export const iconProps = {
  size:{
    type:Number
  },
  color:{
    type:String
  }
}
export type iconProps = ExtractPropTypes<typeof iconProps>


