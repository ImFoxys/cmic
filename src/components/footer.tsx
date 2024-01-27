import { onMobile } from '../scripts/home.tsx';

export default function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li className='title'>CMIC</li>
        </ul>
        <ul>
          <li className='device'>
            {
              onMobile() ?
              <i className='fa-solid fa-mobile-screen-button'/>
              :
              <i className='fa-solid fa-desktop'/>
            }
          </li>
        </ul>

        <ul>
          <li className='copyright'>&copy; CMIC</li>
        </ul>
      </footer>
    </>
  )
}
