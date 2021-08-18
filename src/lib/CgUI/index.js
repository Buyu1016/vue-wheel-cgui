import CgPraise from './components/CgPraise'
import CgButton from './components/CgButton'
import CgIcon from './components/CgIcon'
import CgSearchSelect from './components/CgSearchSelect'
import CgInput from './components/CgInput'
import CgEmpty from './components/CgEmpty'

const CgUI = {}

const CgUIPond = [CgButton, CgIcon, CgPraise, CgSearchSelect, CgInput, CgEmpty]

// 全局注册主键的地方
CgUI.install = function (vue) {
    for (const component of CgUIPond) {
        vue.component(component.name, component)
    }
}
export default CgUI