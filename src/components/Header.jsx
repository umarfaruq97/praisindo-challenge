import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full fixed p-6 bg-slate-400 shadow-sm flex items-center">
      <div className="flex items-center justify-between">
        <div className="w-8 h-8 rounded-full bg-green-200"></div>
        <div className="flex items-center space-x-3">
          <p className="text-black p-2 font-semibold text-base">
            <Link to="/">Blogs</Link>
          </p>
          <p className="text-black p-2 font-semibold text-base">
            <Link to="/contact">Contact</Link>
          </p>
          <p className="text-black p-2 font-semibold text-base">
            <Link to="/about">About</Link>
          </p>
        </div>
      </div>
    </header>
  );
}
