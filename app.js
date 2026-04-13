/* ==========================================================================
   VYBE — App Logic (MVP - Investor Ready)
   Real-world connection starts here ⚡
   ========================================================================== */

// ---- Translations ----
const TRANSLATIONS = {
  en: { greeting:'Hey Alex!', events:'events', nearYou:'happening near you tonight', searchPlaceholder:'Search events, people, vibes...', forYou:'For You', parties:'Parties', music:'Music', sports:'Sports', art:'Art', happeningNow:'Happening Now', comingUp:'Coming Up', seeAll:'See all', notifications:'Notifications', markRead:'Mark all read', createHangout:'🎉 Create a Hangout', whatsVibe:"What's the Vibe?", tellPeople:'Tell people what to expect', whereAt:'Where at?', when:'When?', category:'Category', letsGo:"Let's Go! 🚀", home:'Home', discover:'Discover', activity:'Activity', friendsTab:'Friends', profileTab:'Profile', yourActivity:'Your Activity', activitySub:"Everything you've been up to ⚡", eventsAttended:'Events Attended', eventsHosted:'Events Hosted', peopleMet:'People Met', recent:'Recent', yourPeople:'Your People', friendsSub:"Friends you've made through events 💫", editProfile:'Edit Profile', settings:'Settings', logout:'Log Out', nearbyEvents:'Nearby Events', searchArea:'Search this area...', messagesTitle:'Messages', messagesSub:'Chat with your event crew 💬', eventsLabel:'Events', friendsLabel:'Friends', join:'Join', joined:'✓ Joined', spotsLeft:'spots left' },
  es: { greeting:'¡Hola Alex!', events:'eventos', nearYou:'cerca de ti esta noche', searchPlaceholder:'Buscar eventos, personas, vibras...', forYou:'Para Ti', parties:'Fiestas', music:'Música', sports:'Deportes', art:'Arte', happeningNow:'Ahora Mismo', comingUp:'Próximamente', seeAll:'Ver todo', notifications:'Notificaciones', markRead:'Marcar leídas', createHangout:'🎉 Crear un Encuentro', whatsVibe:'¿Cuál es la Vibra?', tellPeople:'Dile a la gente qué esperar', whereAt:'¿Dónde?', when:'¿Cuándo?', category:'Categoría', letsGo:'¡Vamos! 🚀', home:'Inicio', discover:'Descubrir', activity:'Actividad', friendsTab:'Amigos', profileTab:'Perfil', yourActivity:'Tu Actividad', activitySub:'Todo lo que has hecho ⚡', eventsAttended:'Eventos Asistidos', eventsHosted:'Eventos Creados', peopleMet:'Personas Conocidas', recent:'Reciente', yourPeople:'Tu Gente', friendsSub:'Amigos que hiciste en eventos 💫', editProfile:'Editar Perfil', settings:'Ajustes', logout:'Cerrar Sesión', nearbyEvents:'Eventos Cercanos', searchArea:'Buscar en esta zona...', messagesTitle:'Mensajes', messagesSub:'Chatea con tu grupo 💬', eventsLabel:'Eventos', friendsLabel:'Amigos', join:'Unirse', joined:'✓ Unido', spotsLeft:'lugares' },
  fr: { greeting:'Salut Alex !', events:'événements', nearYou:'près de toi ce soir', searchPlaceholder:'Rechercher événements, personnes...', forYou:'Pour Toi', parties:'Fêtes', music:'Musique', sports:'Sports', art:'Art', happeningNow:'En Ce Moment', comingUp:'À Venir', seeAll:'Voir tout', notifications:'Notifications', markRead:'Tout marquer lu', createHangout:'🎉 Créer une Sortie', whatsVibe:"C'est quoi le Vibe ?", tellPeople:'Dis aux gens à quoi s\'attendre', whereAt:'Où ça ?', when:'Quand ?', category:'Catégorie', letsGo:'C\'est parti ! 🚀', home:'Accueil', discover:'Découvrir', activity:'Activité', friendsTab:'Amis', profileTab:'Profil', yourActivity:'Ton Activité', activitySub:'Tout ce que tu as fait ⚡', eventsAttended:'Événements', eventsHosted:'Organisés', peopleMet:'Personnes Rencontrées', recent:'Récent', yourPeople:'Tes Potes', friendsSub:'Amis rencontrés lors d\'événements 💫', editProfile:'Modifier le Profil', settings:'Paramètres', logout:'Déconnexion', nearbyEvents:'Événements Proches', searchArea:'Chercher dans cette zone...', messagesTitle:'Messages', messagesSub:'Discute avec ton groupe 💬', eventsLabel:'Événements', friendsLabel:'Amis', join:'Rejoindre', joined:'✓ Rejoint', spotsLeft:'places' },
  de: { greeting:'Hey Alex!', events:'Events', nearYou:'in deiner Nähe heute Abend', searchPlaceholder:'Events, Leute, Vibes suchen...', forYou:'Für Dich', parties:'Partys', music:'Musik', sports:'Sport', art:'Kunst', happeningNow:'Jetzt Live', comingUp:'Demnächst', seeAll:'Alle', notifications:'Benachrichtigungen', markRead:'Alle gelesen', createHangout:'🎉 Treffen Erstellen', whatsVibe:'Was ist der Vibe?', tellPeople:'Sag den Leuten, was sie erwartet', whereAt:'Wo?', when:'Wann?', category:'Kategorie', letsGo:'Los Geht\'s! 🚀', home:'Start', discover:'Entdecken', activity:'Aktivität', friendsTab:'Freunde', profileTab:'Profil', yourActivity:'Deine Aktivität', activitySub:'Alles, was du gemacht hast ⚡', eventsAttended:'Besucht', eventsHosted:'Organisiert', peopleMet:'Leute Getroffen', recent:'Kürzlich', yourPeople:'Deine Leute', friendsSub:'Freunde durch Events 💫', editProfile:'Profil Bearbeiten', settings:'Einstellungen', logout:'Abmelden', nearbyEvents:'Events in der Nähe', searchArea:'In dieser Gegend suchen...', messagesTitle:'Nachrichten', messagesSub:'Chatte mit deiner Crew 💬', eventsLabel:'Events', friendsLabel:'Freunde', join:'Beitreten', joined:'✓ Dabei', spotsLeft:'Plätze' },
  ja: { greeting:'やあ Alex！', events:'イベント', nearYou:'今夜の近くのイベント', searchPlaceholder:'イベント、人、バイブスを検索...', forYou:'おすすめ', parties:'パーティー', music:'音楽', sports:'スポーツ', art:'アート', happeningNow:'今起きてる', comingUp:'もうすぐ', seeAll:'すべて見る', notifications:'通知', markRead:'すべて既読', createHangout:'🎉 集まりを作る', whatsVibe:'どんなバイブ？', tellPeople:'みんなに伝えよう', whereAt:'場所は？', when:'いつ？', category:'カテゴリー', letsGo:'行こう！🚀', home:'ホーム', discover:'発見', activity:'活動', friendsTab:'友達', profileTab:'プロフィール', yourActivity:'あなたの活動', activitySub:'これまでの記録 ⚡', eventsAttended:'参加イベント', eventsHosted:'開催イベント', peopleMet:'出会った人', recent:'最近', yourPeople:'あなたの仲間', friendsSub:'イベントで出会った友達 💫', editProfile:'プロフィール編集', settings:'設定', logout:'ログアウト', nearbyEvents:'近くのイベント', searchArea:'このエリアを検索...', messagesTitle:'メッセージ', messagesSub:'クルーとチャット 💬', eventsLabel:'イベント', friendsLabel:'友達', join:'参加', joined:'✓ 参加中', spotsLeft:'席' },
  ko: { greeting:'안녕 Alex!', events:'이벤트', nearYou:'오늘 밤 근처에서', searchPlaceholder:'이벤트, 사람, 바이브 검색...', forYou:'추천', parties:'파티', music:'음악', sports:'스포츠', art:'아트', happeningNow:'지금 진행 중', comingUp:'곧 시작', seeAll:'전체 보기', notifications:'알림', markRead:'모두 읽음', createHangout:'🎉 모임 만들기', whatsVibe:'어떤 바이브?', tellPeople:'사람들에게 알려줘', whereAt:'어디서?', when:'언제?', category:'카테고리', letsGo:'가자! 🚀', home:'홈', discover:'발견', activity:'활동', friendsTab:'친구', profileTab:'프로필', yourActivity:'내 활동', activitySub:'지금까지의 기록 ⚡', eventsAttended:'참석 이벤트', eventsHosted:'주최 이벤트', peopleMet:'만난 사람', recent:'최근', yourPeople:'내 사람들', friendsSub:'이벤트에서 만난 친구 💫', editProfile:'프로필 편집', settings:'설정', logout:'로그아웃', nearbyEvents:'근처 이벤트', searchArea:'이 지역 검색...', messagesTitle:'메시지', messagesSub:'크루와 채팅 💬', eventsLabel:'이벤트', friendsLabel:'친구', join:'참가', joined:'✓ 참가중', spotsLeft:'석' },
  pt: { greeting:'Oi Alex!', events:'eventos', nearYou:'perto de você esta noite', searchPlaceholder:'Buscar eventos, pessoas, vibes...', forYou:'Pra Você', parties:'Festas', music:'Música', sports:'Esportes', art:'Arte', happeningNow:'Acontecendo Agora', comingUp:'Em Breve', seeAll:'Ver tudo', notifications:'Notificações', markRead:'Marcar lidas', createHangout:'🎉 Criar Encontro', whatsVibe:'Qual é a Vibe?', tellPeople:'Diga o que esperar', whereAt:'Onde?', when:'Quando?', category:'Categoria', letsGo:'Bora! 🚀', home:'Início', discover:'Descobrir', activity:'Atividade', friendsTab:'Amigos', profileTab:'Perfil', yourActivity:'Sua Atividade', activitySub:'Tudo que você fez ⚡', eventsAttended:'Eventos', eventsHosted:'Organizados', peopleMet:'Pessoas Conhecidas', recent:'Recente', yourPeople:'Sua Galera', friendsSub:'Amigos de eventos 💫', editProfile:'Editar Perfil', settings:'Configurações', logout:'Sair', nearbyEvents:'Eventos Próximos', searchArea:'Buscar nesta área...', messagesTitle:'Mensagens', messagesSub:'Converse com sua galera 💬', eventsLabel:'Eventos', friendsLabel:'Amigos', join:'Entrar', joined:'✓ Entrou', spotsLeft:'vagas' },
  ar: { greeting:'!أهلاً Alex', events:'فعاليات', nearYou:'بالقرب منك الليلة', searchPlaceholder:'ابحث عن فعاليات، أشخاص...', forYou:'لك', parties:'حفلات', music:'موسيقى', sports:'رياضة', art:'فن', happeningNow:'يحدث الآن', comingUp:'قريباً', seeAll:'عرض الكل', notifications:'إشعارات', markRead:'تحديد الكل كمقروء', createHangout:'🎉 إنشاء لقاء', whatsVibe:'ما هو الـ Vibe؟', tellPeople:'أخبر الناس ماذا يتوقعون', whereAt:'أين؟', when:'متى؟', category:'الفئة', letsGo:'يلا! 🚀', home:'الرئيسية', discover:'اكتشف', activity:'النشاط', friendsTab:'الأصدقاء', profileTab:'الملف', yourActivity:'نشاطك', activitySub:'كل ما قمت به ⚡', eventsAttended:'فعاليات حضرتها', eventsHosted:'فعاليات نظمتها', peopleMet:'أشخاص قابلتهم', recent:'الأخيرة', yourPeople:'أصدقاؤك', friendsSub:'أصدقاء من الفعاليات 💫', editProfile:'تعديل الملف', settings:'الإعدادات', logout:'خروج', nearbyEvents:'فعاليات قريبة', searchArea:'ابحث في المنطقة...', messagesTitle:'الرسائل', messagesSub:'تحدث مع مجموعتك 💬', eventsLabel:'فعاليات', friendsLabel:'الأصدقاء', join:'انضم', joined:'✓ منضم', spotsLeft:'أماكن' },
};

