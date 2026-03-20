const fs = require('fs');

const ACTIVE = 'text-[#9cff93] font-bold border-b-2 border-[#9cff93] pb-1 hover:text-[#00fc40] hover:drop-shadow-[0_0_8px_rgba(0,252,64,0.6)] transition-all duration-150';
const ACTIVE_PARENT = 'text-[#9cff93] font-bold hover:text-[#00fc40] hover:drop-shadow-[0_0_8px_rgba(0,252,64,0.6)] transition-all duration-150 flex items-center gap-0.5';
const INACTIVE = 'text-[#eff3ff] font-medium hover:text-[#00fc40] hover:drop-shadow-[0_0_8px_rgba(0,252,64,0.6)] transition-all duration-150';
const INACTIVE_PARENT = INACTIVE + ' flex items-center gap-0.5';
const CHEVRON = '<span class="material-symbols-outlined" style="font-size:15px;vertical-align:middle;margin-left:1px">expand_more</span>';

function dropLink(href, label, isActive) {
  const cls = isActive
    ? 'block px-4 py-2.5 text-sm font-medium text-[#9cff93] bg-[#181a1c]'
    : 'block px-4 py-2.5 text-sm font-medium text-[#eff3ff]/70 hover:text-[#9cff93] hover:bg-[#181a1c] transition-all';
  return `<a class="${cls}" href="${href}">${label}</a>`;
}

function makeNav(activeKey) {
  const pActive = activeKey === 'players';
  const sActive = activeKey === 'schedule';
  const lActive = activeKey === 'leaderboard';
  const aActive = activeKey === 'about';
  const cActive = activeKey === 'courses';
  const acadActive = activeKey === 'academy';
  const competeParent = (pActive || sActive || lActive) ? ACTIVE_PARENT : INACTIVE_PARENT;
  const leagueParent  = (aActive || cActive || acadActive) ? ACTIVE_PARENT : INACTIVE_PARENT;

  return `<nav class="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-[#0d0e10]/95 backdrop-blur-md">
<div class="text-2xl font-black tracking-tighter text-[#fdfbfe] dark:text-[#fdfbfe]">SBGLEAGUE</div>
<div class="hidden md:flex items-center space-x-8">
<a class="${activeKey === 'home' ? ACTIVE : INACTIVE}" href="index.html">Home</a>
<div class="relative group">
<button class="${competeParent}">Compete${CHEVRON}</button>
<div class="absolute top-full left-0 hidden group-hover:block pt-1 z-50">
<div class="bg-[#0d0e10] border border-[#1e2022] min-w-[168px] py-1 shadow-xl">
${dropLink('players.html','Players', pActive)}
${dropLink('schedule.html','Schedule', sActive)}
${dropLink('leaderboard.html','Leaderboard', lActive)}
</div>
</div>
</div>
<div class="relative group">
<button class="${leagueParent}">League${CHEVRON}</button>
<div class="absolute top-full left-0 hidden group-hover:block pt-1 z-50">
<div class="bg-[#0d0e10] border border-[#1e2022] min-w-[168px] py-1 shadow-xl">
${dropLink('about.html','About', aActive)}
${dropLink('courses.html','Courses', cActive)}
${dropLink('academy.html','Academy', acadActive)}
</div>
</div>
</div>
<a class="${activeKey === 'news' ? ACTIVE : INACTIVE}" href="news.html">News</a>
<a class="${activeKey === 'store' ? ACTIVE : INACTIVE}" href="shop.html">Store</a>
</div>
<button class="bg-primary-container text-on-primary px-6 py-2 font-headline font-bold uppercase tracking-widest text-sm glow-primary transition-all active:scale-95">
    Buy Tickets
</button>
</nav>`;
}

