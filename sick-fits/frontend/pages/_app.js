import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css';

// Show page load progress
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Page>
  );
}
