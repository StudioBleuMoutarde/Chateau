// Import des styles
import '../styles/home.style.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />

      <style jsx global>{`
        @font-face {
          font-family: 'Montserrat-Regular';
          src: url('/fonts/Montserrat-Regular.ttf');
        }
        @font-face {
          font-family: 'Montserrat-SemiBold';
          src: url('/fonts/Montserrat-SemiBold.ttf');
        }
        @font-face {
          font-family: 'Montserrat-Black';
          src: url('/fonts/Montserrat-Black.ttf');
        }
      `}</style>
    </div>
  )
}
