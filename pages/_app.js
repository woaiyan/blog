import '../styles/globals.less'
function MyApp({ Component, pageProps }) {
  return <>
    <script src="/svg.js"></script>
    <Component {...pageProps} />
    </>
}

export default MyApp
