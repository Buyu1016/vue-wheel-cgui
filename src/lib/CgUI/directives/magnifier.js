import Vue from 'vue'
import { getStyle } from '../utils/index'

const magnifier = Vue.directive('magnifier', {
    bind(el) {
        const oMag = el.children[1]
        const oMagImage = oMag.children[0]
        el.addEventListener('mouseover', (e) => {
            oMag.style.display = 'inline-block'
            document.addEventListener('mousemove', documentMouseMove)
        }, false)
        el.addEventListener('mouseout', (e) => {
            oMag.style.display = 'none'
            document.removeEventListener('mousemove', documentMouseMove)
        }, false)

        function documentMouseMove(e) {
            // const x = e.clientX - getStyle(oMag, 'width')
            // const y = e.clientY - getStyle(oMag, 'height')
            // console.log(x, y)
            // oMag.style.left = x + 'px'
            // oMag.style.top = y + 'px'
            // console.log('e', e.clientX, e.clientY)
        }
    }
})

export default magnifier