let currentLang = 'en';

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS.en[key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) el.placeholder = val;
  });
}

// ---- Mock Data ----
const AVATAR_COLORS = [
  'linear-gradient(135deg, #FF6B6B, #FF8E53)',
  'linear-gradient(135deg, #7C3AED, #A78BFA)',
  'linear-gradient(135deg, #06D6A0, #34E4B8)',
  'linear-gradient(135deg, #FF3B8B, #FF6B6B)',
  'linear-gradient(135deg, #38BDF8, #818CF8)',
  'linear-gradient(135deg, #FBBF24, #FF8E53)',
];

const CATEGORY_EMOJIS = { party:'🎉', music:'🎵', sports:'⚽', gaming:'🎮', art:'🎨', outdoor:'🏔️', food:'🍕', study:'📚' };

const LIVE_EVENTS = [
  { id:'live-1', title:'Sunset Rooftop Party', location:'Sky Lounge, Downtown', image:'images/rooftop-party.png', attendees:47, category:'party', lat:34.0522, lng:-118.2537, isLive:true, attendeeAvatars:[{initial:'J',color:AVATAR_COLORS[0]},{initial:'M',color:AVATAR_COLORS[1]},{initial:'S',color:AVATAR_COLORS[2]}] },
  { id:'live-2', title:'Indie Night @ The Basement', location:'The Basement, Arts District', image:'images/music-festival.png', attendees:32, category:'music', lat:34.0404, lng:-118.2362, isLive:true, attendeeAvatars:[{initial:'K',color:AVATAR_COLORS[3]},{initial:'R',color:AVATAR_COLORS[4]},{initial:'T',color:AVATAR_COLORS[5]}] },
  { id:'live-3', title:'LAN Party: Valorant Tournament', location:'Byte Café, University Ave', image:'images/gaming-session.png', attendees:24, category:'gaming', lat:34.0689, lng:-118.2518, isLive:true, attendeeAvatars:[{initial:'D',color:AVATAR_COLORS[1]},{initial:'N',color:AVATAR_COLORS[0]},{initial:'A',color:AVATAR_COLORS[4]}] },
];

