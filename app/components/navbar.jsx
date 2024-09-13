import Image from "next/image";
import Link from "next/link";
const menu = [
  {
    label: "Home",
    href: "/",
    button: false,
  },
  {
    label: "Projects",
    href: "/project",
    button: false,
  },
  {
    label: "Resume",
    href: "/resume",
    button: false,
  },
  {
    label: "Constact me",
    href: "/contact",
    button: true,
  },
];

const Navbar = () => {
  return (
    <div className="w-full border flex justify-center sticky top-0 left-0 z-50 bg-white">
      <div className="w-10/12 flex justify-between items-center shadow-sm sticky top-0 left-0">
        <Link href="/" className="text-2xl font-bold">
          <div className="flex justify-center items-center">
            <Image src="/mzj.png" alt="brand-logo" width={80} height={80} />
            Zeya Imran
          </div>
        </Link>
        <div>
          {menu.map((item, i) => (
            <Link
              href={item.href}
              key={i}
              className={
                item.button
                  ? "bg-blue-600 px-4 py-2 text-white rounded-lg"
                  : "mr-16"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
