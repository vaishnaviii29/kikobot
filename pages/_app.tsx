import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../app/globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/poppins/400.css";
import "@fontsource/montserrat/400.css";
import HomeHeader from "@/components/Header";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../app/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Check if the current route is either the login or quiz page
  const isSpecialPage = router.pathname === "/login" || router.pathname === "/quiz";

  return (
    <>
       {!isSpecialPage && <HomeHeader />}
    
      <Component {...pageProps} />
      
      {/* {!isSpecialPage && <Footer />} */}
    </>
  );
}

export default MyApp;
