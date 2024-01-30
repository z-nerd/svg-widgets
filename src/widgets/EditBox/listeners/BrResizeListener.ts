import { DragListener } from "../../../event/event"
import { distancePointFromLine } from "../../../math/geometry"
import { TransformedBox, toTransformBox } from "../../../math/matrix"
import { point, roundPoint, subPoint } from "../../../math/point"
import { EditBox } from "../EditBox"

export class BrResizeListener {
    dragListener: DragListener<TransformedBox>
    edListener: EditBox
    constructor(svgElement: SVGRectElement, editBoxListener: EditBox) {
        this.edListener = editBoxListener
        this.dragListener = new DragListener<TransformedBox>(svgElement)

        this.dragListener.onDragStart = (_e, initFn) => {
            this.edListener.isResizeByListener = true
            const { x, y, rotate } = this.edListener.transform
            const initTransformBox = toTransformBox(x, y, this.edListener.width, this.edListener.height, rotate)
            initFn(initTransformBox)
        }

        this.dragListener.onDragMove = (e, iBox) => {
            if (iBox) {
                const currentMouseCoord = this.edListener.mouseCoordInZoomAndPan(e)
                const { x, y, rotate } = this.edListener.transform

                const box = toTransformBox(x, y, this.edListener.width, this.edListener.height, rotate)
                let newWidth = distancePointFromLine(currentMouseCoord, box.tl, box.bl)
                let newHeight = distancePointFromLine(currentMouseCoord, box.tr, box.tl)
                const nBox = toTransformBox(x, y, newWidth, newHeight, rotate)
                
                if (newWidth > 10 && newHeight > 10) {
                    const newPosition = this.fixResizePosition(x, y, iBox, nBox)
                    this.edListener.setAttribute('x', newPosition.x.toString())
                    this.edListener.setAttribute('y', newPosition.y.toString())
                    this.edListener.setAttribute('width', newWidth.toString())
                    this.edListener.setAttribute('height', newHeight.toString())
                    this.edListener.onEditEmit('br-resize', { width: newWidth, height: newHeight, x: newPosition.x, y: newPosition.y })
                }
            }
        }

        this.dragListener.onDragEnd = () => {
            this.edListener.isResizeByListener = false
        }
    }

    fixResizePosition(x: number, y: number, initTransformBox: TransformedBox, newTransformBox: TransformedBox) {
        const dTl = subPoint(newTransformBox.tl, initTransformBox.tl)
        const newPosition = roundPoint(subPoint(point(x, y), dTl))
        return newPosition
    }

    removeListener() {
        this.dragListener.removeEvent()
    }
}
