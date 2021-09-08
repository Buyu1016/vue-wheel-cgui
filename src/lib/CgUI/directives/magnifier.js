import Vue from 'vue'

// TODO 此处还有一个bug为当鼠标移出内容区域时无法正常隐藏放大镜

const magnifier = Vue.directive('magnifier', {
    bind(el) {
        const oImage = el.children[0]
        const oMag = el.children[1]
        const oMagImage = oMag.children[0]
        el.addEventListener('mouseenter', elMouseEnter, false)
        el.addEventListener('mouseleave', elMouseLeave, false)

        function documentMouseMove(e) {
            const elRect = el.getBoundingClientRect()
            const x = e.clientX - parseInt(elRect['left']) - oMag.getBoundingClientRect()['width'] / 2
            const y = e.clientY - parseInt(elRect['top']) - oMag.getBoundingClientRect()['height'] / 2
            if (e.clientX < elRect['left'] || e.clientX > elRect['left'] + elRect['width']) {
                elMouseLeave()
                return
            }
            if (e.clientY < elRect['top'] || e.clientY > elRect['top'] + elRect['height']) {
                elMouseLeave()
                return
            }
            oMag.style.left = x + 'px'
            oMag.style.top = y + 'px'
            oMagImage.style.left = -x + 'px'
            oMagImage.style.top = -y + 'px'
        }
        
        function elMouseEnter() {
            oMag.style.display = 'inline-block'
            document.addEventListener('mousemove', documentMouseMove, false)
        }

        function elMouseLeave() {
            oMag.style.display = 'none'
            document.removeEventListener('mousemove', documentMouseMove, false)
        }
    }
})

export default magnifier
