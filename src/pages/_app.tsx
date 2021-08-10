import '../styles/reset.css';
import '../styles/global.css';
import '../styles/variables.css';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};
export default MyApp;
