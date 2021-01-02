import './center.css'

export default class CenterControl {
  insertControl () {
    this.container = document.createElement('div')
    this.container.classList.add('mapboxgl-ctrl')
    this.container.classList.add('mapboxgl-ctrl-center')
  }

  onAdd (map) {
    this.map = map
    this.insertControl()
    return this.container
  }

  onRemove () {
    this.container.parentNode.removeChild(this.container)
    this.map = undefined
  }
}
