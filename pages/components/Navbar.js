import Link from "next/link";
import { Nav } from "../../styles/NavbarStyles";
function Navbar() {
  return (
    <>
      <Nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </Nav>
    </>
  );
}

export default Navbar;