const FOOTER = `<!-- Footer -->
<footer class="bg-[#000000] dark:bg-[#000000] border-t border-[#181a1c]">
<div class="w-full py-16 px-8 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
<div class="space-y-6">
<div class="text-xl font-black text-[#fdfbfe] tracking-tighter uppercase">SBGLEAGUE</div>
<p class="font-body text-sm text-[#eff3ff]/60 leading-relaxed max-w-xs">
    The ultimate fusion of tactical warfare and professional golf. Broadcasting from the world's most dangerous courses since 2017.
</p>
<div class="flex gap-4">
<a class="w-10 h-10 bg-surface-container flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all" href="#">
<span class="material-symbols-outlined text-sm">hub</span>
</a>
<a class="w-10 h-10 bg-surface-container flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all" href="#">
<span class="material-symbols-outlined text-sm">terminal</span>
</a>
<a class="w-10 h-10 bg-surface-container flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all" href="#">
<span class="material-symbols-outlined text-sm">public</span>
</a>
</div>
</div>
<div class="space-y-6">
<h4 class="font-headline text-lg font-bold text-[#fdfbfe] uppercase tracking-wider">League</h4>
<ul class="space-y-3 font-body text-sm">
<li><a class="text-[#eff3ff]/60 hover:text-[#9cff93] transition-colors" href="#">Terms of Service</a></li>
<li><a class="text-[#eff3ff]/60 hover:text-[#9cff93] transition-colors" href="#">Privacy Policy</a></li>
<li><a class="text-[#eff3ff]/60 hover:text-[#9cff93] transition-colors" href="#">Athlete Code of Conduct</a></li>
<li><a class="text-[#eff3ff]/60 hover:text-[#9cff93] transition-colors" href="#">Brand Assets</a></li>
</ul>
</div>
<div class="space-y-6">
<h4 class="font-headline text-lg font-bold text-[#fdfbfe] uppercase tracking-wider">Logistics</h4>
<ul class="space-y-3 font-body text-sm">
<li><a class="text-[#eff3ff]/60 hover:text-[#9cff93] transition-colors" href="#">Contact Support</a></li>
<li><a class="text-[#eff3ff]/60 hover:text-[#9cff93] transition-colors" href="#">Ticketing FAQ</a></li>
<li><a class="text-[#eff3ff]/60 hover:text-[#9cff93] transition-colors" href="#">Arena Safety Manual</a></li>
<li><a class="text-[#eff3ff]/60 hover:text-[#9cff93] transition-colors" href="#">Media Accreditation</a></li>
</ul>
</div>
<div class="space-y-6">
<h4 class="font-headline text-lg font-bold text-[#fdfbfe] uppercase tracking-wider">Intelligence Access</h4>
<p class="font-body text-xs text-[#eff3ff]/40">Receive direct encrypted updates on course layouts and athlete drafts.</p>
<form class="flex flex-col gap-2">
<input class="bg-surface-container border-none text-xs font-label p-3 focus:ring-1 focus:ring-primary-container outline-none" placeholder="EMAIL ADDRESS" type="email"/>
<button class="bg-primary-container text-on-primary font-headline font-bold uppercase text-xs py-3 tracking-widest hover:bg-primary-fixed-dim transition-all">Subscribe</button>
</form>
</div>
</div>
<div class="w-full max-w-7xl mx-auto px-8 py-8 border-t border-[#181a1c] flex flex-col md:flex-row justify-between items-center gap-4">
<span class="font-label text-[10px] text-[#eff3ff]/40 tracking-widest">&copy; 2024 SUPER BATTLE GOLF LEAGUE. ALL RIGHTS RESERVED.</span>
<div class="flex items-center gap-6">
<span class="font-label text-[10px] text-[#eff3ff]/40 tracking-widest uppercase">ENCRYPTED CONNECTION: AES-256</span>
<span class="font-label text-[10px] text-[#9cff93] tracking-widest uppercase">SYSTEM STATUS: OPTIMAL</span>
</div>
</div>
</footer>`;

const pages = [
  { name: 'index',       key: 'home' },
  { name: 'about',       key: 'about' },
  { name: 'players',     key: 'players' },
  { name: 'schedule',    key: 'schedule' },
  { name: 'leaderboard', key: 'leaderboard' },
  { name: 'news',        key: 'news' },
  { name: 'shop',        key: 'store' },
  { name: 'academy',     key: 'academy' },
];

pages.forEach(({ name, key }) => {
  const path = 'site/public/' + name + '.html';
  let html = fs.readFileSync(path, 'utf8');
  html = html.replace(/<nav[\s\S]*?<\/nav>/, makeNav(key));
  html = html.replace(/<footer[\s\S]*?<\/footer>/, FOOTER);
  fs.writeFileSync(path, html);
  console.log(name + ': updated (' + key + ')');
});
