import './styles/index.scss'
import './styles/index.docs.scss'

export { default as Button } from './Button'

type EventTarget = React.MouseEvent & {
  target: HTMLButtonElement
}

const onClick = (e: EventTarget) => {
  console.log(e.currentTarget.className)
  e.target.classList
}

document.addEventListener<'click'>(
  'click',
  function(event: MouseEvent) {
    const button = <HTMLButtonElement>event.target
    if (button.className.includes('cf-btn')) {
      console.log(button.className)
      button.before('哈哈哈')
    }
  },
  false
)
