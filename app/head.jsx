const URL = 'https://nextjs-13-demo-psi.vercel.app';
const title =
  'Phoenix Moving & Storage - 🚚 Make Moving in Boston Chill (FreeEstimate)';
const description =
  'Fully Licensed and Insured Reliable Boston Moving Company. Phoenix Movers are professionals and ready to move across MA and other states.';

const keywords =
  'boston to ny moving company, from boston to new york moving, Boston movers, Boston moving company, Boston moving services, moving company in boston, boston moving storage company, Boston relocation company, Boston relocation service, Boston office relocation, ma relocation, massachusets relocation, massachusets relocation company, Massachusetts storage, boston storage company, massachusets moving, massachusets moving company, moving boston storage, moving companies in boston, commercial boston movers, moving packing supplies, student moving discounts, affordable moving company';

export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="theme-color" content="#fff" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OG Card */}
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/twittercard.png" />
      {/* End OG Card */}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@phoenix_moving" />
      <meta property="twitter:domain" content={URL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/twittercard.png" />
      {/* End Twitter Card */}

      <meta name="robots" content="index,follow" />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={URL} precedence="default" />
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
