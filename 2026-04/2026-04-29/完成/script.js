// ===============================
// 共通UI（ヘッダー・フッター）
// ===============================
function initCommonUI() {
  console.log("ヘッダー・フッター処理開始");

  const header = document.getElementById("main-header");
  const footer = document.getElementById("main-footer");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  // ヘッダー生成
  if (header) {
    header.innerHTML = `
      <a href="index.html" class="logo">
        <h1>Mixstgirls Fan Site</h1>
      </a>
      <nav>
        <ul>
          <li><a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">TOP</a></li>
          <li><a href="news.html" class="${currentPath === 'news.html' ? 'active' : ''}">NEWS</a></li>
          <li><a href="members.html" class="${currentPath === 'members.html' ? 'active' : ''}">MEMBERS</a></li>
          <li><a href="events.html" class="${currentPath === 'events.html' ? 'active' : ''}">EVENTS</a></li>
          <li><a href="schedule.html" class="${currentPath === 'schedule.html' ? 'active' : ''}">SCHEDULE</a></li>
          <li>
            <a href="official-shop.html"
              target="_blank"
              rel="noopener noreferrer"
              class="${currentPath === 'official-shop.html' ? 'active' : ''}">
              OFFICIAL SHOP
              <span class="external-icon">↗</span>
            </a>
          </li>
        </ul>
      </nav>
    `;
  }

  // フッター生成
  if (footer) {
    footer.innerHTML = `
      <div class="footer-left">
        <nav>
          <ul>
            <li><a href="index.html">TOP</a></li>
            <li><a href="news.html">NEWS</a></li>
            <li><a href="members.html">MEMBERS</a></li>
            <li><a href="events.html">EVENTS</a></li>
            <li><a href="schedule.html">SCHEDULE</a></li>
            <li>
              <a href="official-shop.html"
                target="_blank"
                rel="noopener noreferrer">
                OFFICIAL SHOP
                <span class="external-icon">↗</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer-right">
        <p class="copyright-text">© 2026 Mixstgirls Fan Site. All rights reserved.</p>
      </div>
    `;
  }
}