const UPCOMING_EVENTS = [
  { id:'event-1', title:'Golden Hour Hike & Picnic 🌅', description:'Easy-going trail hike with a sunset picnic at the top. Bring your own snacks and a blanket! Dogs welcome 🐕', location:'Griffith Park Trailhead', distance:'2.3 mi', date:'Tomorrow', time:'5:30 PM', image:'images/hiking-adventure.png', category:'outdoor', categoryLabel:'🏔️ Outdoor', attendees:18, spotsLeft:7, lat:34.1365, lng:-118.2943, host:{name:'Maya R.',initial:'M',color:AVATAR_COLORS[2]}, attendeeAvatars:[{initial:'L',color:AVATAR_COLORS[0]},{initial:'K',color:AVATAR_COLORS[3]},{initial:'J',color:AVATAR_COLORS[1]}] },
  { id:'event-2', title:'Block Party: Summer Kickoff 🎉', description:'DJs, food trucks, games, and good vibes. Wear something colorful — we\'re going all out for summer!', location:'Elm Street Block', distance:'0.8 mi', date:'Sat, Apr 19', time:'7:00 PM', image:'images/rooftop-party.png', category:'party', categoryLabel:'🎉 Party', attendees:83, spotsLeft:null, lat:34.0580, lng:-118.2780, host:{name:'DanTheMan',initial:'D',color:AVATAR_COLORS[5]}, attendeeAvatars:[{initial:'A',color:AVATAR_COLORS[4]},{initial:'R',color:AVATAR_COLORS[2]},{initial:'T',color:AVATAR_COLORS[0]},{initial:'E',color:AVATAR_COLORS[1]}] },
  { id:'event-3', title:'Open Mic Night — All Genres Welcome', description:'Poets, rappers, singers, comedians — if you\'ve got something to share, this is your stage. No judgment, just vibes.', location:'The Cozy Bean', distance:'1.1 mi', date:'Sun, Apr 20', time:'8:00 PM', image:'images/music-festival.png', category:'music', categoryLabel:'🎵 Music', attendees:29, spotsLeft:11, lat:34.0475, lng:-118.2610, host:{name:'Priya K.',initial:'P',color:AVATAR_COLORS[1]}, attendeeAvatars:[{initial:'C',color:AVATAR_COLORS[3]},{initial:'N',color:AVATAR_COLORS[5]}] },
  { id:'event-4', title:'Pickup Basketball — 3v3 Tournament 🏀', description:'Show up, get drafted, and ball out. All skill levels. Winners get bragging rights (and tacos).', location:'Lincoln Park Courts', distance:'1.5 mi', date:'Mon, Apr 21', time:'4:00 PM', image:'images/basketball-game.png', category:'sports', categoryLabel:'⚽ Sports', attendees:22, spotsLeft:2, lat:34.0668, lng:-118.2200, host:{name:'Jay Park',initial:'J',color:AVATAR_COLORS[0]}, attendeeAvatars:[{initial:'B',color:AVATAR_COLORS[4]},{initial:'W',color:AVATAR_COLORS[2]},{initial:'S',color:AVATAR_COLORS[5]}] },
  { id:'event-5', title:'Paint & Sip: Abstract Night 🎨', description:'No skills needed — just show up and create something weird and beautiful. Drinks and canvases provided.', location:'Palette Studio', distance:'3.2 mi', date:'Tue, Apr 22', time:'7:30 PM', image:'images/art-workshop.png', category:'art', categoryLabel:'🎨 Art', attendees:15, spotsLeft:5, lat:34.0300, lng:-118.2700, host:{name:'Luna M.',initial:'L',color:AVATAR_COLORS[3]}, attendeeAvatars:[{initial:'F',color:AVATAR_COLORS[0]},{initial:'G',color:AVATAR_COLORS[1]}] },
];

