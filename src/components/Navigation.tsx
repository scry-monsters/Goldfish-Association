import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-orange-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Goldfish Association
        </Link>
        <div className="space-x-6">
          <Link href="/teachings" className="hover:text-orange-200">
            Teachings
          </Link>
          <Link href="/practices" className="hover:text-orange-200">
            Practices
          </Link>
          <Link href="/events" className="hover:text-orange-200">
            Events
          </Link>
          <Link href="/contact" className="hover:text-orange-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}