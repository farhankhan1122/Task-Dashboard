import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function DashboardPage() {



  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50">
        </main>
      </div>
    </div>
  );
}
