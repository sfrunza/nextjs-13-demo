const URL = 'https://nextjs-13-demo-psi.vercel.app';

export default async function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="theme-color" content="#fff" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Local Movers - Phoenix Moving Boston (Free Estimate)</title>
      <meta
        name="description"
        content="Fully Licensed and Insured Reliable Boston Moving Company. Phoenix Movers are professionals and ready to move across MA and other states."
      />
      <meta
        property="og:title"
        content="Local Movers - Phoenix Moving Boston (Free Estimate)"
      />
      <meta
        property="og:description"
        content="Fully Licensed and Insured Reliable Boston Moving Company. Phoenix Movers are professionals and ready to move across MA and other states."
      />
      <meta property="og:url" content={`${URL}/local-moving`} />
      <meta
        property="og:image"
        content={`${URL}/_next/image?url=%2Fhome.png&w=3840&q=75`}
      />

      <meta name="robots" content="index,follow" />
      <meta
        name="keywords"
        content="boston to ny moving company, from boston to new york moving, Boston movers, Boston moving company, Boston moving services, moving company in boston, boston moving storage company, Boston relocation company, Boston relocation service, Boston office relocation, ma relocation, massachusets relocation, massachusets relocation company, Massachusetts storage, boston storage company, massachusets moving, massachusets moving company, moving boston storage, moving companies in boston, commercial boston movers, moving packing supplies, student moving discounts, affordable moving company"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@phoenix_moving" />
      <meta
        name="twitter:title"
        content="Local Movers - Phoenix Moving Boston (Free Estimate)"
      />
      <meta
        name="twitter:description"
        content="Fully Licensed and Insured Reliable Boston Moving Company. Phoenix Movers are professionals and ready to move across MA and other states."
      />
      <meta name="twitter:image" content="/twittercard.png" />
      {/* End Twitter Card */}

      <link rel="canonical" href={`${URL}/local-moving`} precedence="default" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
}
