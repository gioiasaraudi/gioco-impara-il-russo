/* Three costumes share one compact body rig and the same face slots. */
const TR_AVATAR_COSTUMES = Object.freeze([
  { id: 'explorer', name: 'Esploratore' },
  { id: 'scholar', name: 'Studioso' },
  { id: 'traveler', name: 'Viaggiatore' }
]);
const TR_AVATAR_FACES = Object.freeze([
  { id: 'smile', name: 'Sorriso' },
  { id: 'curious', name: 'Curioso' },
  { id: 'confident', name: 'Sicuro' }
]);
const TR_AVATAR_DEFAULT = Object.freeze({ name: 'Viaggiatore', costume: 'explorer', face: 'smile', color: '#c8323c', skin: '#f1c7a5' });
const TR_AVATAR_KEY = 'tr-avatar-v1';
let TR_AVATAR = trAvatarLoad();

function trAvatarLoad() {
  try {
    const saved = JSON.parse(localStorage.getItem(TR_AVATAR_KEY) || 'null');
    return { ...TR_AVATAR_DEFAULT, ...(saved || {}) };
  } catch (e) { return { ...TR_AVATAR_DEFAULT }; }
}
function trAvatarSave() {
  try { localStorage.setItem(TR_AVATAR_KEY, JSON.stringify(TR_AVATAR)); } catch (e) {}
}
function trAvatarMarkup(extra = '', size = '') {
  const costume = TR_AVATAR_COSTUMES.some(x => x.id === TR_AVATAR.costume) ? TR_AVATAR.costume : 'explorer';
  const face = TR_AVATAR_FACES.some(x => x.id === TR_AVATAR.face) ? TR_AVATAR.face : 'smile';
  const color = /^#[0-9a-f]{6}$/i.test(TR_AVATAR.color) ? TR_AVATAR.color : TR_AVATAR_DEFAULT.color;
  const skin = /^#[0-9a-f]{6}$/i.test(TR_AVATAR.skin) ? TR_AVATAR.skin : TR_AVATAR_DEFAULT.skin;
  return '<svg class="tr-avatar ' + extra + '" viewBox="0 0 100 120" role="img" aria-label="Avatar di ' + trEscape(TR_AVATAR.name || 'Viaggiatore') + '" style="--avatar-color:' + color + ';--avatar-skin:' + skin + (size ? ';--avatar-size:' + size : '') + '"><use href="#avatar-base"/><use href="#costume-' + costume + '"/><use href="#face-' + face + '"/></svg>';
}
function trAvatarOpen() {
  trStopEverything(); trMapLeave();
  const costumes = TR_AVATAR_COSTUMES.map(x => '<button type="button" class="tr-avatar-choice ' + (x.id === TR_AVATAR.costume ? 'is-selected' : '') + '" data-costume="' + x.id + '" aria-pressed="' + (x.id === TR_AVATAR.costume) + '">' + trAvatarMarkup('', '72px') + '<span>' + x.name + '</span></button>').join('');
  const faces = TR_AVATAR_FACES.map(x => '<button type="button" class="tr-face-choice ' + (x.id === TR_AVATAR.face ? 'is-selected' : '') + '" data-face="' + x.id + '" aria-pressed="' + (x.id === TR_AVATAR.face) + '">' + x.name + '</button>').join('');
  app.innerHTML = '<main class="tr-profile"><button type="button" class="bk" onclick="trAvatarBack()">‹ Torna alla mappa</button><header><div>' + trAvatarMarkup('tr-profile-preview', '180px') + '</div><span class="tr-profile-eyebrow">IL TUO PERSONAGGIO</span><h1>Il tuo avatar</h1><p>Personalizzalo e portalo con te sulla mappa.</p></header><label class="tr-avatar-name">Come ti chiami?<input id="tr-avatar-name" maxlength="18" value="' + trEscape(TR_AVATAR.name || '') + '" autocomplete="nickname" placeholder="Il tuo nome"></label><fieldset class="tr-avatar-field"><legend>Scegli il costume</legend><div class="tr-avatar-choices">' + costumes + '</div></fieldset><fieldset class="tr-avatar-field"><legend>Scegli il volto</legend><div class="tr-face-choices">' + faces + '</div></fieldset><label class="tr-avatar-color">Colore del costume <input id="tr-avatar-color" type="color" value="' + trEscape(TR_AVATAR.color) + '"></label><label class="tr-avatar-color">Carnagione <input id="tr-avatar-skin" type="color" value="' + trEscape(TR_AVATAR.skin) + '"></label><p class="tr-avatar-saved" role="status" aria-live="polite">Le modifiche si salvano automaticamente.</p></main>';
  document.getElementById('tr-topbar').hidden = true;
  app.querySelector('#tr-avatar-name').addEventListener('input', e => { TR_AVATAR.name = e.target.value.trim().slice(0, 18) || 'Viaggiatore'; trAvatarSave(); trAvatarRefreshPreview(); });
  app.querySelector('#tr-avatar-color').addEventListener('input', e => { TR_AVATAR.color = e.target.value; trAvatarSave(); trAvatarRefreshPreview(); });
  app.querySelector('#tr-avatar-skin').addEventListener('input', e => { TR_AVATAR.skin = e.target.value; trAvatarSave(); trAvatarRefreshPreview(); });
  app.querySelectorAll('[data-costume]').forEach(b => b.addEventListener('click', () => { TR_AVATAR.costume = b.dataset.costume; trAvatarSave(); trAvatarOpen(); }));
  app.querySelectorAll('[data-face]').forEach(b => b.addEventListener('click', () => { TR_AVATAR.face = b.dataset.face; trAvatarSave(); trAvatarOpen(); }));
  window.scrollTo(0, 0);
}
function trAvatarRefreshPreview() {
  const preview = app.querySelector('.tr-profile-preview');
  if (preview) { const wrap = preview.parentElement; wrap.innerHTML = trAvatarMarkup('tr-profile-preview', '180px'); }
}
function trAvatarBack() { home(); }
