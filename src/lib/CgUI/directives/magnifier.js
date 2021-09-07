import Vue from 'vue'

// TODO 此处还有一个bug为当鼠标移出内容区域时无法正常隐藏放大镜

const magnifier = Vue.directive('magnifier', {
    bind(el) {
        const oImage = el.children[0]
        const oMag = el.children[1]
        const oMagImage = oMag.children[0]
        el.addEventListener('mouseover', () => {
            oMag.style.display = 'inline-block'
            document.addEventListener('mousemove', documentMouseMove, false)
        }, false)
        el.addEventListener('mouseout', (e) => {
            oMag.style.display = 'none'
            document.removeEventListener('mousemove', documentMouseMove)
        }, false)

        function documentMouseMove(e) {
            const elRect = el.getBoundingClientRect()
            console.log(e.target)
            const x = e.clientX - parseInt(elRect['left']) - oMag.getBoundingClientRect()['width'] / 2
            const y = e.clientY - parseInt(elRect['top']) - oMag.getBoundingClientRect()['height'] / 2
            oMag.style.left = x + 'px'
            oMag.style.top = y + 'px'
            oMagImage.style.left = -x + 'px'
            oMagImage.style.top = -y + 'px'
        }
    }
})

export default magnifier
