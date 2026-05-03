import Image from "next/image";
import lineQr from "../images/BambaAI_LINE_QR.png";
import logo from "../images/BambaAI_Logo.png";
import vision from "../images/BambaAI_Vision.png";

const services = [
  {
    title: "AI活用支援",
    text: "ChatGPTなどのAIツールを、日々の文章作成、問い合わせ対応、企画整理、作業効率化に使える形へ整えます。"
  },
  {
    title: "SNS活用支援",
    text: "お店やサービスの強みが伝わる投稿テーマ、文章、運用の流れを一緒に作ります。"
  },
  {
    title: "PR動画作成・配信",
    text: "店舗、商品、サービスの魅力を短くわかりやすい動画にまとめ、SNSやWebで届けます。"
  },
  {
    title: "Webサービス開発",
    text: "予約、問い合わせ、情報発信、業務改善など、事業に合わせた小さく使いやすいWebの仕組みを作ります。"
  }
];

const steps = [
  "今のお困りごとを整理",
  "使える施策に絞って企画",
  "投稿・動画・Webを制作",
  "発信後の改善まで伴走"
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <Image
          src={vision}
          alt="Bamba AIが地元の商店をAI活用で支援するビジョン"
          fill
          priority
          className="heroImage"
          sizes="100vw"
        />
        <div className="heroShade" />

        <header className="siteHeader" aria-label="サイトヘッダー">
          <a className="brand" href="#top" aria-label="Bamba AI トップへ">
            <Image src={logo} alt="" width={42} height={42} priority />
            <span>Bamba AI</span>
          </a>
          <nav className="siteNav" aria-label="主要ナビゲーション">
            <a href="#services">支援内容</a>
            <a href="#concept">コンセプト</a>
            <a href="#contact">相談</a>
          </nav>
        </header>

        <div className="heroContent">
          <p className="eyebrow">東京都品川区周辺の個人店・中小企業向け</p>
          <h1>Bamba AI</h1>
          <p className="heroLead">地元の商売に、ちょうどいいAI活用支援。</p>
          <p className="heroText">
            難しいIT導入ではなく、日々の集客や情報発信にすぐ使える実践的な支援を提供します。
          </p>
          <div className="heroActions" aria-label="主なアクション">
            <a className="primaryButton" href="#contact">
              LINEで相談する
            </a>
            <a className="secondaryButton" href="#services">
              支援内容を見る
            </a>
          </div>
        </div>
      </section>

      <section className="quickFacts" aria-label="Bamba AIの特徴">
        <div>
          <strong>品川区周辺</strong>
          <span>地域の商売に寄り添う</span>
        </div>
        <div>
          <strong>個人店・中小企業</strong>
          <span>小さく始めやすい支援</span>
        </div>
        <div>
          <strong>AI・SNS・動画・Web</strong>
          <span>発信と効率化をまとめて相談</span>
        </div>
      </section>

      <section className="section" id="services">
        <div className="sectionHead">
          <p className="eyebrow">Services</p>
          <h2>必要なところから、すぐ使える形に。</h2>
          <p>
            投稿文、PR動画、Googleビジネスプロフィール、AIツールの使い方まで、お店の現場で続けられる支援に落とし込みます。
          </p>
        </div>

        <div className="serviceGrid">
          {services.map((service, index) => (
            <article className="serviceCard" key={service.title}>
              <span className="serviceNumber">{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="conceptBand" id="concept">
        <div className="conceptText">
          <p className="eyebrow">Concept</p>
          <h2>難しいIT導入より、今日の発信に効くAIを。</h2>
          <p>
            Bamba AIは、地域のお店や事業者の魅力をわかりやすく伝えるための伴走役です。
            「何を投稿すればいいかわからない」「動画を作りたいけれど手が回らない」「AIを試したいけれど仕事にどう使うかわからない」
            といった課題を、実際に使える成果物と運用の形にしていきます。
          </p>
        </div>
        <div className="conceptLogo" aria-label="Bamba AIロゴ">
          <Image src={logo} alt="Bamba AIのロゴ" width={240} height={240} />
        </div>
      </section>

      <section className="section processSection">
        <div className="sectionHead">
          <p className="eyebrow">Flow</p>
          <h2>相談から発信まで、無理なく進めます。</h2>
        </div>
        <ol className="processList">
          {steps.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="contactSection" id="contact">
        <div className="contactText">
          <p className="eyebrow">Contact</p>
          <h2>まずは今の困りごとから。</h2>
          <p>
            SNS投稿、PR動画、AIツールの使い方、Webの仕組みづくりなど、まだ整理できていない段階でも相談できます。
            LINEのQRコードからお問い合わせください。
          </p>
        </div>
        <div className="qrBox">
          <Image src={lineQr} alt="Bamba AIのLINE QRコード" width={220} height={220} />
          <p>LINEで相談する</p>
        </div>
      </section>

      <footer className="siteFooter">
        <span>Bamba AI</span>
        <span>https://bamba-ai.com</span>
      </footer>
    </main>
  );
}