// ===============================
// データ
// ===============================
const DATA = [
  // ===== SCHEDULE =====
  { type: "schedule", datetime: "2026-05-04T20:00:00", title: "歌枠配信", member: "Ito", image: "#" },
  { type: "schedule", datetime: "2026-05-07T21:00:00", title: "雑談配信", member: "San", image: "#" },
  { type: "schedule", datetime: "2026-05-10T20:00:00", title: "ゲーム実況", member: "Myao", image: "#" },
  { type: "schedule", datetime: "2026-05-13T19:30:00", title: "お絵描き配信", member: "Shichi", image: "#" },
  { type: "schedule", datetime: "2026-05-16T20:00:00", title: "歌練習枠", member: "Lian", image: "#" },
  { type: "schedule", datetime: "2026-05-19T21:00:00", title: "ASMR配信", member: "Iori", image: "#" },
  { type: "schedule", datetime: "2026-05-22T20:00:00", title: "雑談＆質問コーナー", member: "Rimu", image: "#" },
  { type: "schedule", datetime: "2026-05-25T19:00:00", title: "RPGゲーム配信", member: "Qalu", image: "#" },
  { type: "schedule", datetime: "2026-05-27T20:00:00", title: "新曲お披露目", member: "Ito", image: "#" },
  { type: "schedule", datetime: "2026-05-31T21:00:00", title: "コラボ雑談", member: "ALL", image: "#" },

  // ===== NEWS =====
  { type: "news", date: "2026-05-01", title: "新プロジェクト『STELLAR LINK』  始動！", member: "ALL", image: "#" },
  { type: "news", date: "2026-05-03", title: "イトの新オリジナル曲ティザー公開", member: "Ito", image: "#" },
  { type: "news", date: "2026-05-06", title: "サンの新衣装ビジュアル解禁", member: "San", image: "#" },
  { type: "news", date: "2026-05-09", title: "ミャオの歌ってみた動画公開", member: "Myao", image: "#" },
  { type: "news", date: "2026-05-12", title: "シチの新シリーズ企画スタート", member: "Shichi", image: "#" },
  { type: "news", date: "2026-05-15", title: "りあんの限定ボイス販売開始", member: "Lian", image: "#" },
  { type: "news", date: "2026-05-18", title: "いおりのASMR機材アップグレード報告", member: "Iori", image: "#" },
  { type: "news", date: "2026-05-21", title: "りむの3Dモデル制作決定！", member: "Rimu", image: "#" },
  { type: "news", date: "2026-05-24", title: "キャルの誕生日記念企画発表", member: "Qalu", image: "#" },
  { type: "news", date: "2026-05-28", title: "公式グッズ第2弾ラインナップ公開", member: "ALL", image: "#" },

  // ===== EVENT =====
  { type: "event", date: "2026-05-02", title: "GWスペシャル配信フェス", member: "ALL", meta: "2026.05.02 / ONLINE", desc: "ゴールデンウィークを彩る大型配信イベント。", image: "#" },
  { type: "event", date: "2026-05-05", title: "イトバースデーライブ", member: "Ito", meta: "2026.05.05 / ONLINE", desc: "歌とトークで祝う特別ライブ。", image: "#" },
  { type: "event", date: "2026-05-08", title: "サン×ミャオコラボ配信", member: "San", meta: "2026.05.08 / ONLINE", desc: "息ぴったりのコンビでお届け。", image: "#" },
  { type: "event", date: "2026-05-11", title: "ホラーゲーム耐久配信", member: "Shichi", meta: "2026.05.11 / ONLINE", desc: "限界まで挑む恐怖体験配信。", image: "#" },
  { type: "event", date: "2026-05-14", title: "ファン参加型雑談会", member: "Lian", meta: "2026.05.14 / ONLINE", desc: "コメント参加型のゆるトーク。", image: "#" },
  { type: "event", date: "2026-05-17", title: "癒しのASMRナイト", member: "Iori", meta: "2026.05.17 / ONLINE", desc: "安らぎの音を届ける夜。", image: "#" },
  { type: "event", date: "2026-05-20", title: "歌リレー配信", member: "ALL", meta: "2026.05.20 / ONLINE", desc: "メンバー全員で歌い繋ぐ。", image: "#" },
  { type: "event", date: "2026-05-23", title: "りむソロライブ", member: "Rimu", meta: "2026.05.23 / ONLINE", desc: "透明感ある歌声を堪能。", image: "#" },
  { type: "event", date: "2026-05-26", title: "キャル記念配信", member: "Qalu", meta: "2026.05.26 / ONLINE", desc: "特別企画満載の記念枠。", image: "#" },
  { type: "event", date: "2026-05-30", title: "月末スペシャルコラボ", member: "ALL", meta: "2026.05.30 / ONLINE", desc: "5月締めくくりの大型配信。", image: "#" },
];

const MEMBER_MAP = {
  ALL: { name: "全員", class: "all", image: "images/HG6at7UbMAAaqMT.jpg" },
  Ito: { name: "イト", class: "ito", image: "images/メインビジュアル/メインビジュアル_空奏イト-1.jpg" },
  San: { name: "サン", class: "san", image: "images/メインビジュアル/メインビジュアル_天吹サン-1.jpg" },
  Myao: { name: "ミャオ", class: "myao", image: "images/メインビジュアル/メインビジュアル_成海ミャオ-1.jpg" },
  Shichi: { name: "シチ", class: "shichi", image: "images/メインビジュアル/メインビジュアル_渚沢シチ-1.jpg" },
  Lian: { name: "リアン", class: "lian", image: "images/メインビジュアル/メインビジュアル_小鈴りあん-1.jpg" },
  Iori: { name: "イオリ", class: "iori", image: "images/メインビジュアル/メインビジュアル_琴宮いおり-1.jpg" },
  Rimu: { name: "リム", class: "rimu", image: "images/メインビジュアル/メインビジュアル_星乃りむ-1.jpg" },
  Qalu: { name: "キャル", class: "qalu", image: "images/メインビジュアル/メインビジュアル_雪白キャル-1.jpg" }
}

