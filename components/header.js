import Link from 'next/link'
import { logout } from '../utils/auth'

const Header = () => (
  <header>
    <nav>
      <ul className="left">
        <li>
          <Link href="/">
            <a>Amusement Club</a>
          </Link>
        </li>
      </ul>

      <ul>
      <li>
          <Link href="/cards">
            <a>Cards</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>

      </ul>
    </nav>
    <style jsx>{`
      nav {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        max-width: 65rem;
      }

      ul {
        display: flex;
        list-style: none;
        margin-left: auto;
      }

      ul.left {
        display: flex;
        list-style: none;
        margin-left: 0;
        padding-left: 1em;
      }

      li {
        margin-right: 1rem;
      }

      a {
        color: #9f9f9f;
        text-decoration: none;
      }

      a:hover {
        color: #fff;
      }

      header {
        color: #9f9f9f;
        background-color: #222;
        font-size: 20px;
      }
    `}</style>
  </header>
)

export default Header