const ALL_MAP_EVENTS = [...LIVE_EVENTS, ...UPCOMING_EVENTS];

const FRIENDS = [
  { name:'Maya Rodriguez', initial:'M', color:AVATAR_COLORS[2], mutual:'5 events together', badge:'Close' },
  { name:'Kai Johnson', initial:'K', color:AVATAR_COLORS[0], mutual:'3 events together', badge:null },
  { name:'Priya Kapoor', initial:'P', color:AVATAR_COLORS[1], mutual:'4 events together', badge:'Close' },
  { name:'Dan Torres', initial:'D', color:AVATAR_COLORS[5], mutual:'2 events together', badge:null },
  { name:'Luna Martinez', initial:'L', color:AVATAR_COLORS[3], mutual:'6 events together', badge:'Bestie' },
  { name:'Jay Park', initial:'J', color:AVATAR_COLORS[0], mutual:'3 events together', badge:null },
  { name:'Sofia Chen', initial:'S', color:AVATAR_COLORS[4], mutual:'1 event together', badge:'New' },
];

const CHATS = [
  { name:'Block Party Crew 🎉', initial:'🎉', color:AVATAR_COLORS[3], lastMsg:'Dan: Who\'s bringing the speaker?', time:'2m', unread:3, online:true, isGroup:true },
  { name:'Maya Rodriguez', initial:'M', color:AVATAR_COLORS[2], lastMsg:'See you at the hike tmrw! 🥾', time:'15m', unread:1, online:true },
  { name:'Priya Kapoor', initial:'P', color:AVATAR_COLORS[1], lastMsg:'That open mic was 🔥🔥🔥', time:'1h', unread:0, online:true },
  { name:'Hike Gang 🏔️', initial:'🏔️', color:AVATAR_COLORS[2], lastMsg:'Maya: Don\'t forget sunscreen!', time:'2h', unread:0, online:false, isGroup:true },
  { name:'Jay Park', initial:'J', color:AVATAR_COLORS[0], lastMsg:'GG bro, rematch Saturday?', time:'5h', unread:0, online:false },
  { name:'Luna Martinez', initial:'L', color:AVATAR_COLORS[3], lastMsg:'Sent you the canvas designs ✨', time:'1d', unread:0, online:false },
  { name:'Dan Torres', initial:'D', color:AVATAR_COLORS[5], lastMsg:'Thanks for coming man!', time:'2d', unread:0, online:false },
];

// ---- DOM References ----
const filterList = document.getElementById('filter-list');
const liveEventsScroll = document.getElementById('live-events-scroll');
const eventFeed = document.getElementById('event-feed');
const fabCreate = document.getElementById('fab-create');
const modalOverlay = document.getElementById('modal-overlay');
const createModal = document.getElementById('create-modal');
const modalTags = document.getElementById('modal-tags');
const btnCreateEvent = document.getElementById('btn-create-event');
const toast = document.getElementById('toast');
const searchInput = document.getElementById('search-input');
const bottomNav = document.getElementById('bottom-nav');
const eventDetailOverlay = document.getElementById('event-detail-overlay');
const eventDetailContent = document.getElementById('event-detail-content');

// ---- State ----
let activeFilter = 'all';
let activeTab = 'home';
let selectedModalCategory = null;
let savedEvents = new Set(['event-2']);
let joinedEvents = new Set(['event-2']);
let discoverMap = null;
let mapMarkers = [];
let mapInitialized = false;

// ---- Init ----
function init() {
  renderLiveEvents();
  renderEventFeed();
  renderFriends();
  renderChats();
  bindFilterTags();
  bindFAB();
  bindModalTags();
  bindCreateEvent();
  bindBottomNav();
  bindSearch();
  bindNotifications();
  bindMessages();
  bindTranslation();
  bindProfileActions();
  bindSeeAll();
  bindProfileNav();
  bindEventDetailModal();
  bindFriendSearch();
  applyTranslations();
}

// ---- Screen Switching ----
function switchScreen(tab) {
  if (activeTab === tab) return;
  activeTab = tab;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('screen--active'));
  const target = document.getElementById(`screen-${tab}`);
  if (target) target.classList.add('screen--active');
  if (tab === 'discover' && !mapInitialized) { setTimeout(() => initMap(), 50); mapInitialized = true; }
  if (tab === 'discover' && discoverMap) setTimeout(() => discoverMap.invalidateSize(), 50);
  fabCreate.style.display = (tab === 'discover' || tab === 'messages') ? 'none' : '';
  // Close any open panels
  closeNotifPanel();
  closeLangDropdown();
}

