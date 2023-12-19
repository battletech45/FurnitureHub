import './globals.css';
import HomePage from '../../pages/home';
import HeroBanner from '@/components/banner';

export default function Home() {

  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between">
      <HomePage />
    </main>
  )
}
