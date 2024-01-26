import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Layout() {
  return (
    <>
      <Header />
      <div className="w-full p-4 min-h-screen bg-slate-50 pt-24">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
