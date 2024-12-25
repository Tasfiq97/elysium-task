import Dashboard from '@/components/Dashboard';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}
