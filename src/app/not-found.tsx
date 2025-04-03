import Image from 'next/image';

export default function NotFound() {
  return (
    <section className="ss-section">
      <div className="ss-flex ss-flex-column ss-justify-center ss-flex-middle ss-gap-sm">
        <Image alt="404" height={250} src="/error-404.webp" width={250} />
        <h1>We have hit a sang</h1>
        <p className="ss-text-center">
          {' '}
          We are working hard to provide better services and content! Please bear with us a little longer. In the
          meantime, feel free to check out our best-selling products and items on sale. Subscribe to our newsletter to
          receive the latest updates!{' '}
        </p>
        <div className="ss-flex ss-justify-center ss-gap-xs">
          <a className="ss-button ss-button--secondary" href="/shop/">
            Shop Bestsellers
          </a>
          <a className="ss-button ss-button--secondary" href="/shop/">
            Shop Flash Sales
          </a>
        </div>
      </div>
    </section>
  );
}
