(function () {
  const pages = [
    { href: 'index.html',         label: 'Home' },
    { href: 'phonetics.html',     label: 'Phonetics' },
    { href: 'morphology.html',    label: 'Morphology' },
    { href: 'syntax.html',        label: 'Syntax' },
    { href: 'semantics.html',     label: 'Semantics' },
    { href: 'text-analysis.html', label: 'Text Analysis' },
    { href: 'etymology.html',     label: 'Etymology' },
  ];
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const navLinksHTML = pages.map(p => `<li><a href="${p.href}" class="${current===p.href?'active':''}">${p.label}</a></li>`).join('');
  const mobileLinksHTML = pages.map(p => `<a href="${p.href}" class="${current===p.href?'active':''}">${p.label}</a>`).join('');

  const navHTML = `
<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-brand">
      <div class="nav-brand-icon">
        <img src="favicon.jpg" alt="The Loom Workshop" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">
      </div>
      <div class="nav-brand-text">
        <span>The Loom Workshop</span>
        <span>by The Lingua Loom</span>
      </div>
    </a>
    <ul class="nav-links">${navLinksHTML}</ul>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav-mobile" id="navMobile">${mobileLinksHTML}</div>
</nav>`;

  const footerHTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <h3>
        <img src="favicon.jpg" alt="logo" style="width:28px;height:28px;border-radius:50%;vertical-align:middle;margin-right:8px;object-fit:cover;">
        The Loom Workshop
      </h3>
      <p>The interactive companion to <a href="https://www.thelingualoom.com" style="color:var(--copper-lt)">The Lingua Loom</a>.
         Explore, analyze, and experiment with the building blocks of human language.</p>
    </div>
    <div>
      <h4>Tools</h4>
      <ul>
        <li><a href="phonetics.html">Phonetics &amp; Phonology</a></li>
        <li><a href="morphology.html">Morphology</a></li>
        <li><a href="syntax.html">Syntax</a></li>
        <li><a href="semantics.html">Semantics</a></li>
        <li><a href="text-analysis.html">Text Analysis</a></li>
        <li><a href="etymology.html">Etymology</a></li>
      </ul>
    </div>
    <div>
      <h4>About</h4>
      <ul>
        <li><a href="https://www.thelingualoom.com" target="_blank">Main Website</a></li>
        <li><a href="index.html">About The Workshop</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© ${new Date().getFullYear()} The Lingua Loom · The Loom Workshop</span>
    <span class="cc-badge">
      <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>
      — Free for educational &amp; non-commercial use
    </span>
  </div>
</footer>`;

  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = navHTML;
  const footEl = document.getElementById('footer-placeholder');
  if (footEl) footEl.outerHTML = footerHTML;

  document.addEventListener('click', function (e) {
    const btn = document.getElementById('navToggle');
    const mob = document.getElementById('navMobile');
    if (btn && mob) {
      if (btn.contains(e.target)) mob.classList.toggle('open');
      else if (!mob.contains(e.target)) mob.classList.remove('open');
    }
  });
})();
