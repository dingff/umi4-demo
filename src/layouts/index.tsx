import './index.scss'
import moment from 'moment';
import 'moment/locale/zh-cn'

moment.locale('zh-cn');
export default function Layout(props: any) {
  return props.children
}