import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            className="dark:invert rounded-lg"
            src="/logo.png"
            alt="Daily Wisdom logo"
            width={50}
            height={38}
            priority
          />
          <h1 className="text-xl font-bold">Daily Wisdom</h1>
        </div>

        <nav>
          <Link href="/" className="text-gray-300 hover:text-white px-3">
            Home
          </Link>
          <Link
            href="/privacy-policy"
            className="text-gray-300 hover:text-white px-3">
            Política de Privacidade
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
