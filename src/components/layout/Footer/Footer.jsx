import "./Footer.scss";

export default function Footer({ linkedin }) {
  const year = new Date().getFullYear();
  return (
    <footer className="app-footer" role="contentinfo">
      <div className="app-footer__inner">
        <p>
          © Katarina Bajnoková {year} &nbsp; | &nbsp;
          <a href="mailto:katarinabajnokovaofficial@gmail.com">
            katarinabajnokovaofficial@gmail.com
          </a>
          &nbsp; | &nbsp;
          <a href="tel:+32472215014">+32 472 21 50 14</a>
        </p>

        <a
          className="app-footer__social"
          href={linkedin || "https://www.linkedin.com/in/katarina-bajnokova/"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.16h4.99V24H0V8.16zM8.41 8.16H13v2.16h.06c.64-1.2 2.2-2.46 4.53-2.46 4.84 0 5.73 3.18 5.73 7.32V24h-5V16c0-1.91-.03-4.37-2.66-4.37-2.66 0-3.07 2.08-3.07 4.23V24h-5V8.16z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
