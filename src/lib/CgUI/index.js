import CgPraise from './components/CgPraise'
import CgButton from './components/CgButton'
import CgIcon from './components/CgIcon'
import CgSelect from './components/CgSelect'
import CgInput from './components/CgInput'
import CgEmpty from './components/CgEmpty'
import CgImage from './components/CgImage'
import CgCarousel from './components/CgCarousel'
import CgCarouselItem from './components/CgCarousel/item.vue'
import CgDialog from './components/CgDialog/index.vue'
import CgMask from './components/CgMask/index.vue'

const CgUI = {}

const CgUIPond = [CgButton, CgIcon, CgPraise, CgSelect, CgInput, CgEmpty, CgCarousel, CgCarouselItem, CgImage, CgDialog, CgMask]

// 全局注册主键的地方
CgUI.install = function (vue) {
    for (const component of CgUIPond) {
        vue.component(component.name, component)
    }
}
export default CgUI