// ---- Translation ----
function bindTranslation() {
  const btn = document.getElementById('btn-translate');
  const dropdown = document.getElementById('lang-dropdown');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('lang-dropdown--open');
    closeNotifPanel();
  });

  dropdown.addEventListener('click', (e) => {
    const opt = e.target.closest('.lang-option');
    if (!opt) return;
    currentLang = opt.dataset.lang;
    dropdown.querySelectorAll('.lang-option').forEach(o => o.classList.remove('lang-option--active'));
    opt.classList.add('lang-option--active');
    applyTranslations();
    renderEventFeed(activeFilter, searchInput.value);
    closeLangDropdown();
    showToast('🌍', `Language: ${opt.textContent.trim()}`);
  });

  document.addEventListener('click', () => closeLangDropdown());
}

function closeLangDropdown() {
  document.getElementById('lang-dropdown').classList.remove('lang-dropdown--open');
}

// ---- Notifications ----
function bindNotifications() {
  const btn = document.getElementById('btn-notifications');
  const panel = document.getElementById('notif-panel');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.toggle('notif-panel--open');
    closeLangDropdown();
  });

  document.getElementById('notif-clear').addEventListener('click', () => {
    panel.querySelectorAll('.notif-item--unread').forEach(n => n.classList.remove('notif-item--unread'));
    const badge = document.querySelector('.notification-badge');
    if (badge) badge.style.display = 'none';
    showToast('✅', 'All caught up!');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && e.target.id !== 'btn-notifications' && !e.target.closest('#btn-notifications')) {
      closeNotifPanel();
    }
  });

  // Notification items clickable
  panel.querySelectorAll('.notif-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.remove('notif-item--unread');
      showToast('👀', 'Opened notification');
      closeNotifPanel();
    });
  });
}

function closeNotifPanel() {
  document.getElementById('notif-panel').classList.remove('notif-panel--open');
}

// ---- Messages ----
function bindMessages() {
  document.getElementById('btn-messages').addEventListener('click', () => {
    // Switch to messages screen
    const items = bottomNav.querySelectorAll('.bottom-nav__item');
    items.forEach(i => i.classList.remove('bottom-nav__item--active'));
    switchScreen('messages');
    closeNotifPanel();
    closeLangDropdown();
  });
}

