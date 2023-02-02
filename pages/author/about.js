import Link from 'next/link';

export default function AboutMe() {
  return (
    <>
      <h1>
        My name is{' '}
        <span style={{ color: 'green', fontWeight: 'bold' }}>
          Oluwatimilehin
        </span>
      </h1>

      <Link href="/">Go Home</Link>
    </>
  );
}
