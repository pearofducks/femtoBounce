export default function (func, wait = 200, immediate) {
  let timeout
  return function () {
    var later = () => {
      timeout = null
      if (!immediate) func.apply(this, arguments)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(this, arguments)
  }
}
