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
          <Link href="/api/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
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
        margin-right: auto;
        margin-left: 0;
      }

      li {
        margin-right: 1rem;
      }

      li:first-child {
        margin-left: auto;
      }

      a {
        color: #fff;
        text-decoration: none;
      }

      header {
        padding: 0.2rem;
        color: #fff;
        background-color: #333;
      }
    `}</style>
  </header>
)

export default Header
