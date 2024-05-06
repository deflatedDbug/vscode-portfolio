import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Subin Lebow is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="subin lebow, subin, lebow, web developer portfolio, subin web developer, subin developer, mern stack, subin lebow portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Subin Lebow's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Subin Lebow',
};