function renderChats() {
  const list = document.getElementById('chat-list');
  if (!list) return;
  list.innerHTML = CHATS.map(chat => `
    <div class="chat-item" data-chat-name="${chat.name}">
      <div class="chat-item__avatar" style="background: ${chat.color}">
        ${chat.isGroup ? chat.initial : chat.initial}
        ${chat.online ? '<span class="chat-item__online"></span>' : ''}
      </div>
      <div class="chat-item__info">
        <div class="chat-item__name">${chat.name}</div>
        <div class="chat-item__last">${chat.lastMsg}</div>
      </div>
      <div class="chat-item__meta">
        <span class="chat-item__time">${chat.time}</span>
        ${chat.unread ? `<span class="chat-item__unread">${chat.unread}</span>` : ''}
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.chat-item').forEach(item => {
    item.addEventListener('click', () => {
      const name = item.dataset.chatName;
      showToast('💬', `Opening chat with ${name}...`);
    });
  });
}

// ---- Profile Nav Avatar ----
function bindProfileNav() {
  document.getElementById('btn-profile-nav').addEventListener('click', () => {
    const items = bottomNav.querySelectorAll('.bottom-nav__item');
    items.forEach(i => i.classList.remove('bottom-nav__item--active'));
    bottomNav.querySelector('[data-tab="profile"]').classList.add('bottom-nav__item--active');
    switchScreen('profile');
  });
}

// ---- Profile Actions ----
function bindProfileActions() {
  document.getElementById('btn-edit-profile').addEventListener('click', () => {
    showToast('✏️', 'Profile editor opening...');
  });
  document.getElementById('btn-settings').addEventListener('click', () => {
    showToast('⚙️', 'Settings panel opening...');
  });
  document.getElementById('btn-logout').addEventListener('click', () => {
    showToast('👋', 'Logged out. See you soon!');
  });
}

// ---- See All Links ----
function bindSeeAll() {
  document.getElementById('see-all-live').addEventListener('click', (e) => {
    e.preventDefault();
    // Switch to discover (map) to see all live events
    const items = bottomNav.querySelectorAll('.bottom-nav__item');
    items.forEach(i => i.classList.remove('bottom-nav__item--active'));
    bottomNav.querySelector('[data-tab="discover"]').classList.add('bottom-nav__item--active');
    switchScreen('discover');
    showToast('🗺️', 'Showing all live events on the map');
  });

  document.getElementById('see-all-upcoming').addEventListener('click', (e) => {
    e.preventDefault();
    // Reset filters and scroll to top of feed
    activeFilter = 'all';
    filterList.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('filter-tag--active'));
    filterList.querySelector('[data-filter="all"]').classList.add('filter-tag--active');
    renderEventFeed('all', '');
    searchInput.value = '';
    document.getElementById('upcoming-events').scrollIntoView({ behavior: 'smooth' });
    showToast('✨', 'Showing all upcoming events');
  });
}

// ---- Event Detail Modal ----
function bindEventDetailModal() {
  eventDetailOverlay.addEventListener('click', (e) => {
    if (e.target === eventDetailOverlay) closeEventDetail();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && eventDetailOverlay.classList.contains('modal-overlay--visible')) closeEventDetail();
  });
}

function openEventDetail(eventId) {
  const event = [...UPCOMING_EVENTS, ...LIVE_EVENTS].find(e => e.id === eventId);
  if (!event) return;
  const isJoined = joinedEvents.has(event.id);
  const catColor = { party:'rgba(255,59,139,0.8)', music:'rgba(124,58,237,0.8)', sports:'rgba(6,214,160,0.8)', gaming:'rgba(56,189,248,0.8)', art:'rgba(255,107,107,0.8)', outdoor:'rgba(251,191,36,0.8)' };

  const moreAvatars = [];
  for (let i = 0; i < 8; i++) moreAvatars.push({ initial: String.fromCharCode(65 + i), color: AVATAR_COLORS[i % AVATAR_COLORS.length] });

  eventDetailContent.innerHTML = `
    <img class="event-detail__image" src="${event.image}" alt="${event.title}">
    <span class="event-detail__badge" style="background:${catColor[event.category] || 'var(--surface)'}">
      ${event.categoryLabel || (CATEGORY_EMOJIS[event.category] + ' ' + capitalize(event.category))}
    </span>
    <h2 class="event-detail__title">${event.title}</h2>
    <div class="event-detail__row">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      ${event.date || 'Live Now'} ${event.time ? '· ' + event.time : ''}
      ${event.spotsLeft != null && event.spotsLeft <= 5 ? `<span style="color:var(--hot-pink);margin-left:auto;">🔥 ${event.spotsLeft} ${t('spotsLeft')}</span>` : ''}
    </div>
    <div class="event-detail__row">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      ${event.location} ${event.distance ? '· ' + event.distance : ''}
    </div>
    <div class="event-detail__row">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ${event.attendees} people going
    </div>
    ${event.description ? `<div class="event-detail__desc">${event.description}</div>` : ''}
    ${event.host ? `
      <div class="event-detail__host">
        <div class="event-detail__host-avatar" style="background:${event.host.color}">${event.host.initial}</div>
        <div class="event-detail__host-info">
          <div class="event-detail__host-name">${event.host.name}</div>
          <div class="event-detail__host-label">Organizer</div>
        </div>
      </div>
    ` : ''}
    <div class="event-detail__attendees-section">
      <div class="event-detail__attendees-title">Who's going</div>
      <div class="event-detail__attendees-grid">
        ${(event.attendeeAvatars || []).concat(moreAvatars).slice(0, 10).map(a => `
          <div class="event-detail__attendee" style="background:${a.color}">${a.initial}</div>
        `).join('')}
      </div>
    </div>
    <div class="event-detail__actions">
      <button class="event-detail__join ${isJoined ? 'event-detail__join--joined' : ''}" id="detail-join-btn" data-event-id="${event.id}">
        ${isJoined ? t('joined') : t('join')}
      </button>
      <button class="event-detail__share" id="detail-share-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
      </button>
    </div>
  `;

  // Bind join button
  document.getElementById('detail-join-btn').addEventListener('click', () => {
    const id = event.id;
    const btn = document.getElementById('detail-join-btn');
    if (joinedEvents.has(id)) {
      joinedEvents.delete(id);
      btn.classList.remove('event-detail__join--joined');
      btn.textContent = t('join');
      showToast('👋', 'Left the event');
    } else {
      joinedEvents.add(id);
      btn.classList.add('event-detail__join--joined');
      btn.textContent = t('joined');
      showToast('🎉', "You're in! See you there!");
    }
    renderEventFeed(activeFilter, searchInput.value);
  });

  // Bind share button
  document.getElementById('detail-share-btn').addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({ title: event.title, text: event.description || 'Check out this event on Vybe!', url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => showToast('📋', 'Link copied to clipboard!'));
    }
  });

  eventDetailOverlay.classList.add('modal-overlay--visible');
  document.body.style.overflow = 'hidden';
}

function closeEventDetail() {
  eventDetailOverlay.classList.remove('modal-overlay--visible');
  document.body.style.overflow = '';
}

// ---- Friend Search ----
function bindFriendSearch() {
  const input = document.getElementById('friends-search-input');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    renderFriends(q);
  });
}

// ---- Map ----
function initMap() {
  discoverMap = L.map('discover-map', { center:[34.055,-118.255], zoom:13, zoomControl:true, attributionControl:true });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains:'abcd', maxZoom:19,
  }).addTo(discoverMap);
  discoverMap.zoomControl.setPosition('bottomleft');
  addMapMarkers();
  renderMapSheet();
  bindMapFilters();
  document.getElementById('map-recenter').addEventListener('click', () => {
    discoverMap.flyTo([34.055,-118.255], 13, {duration:0.5});
  });
  document.getElementById('map-sheet-handle').addEventListener('click', () => {
    document.getElementById('map-sheet').classList.toggle('map-sheet--expanded');
  });
}

function createMarkerIcon(category, isLive) {
  const emoji = CATEGORY_EMOJIS[category] || '📍';
  return L.divIcon({
    className:'map-marker-wrapper',
    html:`<div class="map-marker map-marker--${category}${isLive?' map-marker--live':''}"><span class="map-marker__inner">${emoji}</span></div>`,
    iconSize:[40,40], iconAnchor:[20,40], popupAnchor:[0,-42],
  });
}

function addMapMarkers(filter='all') {
  mapMarkers.forEach(m => discoverMap.removeLayer(m));
  mapMarkers = [];
  let events = filter === 'all' ? ALL_MAP_EVENTS : ALL_MAP_EVENTS.filter(e => e.category === filter);
  events.forEach(event => {
    if (!event.lat || !event.lng) return;
    const marker = L.marker([event.lat,event.lng], {icon:createMarkerIcon(event.category,event.isLive)});
    marker.bindPopup(`
      <div class="popup-card">
        <img class="popup-card__image" src="${event.image}" alt="${event.title}">
        <div class="popup-card__body">
          <div class="popup-card__category">${event.isLive?'🔴 LIVE · ':''}${event.categoryLabel||(CATEGORY_EMOJIS[event.category]+' '+capitalize(event.category))}</div>
          <div class="popup-card__title">${event.title}</div>
          <div class="popup-card__meta">📍 ${event.location} · ${event.attendees} going</div>
          <button class="popup-card__btn" onclick="handleMapJoin('${event.id}')">${event.isLive?'Join Live 🔴':'Join Event'}</button>
        </div>
      </div>
    `, {maxWidth:260,minWidth:220,closeButton:true});
    marker.on('click', () => highlightMapCard(event.id));
    marker.addTo(discoverMap);
    mapMarkers.push(marker);
  });
  const countEl = document.getElementById('map-event-count');
  if (countEl) countEl.textContent = `${events.length} ${t('events')}`;
}

function renderMapSheet(filter='all') {
  const list = document.getElementById('map-event-list');
  let events = filter === 'all' ? ALL_MAP_EVENTS : ALL_MAP_EVENTS.filter(e => e.category === filter);
  list.innerHTML = events.map(event => `
    <div class="map-event-card" data-map-event="${event.id}" onclick="flyToEvent('${event.id}')">
      <img class="map-event-card__image" src="${event.image}" alt="${event.title}" loading="lazy">
      <div class="map-event-card__body">
        <div class="map-event-card__cat">${event.isLive?'🔴 LIVE':(event.date||capitalize(event.category))}</div>
        <div class="map-event-card__title">${event.title}</div>
        <div class="map-event-card__meta">📍 ${event.location}</div>
      </div>
    </div>
  `).join('');
}

function highlightMapCard(eventId) {
  document.querySelectorAll('.map-event-card').forEach(c => c.classList.remove('map-event-card--active'));
  const card = document.querySelector(`[data-map-event="${eventId}"]`);
  if (card) { card.classList.add('map-event-card--active'); card.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'}); }
}

window.handleMapJoin = function(eventId) { showToast('🎉', "You're in! See you there!"); };
window.flyToEvent = function(eventId) {
  const event = ALL_MAP_EVENTS.find(e => e.id === eventId);
  if (event && event.lat) {
    discoverMap.flyTo([event.lat,event.lng], 15, {duration:0.4});
    mapMarkers.forEach(m => { const p = m.getLatLng(); if (Math.abs(p.lat-event.lat)<0.0001 && Math.abs(p.lng-event.lng)<0.0001) m.openPopup(); });
    highlightMapCard(eventId);
  }
};

function bindMapFilters() {
  document.getElementById('map-filters').addEventListener('click', (e) => {
    const chip = e.target.closest('.map-chip');
    if (!chip) return;
    document.querySelectorAll('.map-chip').forEach(c => c.classList.remove('map-chip--active'));
    chip.classList.add('map-chip--active');
    addMapMarkers(chip.dataset.cat);
    renderMapSheet(chip.dataset.cat);
  });
}

// ---- Render: Home ----
function renderLiveEvents() {
  liveEventsScroll.innerHTML = LIVE_EVENTS.map(event => `
    <article class="live-card" data-event-id="${event.id}" tabindex="0">
      <img class="live-card__image" src="${event.image}" alt="${event.title}" loading="lazy">
      <div class="live-card__overlay"></div>
      <div class="live-card__badge"><span class="dot"></span> LIVE</div>
      <div class="live-card__content">
        <h3 class="live-card__title">${event.title}</h3>
        <p class="live-card__meta">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${event.location}
        </p>
      </div>
      <div class="live-card__attendees">
        ${event.attendeeAvatars.map(a => `<div class="live-card__attendee-dot" style="background:${a.color}">${a.initial}</div>`).join('')}
        <span class="live-card__attendee-count">+${event.attendees}</span>
      </div>
    </article>
  `).join('');

  liveEventsScroll.querySelectorAll('.live-card').forEach(card => {
    card.addEventListener('click', () => openEventDetail(card.dataset.eventId));
  });
}

function renderEventFeed(filter='all', searchQuery='') {
  let events = UPCOMING_EVENTS;
  if (filter !== 'all') events = events.filter(e => e.category === filter);
  if (searchQuery) { const q = searchQuery.toLowerCase(); events = events.filter(e => e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q) || e.location.toLowerCase().includes(q) || e.category.toLowerCase().includes(q)); }

  if (events.length === 0) {
    eventFeed.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--text-tertiary);"><div style="font-size:2.5rem;margin-bottom:0.5rem;">🤷</div><p style="font-family:var(--font-display);font-weight:600;font-size:1rem;color:var(--text-secondary);margin-bottom:0.25rem;">No vibes found</p><p style="font-size:0.8125rem;">Try a different filter or create your own event!</p></div>`;
    return;
  }

  eventFeed.innerHTML = events.map(event => {
    const isSaved = savedEvents.has(event.id);
    const isJoined = joinedEvents.has(event.id);
    return `
      <article class="event-card" data-event-id="${event.id}" id="${event.id}">
        <div class="event-card__image-wrap">
          <img class="event-card__image" src="${event.image}" alt="${event.title}" loading="lazy">
          <div class="event-card__image-overlay"></div>
          <span class="event-card__category event-card__category--${event.category}">${event.categoryLabel}</span>
          <button class="event-card__save ${isSaved?'event-card__save--saved':''}" data-save-id="${event.id}" aria-label="${isSaved?'Unsave':'Save'} event">
            <svg viewBox="0 0 24 24" fill="${isSaved?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          </button>
        </div>
        <div class="event-card__body">
          <div class="event-card__date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${event.date} · ${event.time}
            ${event.spotsLeft!=null && event.spotsLeft<=5 ? `<span style="color:var(--hot-pink);margin-left:auto;">🔥 ${event.spotsLeft} ${t('spotsLeft')}</span>` : ''}
          </div>
          <h3 class="event-card__title">${event.title}</h3>
          <p class="event-card__description">${event.description}</p>
          <div class="event-card__footer">
            <div class="event-card__attendees-row">
              <div class="attendee-stack">${event.attendeeAvatars.map(a => `<div class="attendee-avatar" style="background:${a.color}">${a.initial}</div>`).join('')}</div>
              <span class="attendee-count">${event.attendees} going</span>
            </div>
            <button class="event-card__join-btn ${isJoined?'event-card__join-btn--joined':''}" data-join-id="${event.id}">${isJoined ? t('joined') : t('join')}</button>
          </div>
          <div class="event-card__location" style="margin-top:0.5rem;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${event.location} · ${event.distance}
          </div>
        </div>
      </article>`;
  }).join('');
  bindEventCardActions();
}

