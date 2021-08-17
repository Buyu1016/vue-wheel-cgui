import CgPraise from './components/CgPraise'
import CgButton from './components/CgButton'
import CgIcon from './components/CgIcon'

const CgUI = {}

const CgUIPond = [CgButton, CgIcon, CgPraise]

// 全局注册主键的地方
CgUI.install = function (vue) {
    for (const component of CgUIPond) {
        vue.component(component.name, component)
    }
}
export default CgUI