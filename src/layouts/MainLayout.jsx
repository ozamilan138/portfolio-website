import LightRaysBackground from "../components/LightRaysBackground";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <LightRaysBackground />
      <Navbar />
      <main className="relative z-10 pt-24">{children}</main>
    </div>
  );
}

export default MainLayout;