// ---- Render: Friends ----
function renderFriends(searchQuery='') {
  const list = document.getElementById('friend-list');
  if (!list) return;
  let friends = FRIENDS;
  if (searchQuery) friends = friends.filter(f => f.name.toLowerCase().includes(searchQuery));
  list.innerHTML = friends.map(f => `
    <div class="friend-card" data-friend-name="${f.name}">
      <div class="friend-card__avatar" style="background:${f.color}">${f.initial}</div>
      <div class="friend-card__info">
        <div class="friend-card__name">${f.name}</div>
        <div class="friend-card__mutual">${f.mutual}</div>
      </div>
      ${f.badge ? `<span class="friend-card__badge">${f.badge}</span>` : ''}
    </div>
  `).join('');

  list.querySelectorAll('.friend-card').forEach(card => {
    card.addEventListener('click', () => {
      showToast('👤', `Viewing ${card.dataset.friendName}'s profile`);
    });
  });
}

// ---- Event Handlers ----
function bindFilterTags() {
  filterList.addEventListener('click', (e) => {
    const tag = e.target.closest('.filter-tag');
    if (!tag) return;
    activeFilter = tag.dataset.filter;
    filterList.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('filter-tag--active'));
    tag.classList.add('filter-tag--active');
    renderEventFeed(activeFilter, searchInput.value);
    if (navigator.vibrate) navigator.vibrate(10);
  });
}

