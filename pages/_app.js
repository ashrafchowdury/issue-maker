import "@/styles/globals.css";
import Navabar from "@/components/Navabar";
import Footer from "@/components/Footer";
import AuthDataProvider from "@/context/useAuth";
export default function App({ Component, pageProps }) {
  return (
    <main className="w-[90%] sm:w-[550px] md:w-[767px] lg:w-[1050px] xl:w-[1400px] mx-auto">
      <AuthDataProvider>
        <Navabar />
        <Component {...pageProps} />
        <Footer />
      </AuthDataProvider>
    </main>
  );
}
