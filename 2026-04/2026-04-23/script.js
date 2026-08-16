const header = document.getElementById("main-header");
const currentPath = window.location.pathname.split("/").pop() || "index.html";

if (header) {
  header.innerHTML = `
    <a href="index.html" class="logo">
      <h1>Mixstgirls Fan Site</h1>
    </a>
    <nav>
      <ul>
        <li><a href="index.html" class="${currentPath === "index.html" ? "active" : ""}">TOP</a></li>
        <li><a href="news.html" class="${currentPath === "news.html" ? "active" : ""}">NEWS</a></li>
        <li><a href="members.html" class="${currentPath === "members.html" ? "active" : ""}">MEMBERS</a></li>
        <li><a href="events.html" class="${currentPath === "events.html" ? "active" : ""}">EVENTS</a></li>
        <li><a href="schedule.html" class="${currentPath === "schedule.html" ? "active" : ""}">SCHEDULE</a></li>
        <li><a href="official-shop.html" class="${currentPath === "official-shop.html" ? "active" : ""}">OFFICIAL SHOP</a></li>
      </ul>
    </nav>
  `;
}

const footer = document.createElement("footer");
footer.className = "footer";
footer.innerHTML = `
  <div class="footer-left">
    <nav>
      <ul>
        <li><a href="index.html">TOP</a></li>
        <li><a href="news.html">NEWS</a></li>
        <li><a href="members.html">MEMBERS</a></li>
        <li><a href="events.html">EVENTS</a></li>
        <li><a href="schedule.html">SCHEDULE</a></li>
        <li><a href="official-shop.html">OFFICIAL SHOP</a></li>
      </ul>
    </nav>
  </div>
  <div class="footer-right">
    <p class="copyright-text">&copy; 2026 Mixstgirls</p>
  </div>
`;
document.body.appendChild(footer);

