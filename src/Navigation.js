const SELECTOR = '[nav-selectable]';
const SELECTOR_SELECTED = '[nav-selected=true]'
const SELECTED = 'nav-selected';
const INDEX = 'nav-index';

class Navigation {
  onBegin() {
    const firstElement = this.allElements[0]

    if (firstElement) {
      firstElement.setAttribute(SELECTED, 'true')
      firstElement.setAttribute(INDEX, '0')
      firstElement.focus()
    }
  }

  selectElement(selectElement) {
    this.allElements.forEach((element, index) => {
      const selectThisElement = element === selectElement;
      element.setAttribute(SELECTED, String(selectThisElement));
      element.setAttribute(INDEX, String(index));
  
      if (element.nodeName === 'INPUT') {
        selectThisElement ? element.focus() : element.blur();
      }

      const { top } = element.getBoundingClientRect()
      const main = document.querySelector('main')

      if (main && selectThisElement) {
        main.scrollBy({
          behavior: 'smooth',
          left: 0,
          top: top - 45
        })
      }

    });
  }

  down() {
    const allElements = this.allElements
    const currentIndex = this.currentIndex
    const goToFirst = currentIndex + 1 > allElements.length - 1
    const setIndex = goToFirst ? 0 : currentIndex + 1

    this.selectElement(allElements[setIndex] || allElements[0])
  }

  up() {
    const allElements = this.allElements
    const currentIndex = this.currentIndex
    const goToLast = currentIndex === 0
    const setIndex = goToLast ? allElements.length - 1 : currentIndex - 1

    this.selectElement(allElements[setIndex] || allElements[0])
  }

  get allElements() {
    return Array.from(document.querySelectorAll(SELECTOR))
  }

  get currentIndex() {
    const element = document.querySelector(SELECTOR_SELECTED);
    return element ? parseInt(element.getAttribute(INDEX), 10) : 0
  }
}

export default new Navigation()