function bindEventCardActions() {
  // Save
  eventFeed.querySelectorAll('.event-card__save').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.saveId;
      if (savedEvents.has(id)) { savedEvents.delete(id); btn.classList.remove('event-card__save--saved'); btn.querySelector('svg').setAttribute('fill','none'); showToast('🔖','Removed from saved'); }
      else { savedEvents.add(id); btn.classList.add('event-card__save--saved'); btn.querySelector('svg').setAttribute('fill','currentColor'); showToast('🔖','Saved for later!'); btn.style.transform='scale(1.3)'; setTimeout(()=>btn.style.transform='',200); }
    });
  });
  // Join
  eventFeed.querySelectorAll('.event-card__join-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.joinId;
      if (joinedEvents.has(id)) { joinedEvents.delete(id); btn.classList.remove('event-card__join-btn--joined'); btn.textContent=t('join'); showToast('👋','Left the event'); }
      else { joinedEvents.add(id); btn.classList.add('event-card__join-btn--joined'); btn.textContent=t('joined'); showToast('🎉',"You're in! See you there!"); btn.style.transform='scale(1.1)'; setTimeout(()=>btn.style.transform='',200); }
    });
  });
  // Card body click → event detail
  eventFeed.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.event-card__save') || e.target.closest('.event-card__join-btn')) return;
      openEventDetail(card.dataset.eventId);
    });
  });
}

function bindFAB() {
  fabCreate.addEventListener('click', () => { modalOverlay.classList.add('modal-overlay--visible'); document.body.style.overflow='hidden'; });
  modalOverlay.addEventListener('click', (e) => { if (e.target===modalOverlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key==='Escape' && modalOverlay.classList.contains('modal-overlay--visible')) closeModal(); });
  let touchStartY=0;
  createModal.addEventListener('touchstart', (e)=>{touchStartY=e.touches[0].clientY;},{passive:true});
  createModal.addEventListener('touchmove', (e)=>{if (e.touches[0].clientY-touchStartY>100) closeModal();},{passive:true});
}

function closeModal() { modalOverlay.classList.remove('modal-overlay--visible'); document.body.style.overflow=''; }

function bindModalTags() {
  modalTags.addEventListener('click', (e) => {
    const tag = e.target.closest('.modal__tag');
    if (!tag) return;
    modalTags.querySelectorAll('.modal__tag').forEach(t => t.classList.remove('modal__tag--selected'));
    tag.classList.add('modal__tag--selected');
    selectedModalCategory = tag.dataset.category;
  });
}

function bindCreateEvent() {
  btnCreateEvent.addEventListener('click', () => {
    const title = document.getElementById('event-title').value.trim();
    if (!title) { showToast('⚠️','Give your hangout a name first!'); return; }
    showToast('🚀','Event created! Your crew is gonna love it.');
    closeModal();
    document.getElementById('event-title').value='';
    document.getElementById('event-description').value='';
    document.getElementById('event-location').value='';
    document.getElementById('event-date').value='';
    modalTags.querySelectorAll('.modal__tag').forEach(t => t.classList.remove('modal__tag--selected'));
    selectedModalCategory=null;
  });
}

function bindBottomNav() {
  const items = bottomNav.querySelectorAll('.bottom-nav__item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('bottom-nav__item--active'));
      item.classList.add('bottom-nav__item--active');
      switchScreen(item.dataset.tab);
    });
  });
}

function bindSearch() {
  let dt;
  searchInput.addEventListener('input', () => { clearTimeout(dt); dt=setTimeout(()=>renderEventFeed(activeFilter,searchInput.value),120); });
}

// ---- Toast ----
let toastTimer;
function showToast(icon, message) {
  clearTimeout(toastTimer);
  toast.querySelector('.toast__icon').textContent=icon;
  toast.querySelector('.toast__text').textContent=message;
  toast.classList.add('toast--visible');
  toastTimer=setTimeout(()=>toast.classList.remove('toast--visible'),1500);
}

function capitalize(str) { return str.charAt(0).toUpperCase()+str.slice(1); }

document.addEventListener('DOMContentLoaded', init);