const scrollTopBtn = document.createElement("button");
scrollTopBtn.className = "scroll-top";
scrollTopBtn.textContent = "^";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  const footerEl = document.querySelector(".footer");
  if (header) {
    const isScrolled = window.scrollY > 50;
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
    header.classList.toggle("active", isScrolled && !isAtBottom);
  }
  if (footerEl) {
    scrollTopBtn.classList.toggle("show", footerEl.getBoundingClientRect().top <= window.innerHeight);
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const DATA = [
  { type: "news", date: "2026-05-01", title: "新プロジェクト始動！ティザー公開", member: "ALL", image: "#" },
  { type: "news", date: "2026-05-03", title: "空奏イト 新衣装お披露目決定", member: "Ito", image: "#" },
  { type: "news", date: "2026-05-05", title: "GW限定ボイス販売スタート", member: "ALL", image: "#" },
  { type: "news", date: "2026-05-08", title: "天吹サン 初ソロ楽曲リリース発表", member: "San", image: "#" },
  { type: "news", date: "2026-05-12", title: "成海ミャオ 登録者5万人突破！", member: "Myao", image: "#" },
  { type: "news", date: "2026-05-15", title: "公式グッズ第2弾ラインナップ公開", member: "ALL", image: "#" },
  { type: "news", date: "2026-05-18", title: "渚沢シチ コラボ配信企画発表", member: "Shichi", image: "#" },
  { type: "news", date: "2026-05-22", title: "小鈴りあん 歌ってみた公開", member: "Rian", image: "#" },
  { type: "news", date: "2026-05-26", title: "星乃りむ 新シリーズ配信スタート", member: "Rimu", image: "#" },
  { type: "news", date: "2026-05-30", title: "雪白キャル 誕生日記念配信決定", member: "Qalu", image: "#" },

  { type: "schedule", datetime: "2026-05-02T20:00:00", title: "歌枠ライブ配信", member: "Ito", image: "#" },
  { type: "schedule", datetime: "2026-05-04T21:00:00", title: "雑談＆GWトーク", member: "San", image: "#" },
  { type: "schedule", datetime: "2026-05-06T19:30:00", title: "ホラーゲーム実況", member: "Myao", image: "#" },
  { type: "schedule", datetime: "2026-05-09T20:30:00", title: "お絵描き配信", member: "Shichi", image: "#" },
  { type: "schedule", datetime: "2026-05-11T20:00:00", title: "歌練習枠", member: "Rian", image: "#" },
  { type: "schedule", datetime: "2026-05-14T21:00:00", title: "ASMRナイト", member: "Iori", image: "#" },
  { type: "schedule", datetime: "2026-05-17T20:00:00", title: "雑談＆質問コーナー", member: "Rimu", image: "#" },
  { type: "schedule", datetime: "2026-05-20T19:00:00", title: "RPGゲーム配信", member: "Qalu", image: "#" },
  { type: "schedule", datetime: "2026-05-24T20:00:00", title: "新曲お披露目配信", member: "Ito", image: "#" },
  { type: "schedule", datetime: "2026-05-29T21:30:00", title: "全員コラボ配信", member: "ALL", image: "#" },

  {
    type: "event",
    date: "2026-05-03",
    title: "GWスペシャル配信",
    member: "ALL",
    meta: "2026.05.03 / ONLINE",
    desc: "ゴールデンウィーク特別企画の大型配信。",
    image: "#"
  },
  {
    type: "event",
    date: "2026-05-05",
    title: "ファン参加型ゲーム大会",
    member: "ALL",
    meta: "2026.05.05 / ONLINE",
    desc: "リスナー参加OKの対戦イベント。",
    image: "#"
  },
  {
    type: "event",
    date: "2026-05-07",
    title: "歌リレー配信",
    member: "ALL",
    meta: "2026.05.07 / ONLINE",
    desc: "メンバーで歌をつなぐリレー企画。",
    image: "#"
  },
  {
    type: "event",
    date: "2026-05-10",
    title: "空奏イト 新衣装お披露目",
    member: "Ito",
    meta: "2026.05.10 / ONLINE",
    desc: "待望の新衣装を初公開。",
    image: "#"
  },
  {
    type: "event",
    date: "2026-05-13",
    title: "天吹サン ソロライブ",
    member: "San",
    meta: "2026.05.13 / ONLINE",
    desc: "初のソロライブイベント。",
    image: "#"
  },
  {
    type: "event",
    date: "2026-05-16",
    title: "コラボトークイベント",
    member: "ALL",
    meta: "2026.05.16 / ONLINE",
    desc: "ゲストを迎えた特別トーク回。",
    image: "#"
  },
  {
    type: "event",
    date: "2026-05-19",
    title: "3Dライブ配信",
    member: "ALL",
    meta: "2026.05.19 / ONLINE",
    desc: "3Dでのライブパフォーマンス。",
    image: "#"
  },
  {
    type: "event",
    date: "2026-05-23",
    title: "ファン感謝祭",
    member: "ALL",
    meta: "2026.05.23 / ONLINE",
    desc: "日頃の感謝を伝える特別イベント。",
    image: "#"
  },
  {
    type: "event",
    date: "2026-05-27",
    title: "歌ってみたフェス",
    member: "ALL",
    meta: "2026.05.27 / ONLINE",
    desc: "人気曲をカバーする配信企画。",
    image: "#"
  },
  {
    type: "event",
    date: "2026-05-31",
    title: "月末スペシャル配信",
    member: "ALL",
    meta: "2026.05.31 / ONLINE",
    desc: "5月の締めくくり特別配信。",
    image: "#"
  }
];

const MEMBER_MAP = {
  ALL: { name: "ALL", class: "all", image: "images/default.png", enName: "ALL MEMBERS" }
};

function getMember(name) {
  return MEMBER_MAP[name] || MEMBER_MAP.ALL;
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

function renderRailList(data, selector) {
  const container = document.querySelector(selector);
  if (!container) return;

  container.innerHTML = data.map((item) => {
    const date = getDate(item);
    const member = getMember(item.member);

    return `
      <a class="rail-card ${member.class}"
         href="${item.link || "#"}"
         data-date="${item.datetime || item.date}">

        <div class="card-header">
          <img src="${item.image || member.image}" alt="${item.title}">
        </div>

        <p class="date">
          ${date.toLocaleDateString()}
          ${item.datetime ? date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ""}
        </p>

        <h3>
          ${item.title}
          ${getLiveStatus(item.datetime) === "live" ? '<span class="live-badge">LIVE</span>' : ""}
        </h3>

        <span class="member">${member.name}</span>
      </a>
    `;
  }).join("");
}

function renderSimpleList(selector, data, renderItem) {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = data.map(renderItem).join("");
}

function initPages() {
  const sorted = [...DATA].sort((a, b) => getDate(a) - getDate(b));

  renderRailList(sorted.filter((item) => item.type === "news"), "#news .card-rail");
  renderRailList(sorted.filter((item) => item.type === "schedule"), "#schedule .card-rail");
  renderRailList(sorted.filter((item) => item.type === "event"), "#events .card-rail");

  renderSimpleList(
    ".news-list",
    sorted.filter((item) => item.type === "news").reverse(),
    (item) => `<div class="list-item"><a href="${item.link || "#"}"><span class="list-date">${getDate(item).toLocaleDateString()}</span><p class="list-title">${item.title}</p></a></div>`
  );

  renderSimpleList(
    ".schedule-list",
    sorted.filter((item) => item.type === "schedule"),
    (item) => `<div class="list-item"><a href="${item.link || "#"}"><span class="list-date">${getDate(item).toLocaleDateString()} ${getDate(item).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span><p class="list-title">${item.title} / ${item.member}</p></a></div>`
  );

  renderSimpleList(
    ".events-list",
    sorted.filter((item) => item.type === "event"),
    (item) => `<div class="list-item"><a href="${item.link || "#"}"><span class="list-date">${getDate(item).toLocaleDateString()}</span><p class="list-title">${item.title}</p></a></div>`
  );
}

fetch("members.json")
  .then((res) => res.json())
  .then((members) => {
    members.forEach((member) => {
      MEMBER_MAP[member.name] = member;
    });
    initPages();
  })
  .catch(() => {
    initPages();
  });fetch("members.json")
    .then((res) => res.json())
    .then((members) => {
      members.forEach((member) => {
        MEMBER_MAP[member.name] = member;
      });
      initPages();
    })
    .catch(() => {
      initPages();
    });
});