function getThumb(item) {
  const member = MEMBER_MAP[item.member] ?? MEMBER_MAP["ALL"];

  // サムネがちゃんとある場合だけ使う
  if (item.image && item.image !== "#" && item.image.trim() !== "") {
    return item.image;
  }

  // なければメンバーのメインビジュアル
  return member.image;
}

// ===============================
// 共通関数
// ===============================
function getMember(name) {
  return MEMBER_MAP[name]
    || MEMBER_MAP[name.toLowerCase()]
    || MEMBER_MAP.ALL;
}

function getDate(item) {
  return new Date(item.datetime || item.date);
}

function getLiveStatus(datetimeStr) {
  if (!datetimeStr) return null;
  const now = new Date();
  const start = new Date(datetimeStr);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
  if (now < start) return "soon";
  if (now <= end) return "live";
  return "archive";
}

// ===============================
// 描画
// ===============================
function renderRailList(data, selector) {
  const container = document.querySelector(selector);
  if (!container) return;

  console.log(selector, "→", container);
  console.log("data length:", data.length);

  container.innerHTML = data.map((item) => {
    const date = getDate(item);
    const member = getMember(item.member);
    const thumb = getThumb(item);

    return `
      <a class="rail-card ${member.class}">
        <div class="card-header">
          <img src="${thumb}" alt="${item.title}" width="640" height="360" loading="lazy">
        </div>
        <p class="rail-card-meta">${date.toLocaleDateString()}</p>
        <h3>${item.title}</h3>
        <span class="card-badge">${member.name}</span>
      </a>
    `;
  }).join("");
}

function renderSimpleList(selector, data, templateFn) {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = data.map(templateFn).join("");
}

function initPages() {
  const sorted = [...DATA].sort((a, b) => getDate(a) - getDate(b));

  console.log("sorted:", sorted);

  // TOPページのレール
  renderRailList(sorted.filter(i => i.type === "news"), "#news .card-rail");
  renderRailList(sorted.filter(i => i.type === "schedule"), "#schedule .card-rail");
  renderRailList(sorted.filter(i => i.type === "event"), "#events .card-rail");

  // 下層ページのリスト
  renderSimpleList(
    ".news-list",
    sorted.filter(i => i.type === "news"),
    (item) => `<div class="list-item"><a href="${item.link || "#"}"><span class="list-date">${getDate(item).toLocaleDateString()}</span><p class="list-title">${item.title}</p></a></div>`
  );

  renderSimpleList(
    ".schedule-list",
    sorted.filter(i => i.type === "schedule"),
    (item) => `<div class="list-item"><a href="${item.link || "#"}"><span class="list-date">${getDate(item).toLocaleDateString()} ${getDate(item).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span><p class="list-title">${item.title} / ${item.member}</p></a></div>`
  );

  renderSimpleList(
    ".events-list",
    sorted.filter(i => i.type === "event"),
    (item) => `<div class="list-item"><a href="${item.link || "#"}"><span class="list-date">${getDate(item).toLocaleDateString()}</span><p class="list-title">${item.title}</p></a></div>`
  );
}

// ===============================
// 初期化
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  console.log("Initialization started");

  initCommonUI();

  fetch("members.json")
    .then(res => res.json())
    .then(members => {
      function getMember(name) {
        return MEMBER_MAP[name] || MEMBER_MAP.ALL;
      }

      initPages();
    })
    .catch(err => {
      console.error("members.json 読み込み失敗", err);
      initPages();
    });

  const header = document.getElementById("main-header");
  const footer = document.getElementById("main-footer");

  window.addEventListener("scroll", () => {
    if (!header || !footer) return;

    const scrollY = window.scrollY;
    const footerTop = footer.offsetTop;
    const windowHeight = window.innerHeight;

    // フッターに近づいたか判定
    const footerRect = footer.getBoundingClientRect();

    const nearFooter = footerRect.top < window.innerHeight - 550;

    if (nearFooter) {
      // フッター付近 → 元の色
      header.classList.remove("active");
    } else if (scrollY > 50) {
      // 通常スクロール → 薄く
      header.classList.add("active");
    } else {
      // 一番上
      header.classList.remove("active");
    }
  });
});
