import './styles.css'
import IMAGE from './react.png'
import LOGO from './logo.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>
        Edited Text Hello React typeScript Webpack starter Template -{' '}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="React logo" width="300" height="200" />
      <img src={LOGO} alt="React SVG" width="300" />
      <ClickCounter />
    </>
  )
}
