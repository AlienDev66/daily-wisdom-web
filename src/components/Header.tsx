import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Daily Wisdom</h1>
        <nav>
          <Link href="/">
            <a className="text-gray-300 hover:text-white px-3">Home</a>
          </Link>
          <Link href="/privacy-policy">
            <a className="text-gray-300 hover:text-white px-3">
              Política de Privacidade
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
