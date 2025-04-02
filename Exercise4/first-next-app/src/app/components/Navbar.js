import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/bitcoinRates">Bitcoin Rates</Link></li>
      </ul>
      </nav>
  );
}