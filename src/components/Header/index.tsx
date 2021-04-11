import Link from 'next/link';
import styles from './header.module.scss';

function Header(): JSX.Element {
  return (
    <header className={styles.postHeader}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="logo" className={styles.logo} />
        </a>
      </Link>
    </header>
  );
}

export default Header;
