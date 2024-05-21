import { BASE_SVG_ATTRIBUTES, BaseSvg, htmlRoot } from "../../_helper"
import htmlText from "./Row.html?raw"
import cssText from "./Row.scss?inline"

const template = document.createElement("template")
template.innerHTML = `<style>${cssText}</style>${htmlText}`

export interface RowLoadedEvent {
  loaded: Boolean
}

export interface RowTextItem {
  type?: "text"
  width?: string
  text: string
  horizontalAlign?: "start" | "center" | "end"
  verticalAlign?: "start" | "center" | "end"
  gap?: string
}

export interface RowIconItem {
  type?: "icon"
  width?: string
  horizontalAlign?: "start" | "center" | "end"
  verticalAlign?: "start" | "center" | "end"
  gap?: string
  icons: {
    str: string
  }[]
}

export type RowItem = RowTextItem | RowIconItem

const TAG_CustomTableHeader = `g-row`
const ATTRIBUTES = [] as const
export class Row extends BaseSvg {
  static get observedAttributes() {
    return [...BASE_SVG_ATTRIBUTES, ...ATTRIBUTES]
  }
  loadEvent: CustomEvent<RowLoadedEvent>
  containerRef: SVGForeignObjectElement
  headerRef: HTMLDivElement

  #items: RowItem[] = [
    {
      text: "عملیات",
    },
    {
      text: "ورژن",
    },
    {
      text: "نام",
    },
    {
      text: "کد",
    },
  ]
  constructor() {
    super({ template, width: 200, height: 200 })
    this.setAttribute("is", TAG_CustomTableHeader)
    this.containerRef = this.shadowRoot!.querySelector("#container")!
    this.headerRef = this.shadowRoot!.querySelector(".header")!
    this.loadEvent = new CustomEvent<RowLoadedEvent>("widget-loaded", {
      detail: { loaded: false },
    })
    this.rander()
  }

  public get items() {
    return this.#items
  }
  public set items(item: RowItem[]) {
    this.#items = item
    setTimeout(() => this.rander(), 0)
  }

  mount() {
    this.loadEvent.detail.loaded = true
    this.dispatchEvent(this.loadEvent)
  }
  unmount() {}
  attributeUpdate(
    attributeName: (typeof ATTRIBUTES)[number],
    oldValue: string,
    newValue: string,
  ) {
    switch (
      attributeName
      // case "value":
      //   this.valueUpdate(oldValue, newValue)
      //   break
    ) {
    }
  }

  rander() {
    this.headerRef.replaceChildren()
    this.headerMaker(this.#items).forEach((item) => {
      this.headerRef.append(htmlRoot`${item}`)
    })
  }

  headerMaker(customTableHeaderItems: RowItem[]): string[] {
    return customTableHeaderItems.map((item) => {
      item.type ??= "text"
      item.horizontalAlign ??= "center"
      item.verticalAlign ??= "center"
      item.width ??= "100px"
      item.gap ??= "0px"

      switch (item.type) {
        case "text": {
          return `<div class="item" 
                  style="width: ${item.width};
                  justify-content: ${item.horizontalAlign}; 
                  align-items: ${item.verticalAlign}">${item.text}</div>`
        }
        case "icon": {
          return `<div class="item item--icon" 
                  style="width: ${item.width};
                  justify-content: ${item.horizontalAlign}; 
                  align-items: ${item.verticalAlign};
                  gap: ${item.gap};">
${item.icons
  .map((icon) => {
    return icon.str
  })
  .join("")}
</div>`
        }
      }
    })
  }

  heightChange(oldHeight: number, newHeight: number): void {
    this.containerRef.setAttribute("height", newHeight.toString())
  }
  widthChange(oldWidth: number, newWidth: number): void {
    this.containerRef.setAttribute("width", newWidth.toString())
  }

  // @ts-ignore: Unreachable code error
  addEventListener<K extends keyof CustomElementEventMap>(
    type: K,
    listener: (this: HTMLDivElement, ev: CustomElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void
  // @ts-ignore: Unreachable code error
  removeEventListener<K extends keyof CustomElementEventMap>(
    type: K,
    listener: (this: HTMLDivElement, ev: CustomElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void
}

interface CustomElementEventMap extends HTMLElementEventMap {
  "widget-loaded": { detail: RowLoadedEvent }
}

customElements.define(TAG_CustomTableHeader, Row, {
  extends: "div",
})