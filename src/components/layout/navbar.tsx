import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between w-full p-3 text-gray-800 shadow px-8">
      <Link href="/" className="hover:opacity-90 text-xl font-bold h-fit">SimplerDictionary</Link>
      <div className="flex items-center text-sm gap-2">
      <Link href="/about" className="hover:opacity-80">About</Link>
      <Link href="/contact" className="hover:opacity-80">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
