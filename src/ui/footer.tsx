import { type PageInfo, accountLink, pageInfos } from "@/lib/data/pageInfos";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="footer bg-gradient-to-b from-neutral to-[#0f71d3] p-10 text-base-content">
      <aside className="link-hover">
        <a
          href="https://association.tskaigi.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          {/* TODO: ロゴを関西用に置き換える */}
          <img src="/logo.svg" className="my-4 w-36" alt="logo" />
          一般社団法人TSKaigi Association
        </a>
      </aside>
      <nav>
        <h2 className="footer-title">ページ一覧</h2>
        {pageInfos.map(
          (link: PageInfo) =>
            link.showFooter && (
              <Link key={link.id} href={link.href} className="link-hover pl-2">
                {link.title}
              </Link>
            ),
        )}
      </nav>
      <nav>
        <h2 className="footer-title">公式アカウント</h2>
        {accountLink.map(
          ({ href, title, showFooter }) =>
            showFooter && (
              <Link
                key={href}
                href={href}
                rel="noopener noreferrer"
                target="_blank"
                className="link-hover flex items-center gap-2 pl-2"
              >
                {title}
                <HiExternalLink />
              </Link>
            ),
        )}
      </nav>
    </footer>
  );
}
