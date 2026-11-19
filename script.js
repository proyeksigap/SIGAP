const $=s=>document.querySelector(s),
$$=s=>[...document.querySelectorAll(s)];
const banks= {
  easy:[ ['Apa yang sebaiknya dilakukan terhadap botol plastik bekas?',
  'Mendaur ulang',
  'Membuangnya ke sungai',
  'Membakarnya',
  'Meninggalkannya di jalan',
  '♻️'],
  ['Sampah kulit pisang termasuk jenis apa?',
  'Organik',
  'Anorganik',
  'B3',
  'Elektronik',
  '🍌'],
  ['Apa manfaat menanam pohon?',
  'Menghasilkan oksigen',
  'Menambah polusi',
  'Mengotori air',
  'Mengurangi resapan',
  '🌳'],
  ['Bagaimana cara menghemat air?',
  'Menutup keran saat tidak digunakan',
  'Membiarkan keran terbuka',
  'Mandi sangat lama',
  'Membuang air bersih',
  '💧'],
  ['Ke mana membuang bungkus makanan?',
  'Tempat sampah',
  'Selokan',
  'Sungai',
  'Halaman',
  '🗑️'],
  ['Apa kepanjangan 3R?',
  'Reduce, Reuse, Recycle',
  'Read, Run, Rest',
  'Repair, Return, Remove',
  'Rain, River, Road',
  '🔁'],
  ['Contoh menggunakan kembali barang adalah...',
  'Memakai botol isi ulang',
  'Membuang tas layak pakai',
  'Membakar kertas',
  'Membeli barang sekali pakai',
  '🧴'],
  ['Apa manfaat kerja bakti?',
  'Lingkungan menjadi bersih',
  'Menambah sampah',
  'Merusak tanaman',
  'Mencemari air',
  '🧹'],
  ['Apa yang dilakukan saat keluar kelas?',
  'Mematikan lampu',
  'Menyalakan semua lampu',
  'Membiarkan kipas menyala',
  'Membuka keran',
  '💡'],
  ['Apa yang dapat dibuat dari daun kering?',
  'Kompos',
  'Plastik',
  'Kaca',
  'Logam',
  '🍂'],
  ['Mengapa tidak boleh membuang sampah ke sungai?',
  'Mencemari air dan menyumbat aliran',
  'Membuat air bersih',
  'Memberi makan semua ikan',
  'Menambah oksigen',
  '🏞️'],
  ['Tas apa yang baik untuk belanja?',
  'Tas kain pakai ulang',
  'Kantong sekali pakai',
  'Kantong yang dibuang ke jalan',
  'Plastik dibakar',
  '🛍️'],
  ['Bagaimana menjaga kebersihan sekolah?',
  'Piket dan buang sampah pada tempatnya',
  'Mencoret meja',
  'Merusak tanaman',
  'Membuang sampah sembarangan',
  '🏫'],
  ['Apa manfaat membawa tempat minum sendiri?',
  'Mengurangi botol sekali pakai',
  'Menambah sampah',
  'Mencemari tanah',
  'Memboroskan air',
  '🥤'],
  ['Tempat sampah organik biasanya berwarna...',
  'Hijau',
  'Merah muda',
  'Ungu',
  'Hitam pekat',
  '🍃'] ],
  medium:[ ['Mengapa sampah organik cocok dijadikan kompos?',
  'Dapat terurai dan menyuburkan tanah',
  'Tidak dapat terurai',
  'Mengandung plastik',
  'Selalu beracun',
  '🌱'],
  ['Mengapa sampah perlu dipilah dari sumbernya?',
  'Memudahkan pengolahan sesuai jenis',
  'Mencampur semua limbah',
  'Mempercepat penumpukan',
  'Membuat daur ulang sulit',
  '🧺'],
  ['Apa dampak pestisida berlebihan?',
  'Dapat mencemari tanah dan air',
  'Menghilangkan semua polusi',
  'Selalu aman bagi lebah',
  'Menambah oksigen',
  '🐝'],
  ['Bagaimana hutan membantu mengurangi banjir?',
  'Akar membantu menyerap air',
  'Pohon menghentikan hujan',
  'Daun mengubah air jadi tanah',
  'Hutan mempersempit sungai',
  '🌲'],
  ['Apa yang dimaksud jejak karbon?',
  'Total emisi gas rumah kaca dari aktivitas',
  'Jumlah sampah di halaman',
  'Luas hutan',
  'Banyaknya hujan',
  '🌍'],
  ['Cara mengurangi emisi perjalanan dekat adalah...',
  'Berjalan kaki atau bersepeda',
  'Memakai kendaraan sendiri',
  'Membiarkan mesin menyala',
  'Memanaskan kendaraan lama',
  '🚲'],
  ['Apa fungsi lubang biopori?',
  'Membantu resapan air',
  'Membuang limbah berbahaya',
  'Mengeringkan tanah',
  'Menghambat air meresap',
  '🕳️'],
  ['Mengapa baterai bekas perlu dipisahkan?',
  'Dapat mengandung bahan berbahaya',
  'Mudah menjadi kompos',
  'Aman dimakan hewan',
  'Selalu aman bagi air',
  '🔋'],
  ['Contoh energi terbarukan adalah...',
  'Energi matahari',
  'Batu bara',
  'Minyak bumi',
  'Gas fosil',
  '☀️'],
  ['Apa dampak penebangan hutan liar?',
  'Hilangnya habitat dan erosi',
  'Habitat bertambah',
  'Tanah semakin kuat',
  'Banjir pasti berkurang',
  '🪵'],
  ['Mengapa minyak jelantah tidak dibuang ke saluran air?',
  'Dapat mencemari dan menyumbat saluran',
  'Menambah oksigen',
  'Menjernihkan air',
  'Menyuburkan sungai',
  '🫗'],
  ['Apa tujuan konservasi keanekaragaman hayati?',
  'Melindungi makhluk hidup dan habitatnya',
  'Menghilangkan spesies lokal',
  'Mengubah hutan jadi sampah',
  'Mengurangi habitat',
  '🦋'],
  ['Apa tindakan saat melihat keran sekolah bocor?',
  'Melapor agar segera diperbaiki',
  'Membiarkan air mengalir',
  'Membuka keran lain',
  'Membuang air',
  '🚰'],
  ['Mengapa ruang terbuka hijau penting?',
  'Membantu kualitas udara dan resapan',
  'Menambah suhu kota',
  'Menghilangkan resapan',
  'Menambah polusi',
  '🌳'],
  ['Apa prinsip ekonomi sirkular?',
  'Menjaga bahan tetap digunakan selama mungkin',
  'Langsung membuang barang',
  'Memperbanyak barang sekali pakai',
  'Mencampur semua limbah',
  '🔄'] ],
  hard:[ ['Gas rumah kaca dari pembakaran bahan bakar fosil adalah...',
  'Karbon dioksida',
  'Oksigen',
  'Helium',
  'Neon',
  '🌡️'],
  ['Apa yang dimaksud eutrofikasi perairan?',
  'Nutrien berlebih memicu ledakan alga',
  'Penguapan air laut',
  'Pembentukan batuan',
  'Penyaringan air',
  '🌊'],
  ['Mengapa lahan gambut perlu dijaga tetap basah?',
  'Mengurangi risiko kebakaran dan pelepasan karbon',
  'Agar mudah dibakar',
  'Agar tidak menyimpan air',
  'Mempercepat pengeringan',
  '🔥'],
  ['Apa dampak mikroplastik pada perairan?',
  'Dapat tertelan organisme dan masuk rantai makanan',
  'Selalu menjadi oksigen',
  'Menjadi makanan utama',
  'Menghilangkan pencemaran',
  '🐟'],
  ['Apa tujuan AMDAL?',
  'Mengkaji dampak penting kegiatan terhadap lingkungan',
  'Menghitung pekerja',
  'Menentukan harga produk',
  'Mengatur liburan',
  '📋'],
  ['Apa arti daya dukung lingkungan?',
  'Kemampuan lingkungan mendukung kehidupan dan aktivitas',
  'Jumlah gedung kota',
  'Kecepatan angin',
  'Jumlah kendaraan',
  '🏞️'],
  ['Mengapa koridor satwa liar dibutuhkan?',
  'Menghubungkan habitat yang terpisah',
  'Membatasi semua satwa',
  'Mengganti hutan',
  'Memperluas jalan',
  '🐘'],
  ['Apa itu mitigasi perubahan iklim?',
  'Mengurangi emisi atau meningkatkan penyerapannya',
  'Menambah emisi',
  'Menghentikan proses alam',
  'Memindahkan musim',
  '🌏'],
  ['Mengapa pembakaran sampah terbuka berbahaya?',
  'Menghasilkan polutan udara berbahaya',
  'Menghilangkan semua zat berbahaya',
  'Membuat udara steril',
  'Menambah kesuburan air',
  '🚫'],
  ['Apa peran mangrove di pesisir?',
  'Meredam gelombang dan menjadi habitat biota',
  'Mempercepat abrasi',
  'Menghilangkan sedimen',
  'Mengurangi habitat ikan',
  '🌿'],
  ['Mengapa restorasi sebaiknya memakai spesies lokal?',
  'Lebih sesuai dengan kondisi ekologi setempat',
  'Agar semua spesies sama',
  'Agar spesies asing mendominasi',
  'Menghapus keanekaragaman',
  '🌱'],
  ['Apa yang dimaksud pencemaran udara sekunder?',
  'Polutan yang terbentuk melalui reaksi di atmosfer',
  'Polutan dari cerobong saja',
  'Debu tanah',
  'Uap air murni',
  '☁️'],
  ['Bagaimana permukaan kedap air memengaruhi siklus air kota?',
  'Mengurangi resapan dan menambah limpasan',
  'Menambah infiltrasi',
  'Menghilangkan limpasan',
  'Menghentikan hujan',
  '🏙️'],
  ['Apa prinsip polluter pays?',
  'Pencemar menanggung biaya pencegahan dan pemulihan',
  'Biaya ditanggung alam',
  'Pencemaran tak perlu ditangani',
  'Semua biaya korban',
  '⚖️'],
  ['Mengapa keanekaragaman genetik penting?',
  'Membantu peluang adaptasi terhadap perubahan',
  'Membuat individu identik',
  'Menghilangkan reproduksi',
  'Selalu menyebabkan kepunahan',
  '🧬'] ],
  pai:[ ['Hadis tentang kebersihan mengajarkan kita untuk...',
  'Menjaga kebersihan diri dan lingkungan',
  'Membuang sampah sembarangan',
  'Merusak alam',
  'Mengabaikan kesehatan',
  '🕌'],
  ['Manusia sebagai khalifah di bumi bertugas...',
  'Mengelola dan menjaga bumi dengan tanggung jawab',
  'Menghabiskan sumber daya',
  'Merusak hutan',
  'Mencemari air',
  '🌍'],
  ['QS. Al-A’raf ayat 56 melarang manusia...',
  'Membuat kerusakan di bumi',
  'Menjaga alam',
  'Berbuat baik',
  'Memelihara tanaman',
  '📖'],
  ['Hadis tentang menanam pohon mengajarkan nilai...',
  'Kebaikan bagi makhluk hidup',
  'Kesombongan',
  'Pemborosan',
  'Permusuhan',
  '🌳'],
  ['Sikap sesuai amanah sebagai khalifah adalah...',
  'Menggunakan sumber daya secara bijak',
  'Membuang limbah ke sungai',
  'Menebang pohon sembarangan',
  'Menyiksa hewan',
  '🤲'],
  ['QS. Ar-Rum ayat 41 menjelaskan kerusakan terjadi karena...',
  'Perbuatan tangan manusia',
  'Gerakan bintang',
  'Pergantian siang malam',
  'Pertumbuhan tanaman',
  '🌊'],
  ['Menjaga kebersihan sekolah termasuk...',
  'Perilaku terpuji',
  'Perbuatan sia-sia',
  'Sikap boros',
  'Perilaku merusak',
  '🧹'],
  ['Israf dalam penggunaan air berarti...',
  'Berlebihan atau melampaui batas',
  'Menghemat secukupnya',
  'Berbagi air',
  'Menjaga sumber air',
  '💧'],
  ['Sikap terhadap hewan menurut ajaran Islam adalah...',
  'Menyayangi dan tidak menyiksanya',
  'Menyakitinya',
  'Merusak habitat',
  'Membiarkannya kelaparan',
  '🐾'],
  ['Contoh sedekah jariyah yang bermanfaat bagi lingkungan...',
  'Menanam pohon yang bermanfaat',
  'Membuang sampah',
  'Merusak sumber air',
  'Membakar hutan',
  '🌱'],
  ['QS. Al-Baqarah ayat 205 memberi peringatan tentang...',
  'Tindakan merusak tanaman dan ternak',
  'Membakar kebun',
  'Mencemari sungai',
  'Larangan menanam',
  '📚'],
  ['Mengapa menjaga sumber air merupakan sikap terpuji?',
  'Air adalah nikmat yang harus dijaga',
  'Air tidak berguna',
  'Air harus dihamburkan',
  'Air hanya untuk satu orang',
  '🚰'],
  ['Contoh amanah terhadap alam adalah...',
  'Tidak mengambil sumber daya berlebihan',
  'Memburu satwa dilindungi',
  'Membuang limbah beracun',
  'Menebang hutan liar',
  '🌿'],
  ['Hadis menyingkirkan gangguan dari jalan mengajarkan...',
  'Menjaga keselamatan dan kenyamanan bersama',
  'Mengotori jalan',
  'Menghalangi jalan',
  'Merusak fasilitas',
  '🛣️'],
  ['Mengapa tidak boleh menyia-nyiakan makanan?',
  'Islam mengajarkan hidup sederhana dan tidak berlebihan',
  'Agar sampah bertambah',
  'Makanan tidak berharga',
  'Supaya cepat habis',
  '🍚'],
  ['Menjaga keseimbangan alam berarti...',
  'Memanfaatkan alam tanpa merusaknya',
  'Mengambil sumber daya tanpa batas',
  'Mencemari udara',
  'Menghilangkan habitat',
  '⚖️'],
  ['Makna larangan fasad fil ardh adalah...',
  'Larangan membuat kerusakan di bumi',
  'Perintah merusak tanaman',
  'Anjuran membuang sampah',
  'Larangan menolong',
  '🌏'],
  ['Menanam pohon dapat menjadi amal kebaikan karena...',
  'Manfaatnya dirasakan manusia dan makhluk lain',
  'Pohon menghasilkan sampah',
  'Mengurangi oksigen',
  'Merusak tanah',
  '🌲'],
  ['Sikap terhadap nikmat alam adalah...',
  'Bersyukur dan menjaganya',
  'Menghamburkannya',
  'Merusaknya',
  'Mengabaikannya',
  '🙏'],
  ['Hubungan iman dan kepedulian lingkungan adalah...',
  'Iman mendorong tanggung jawab terhadap ciptaan Allah',
  'Tidak ada hubungan',
  'Iman membolehkan pencemaran',
  'Alam tidak penting',
  '💚'] ]
};
banks.pai.push( ['Hadis tentang menanam tanaman mengajarkan bahwa hasil tanaman dapat menjadi...','Sedekah bagi makhluk yang memanfaatkannya','Alasan merusak kebun','Sumber kesombongan','Sesuatu yang harus dibuang','🌾'], ['Dalam QS. Al-A’raf ayat 31, manusia diperintahkan untuk tidak...','Berlebih-lebihan','Bersyukur','Menjaga kebersihan','Berbuat baik','⚖️'], ['Perilaku menjaga lingkungan sesuai nilai amanah berarti...','Merawat fasilitas dan alam dengan tanggung jawab','Menggunakan air tanpa batas','Membuang sampah ke sungai','Merusak tanaman','🤲'], ['Hadis tentang menyingkirkan gangguan di jalan termasuk contoh...','Perbuatan baik','Perbuatan tercela','Pemborosan','Kerusakan alam','🛣️'], ['QS. Al-An’am ayat 141 mengingatkan manusia agar tidak...','Berlebih-lebihan','Bersyukur atas rezeki','Berbagi hasil panen','Memanfaatkan hasil bumi secara baik','🌱'], ['Sikap syukur atas air dapat diwujudkan dengan...','Menggunakan air secukupnya','Membiarkan keran terbuka','Mencemari sumber air','Membuang limbah ke sungai','💧'], ['Menjaga hewan dan habitatnya merupakan bentuk...','Kasih sayang terhadap makhluk Allah','Kesewenang-wenangan','Pemborosan','Perusakan','🐾'], ['Kandungan QS. Ar-Rum ayat 41 mengajak manusia untuk...','Menyadari akibat kerusakan dan kembali berbuat baik','Menambah pencemaran','Mengabaikan alam','Merusak tanaman','📖'], ['Membuang sampah pada tempatnya di sekolah mencerminkan...','Kebersihan dan tanggung jawab','Sikap boros','Perilaku merusak','Sikap tidak peduli','🧹'], ['Menggunakan sumber daya alam secara seimbang berarti...','Memenuhi kebutuhan tanpa merusak kelestariannya','Mengambil sebanyak-banyaknya','Menghabiskan semua sumber daya','Mencemari lingkungan','🌍'] );
const cfg= {
  eco: {
    total:50
  },
  pai: {
    total:10
  }
},
prog=JSON.parse(localStorage.getItem('sigapProgress')||'{"eco":1,"pai":1}');
let scores=JSON.parse(localStorage.getItem('sigapScores')||'{"eco":[],"pai":[]}');
let cat='eco',
level=1,
qi=0,
points=0,
elapsed=[],
remain=40,
timer=null,
locked=false,
sound=true,
music=false,
lang='id',
audio,
playerName='',
catScore='eco';
function show(id) {
  $$('.screen').forEach(x=>x.classList.remove('active'));
  $('#'+id).classList.add('active');
}
function beep(f=500,d=.1) {
  if(!sound)return;
  try {
    audio ||= new(window.AudioContext||window.webkitAudioContext)();
    let o=audio.createOscillator(),
    g=audio.createGain();
    o.frequency.value=f;
    g.gain.value=.06;
    o.connect(g);
    g.connect(audio.destination);
    o.start();
    o.stop(audio.currentTime+d)
  }
  catch {
  }
}
function toast(t) {
  $('#toast').textContent=t;
  $('#toast').classList.add('show');
  setTimeout(()=>$('#toast').classList.remove('show'),2000)
}
function rules() {
  if(cat==='pai'||level<=15)return {
    time:40,
    base:400,
    step:10,
    minus:40
  };
  if(level<=30)return {
    time:30,
    base:600,
    step:20,
    minus:60
  };
  return {
    time:20,
    base:800,
    step:40,
    minus:80
  }
}
function pool() {
  return cat==='pai'?banks.pai:level<=15?banks.easy:level<=30?banks.medium:banks.hard
}
function getQuestions() {
  let p=pool(),
  start=(level-1)*3;
  return [0,
  1,
  2].map(i=>p[(start+i)%p.length])
}
function drawLevels() {
  let max=cfg[cat].total,
  open=prog[cat]||1;
  $$('.cat').forEach(b=>b.classList.toggle('active',b.dataset.cat===cat));
  $('#legend').hidden=cat==='pai';
  $('#levelGrid').innerHTML='';
  for(let n=1;n<=max;n++) {
    let b=document.createElement('button'),
    tier=cat==='pai'?(lang==='en'?'ISLAMIC EDUCATION':'PAI'):n<=15?'MUDAH':n<=30?'SEDANG':'SULIT';
    b.className='tile '+(cat==='pai'?'':n<=15?'':n<=30?'medium':'hard')+(n>open?' locked':'');
    b.disabled=n>open;
    b.innerHTML=`<strong>${n}</strong><small>${n>open?'🔒 TERKUNCI':tier}</small>`;
    b.onclick=()=> {
      level=n;
      startGame()
    };
    $('#levelGrid').append(b)
  }
}
function startGame() {
  qi=0;
  points=0;
  elapsed=[];
  locked=false;
  $('#score').textContent=0;
  show('game');
  loadQ()
}
function loadQ() {
  clearInterval(timer);
  locked=false;
  let r=rules(),
  q=getQuestions()[qi];
  remain=r.time;
  $('#categoryLabel').textContent=cat==='eco'?'SIGAP ECO QUIZ':'PENDIDIKAN AGAMA ISLAM';
  $('#levelLabel').textContent='LEVEL '+level;
  $('#questionNo').textContent=`SOAL ${qi+1}/3` ;
  $('#time').textContent=remain;
  $('#timerBar').style.width='100%';
  $('#qEmoji').textContent=q[5];
  $('#questionText').textContent=q[0];
  $('#feedback').textContent='';
  let opts=q.slice(1,5).map((v,i)=>( {
    v,ok:i===0
  })).sort(()=>Math.random()-.5);
  $('#answers').innerHTML='';
  opts.forEach((o,i)=> {
    let b=document.createElement('button');b.className='answer';b.textContent='ABCD'[i]+'. '+o.v;b.onclick=()=>answer(o,b,false);$('#answers').append(b)
  });
  timer=setInterval(()=> {
    remain--;$('#time').textContent=remain;$('#timerBar').style.width=(remain/r.time*100)+'%';if(remain<=0)answer(null,null,true)
  },1000)
}
function answer(opt,btn,timeout) {
  if(locked)return;
  locked=true;
  clearInterval(timer);
  let r=rules(),
  spent=Math.max(1,r.time-remain);
  elapsed.push(spent);
  $$('.answer').forEach(b=>b.disabled=true);
  if(opt?.ok) {
    let add=Math.max(0,r.base-r.step*(spent-1));
    points+=add;
    btn.classList.add('correct');
    $('#feedback').textContent=`BENAR! +${add} poin`;
    beep(700);
    setTimeout(nextQ,800)
  }
  else {
    points=Math.max(0,points-r.minus);
    if(timeout) {
      $$('.answer').forEach(b=>b.classList.add('wrong'))
    }
    else btn?.classList.add('wrong');
    if(navigator.vibrate)navigator.vibrate([140,60,140,60,140]);
    beep(160);
    $('#feedback').textContent=timeout?`WAKTU HABIS! Jawaban: ${getQuestions()[qi][1]}`:`SALAH! Pengurangan skor −${r.minus}. Jawaban: ${getQuestions()[qi][1]}`;
    setTimeout(nextQ,1400)
  }
  $('#score').textContent=points
}
function nextQ() {
  qi++;
  if(qi<3)loadQ();
  else finish()
}
function finish() {
  let max=cfg[cat].total;
  $('#resultInfo').textContent=`Kategori ${cat==='eco'?'SIGAP ECO QUIZ':'Pendidikan Agama Islam'} · Level ${level}`;
  $('#times').innerHTML=elapsed.map((t,i)=>`<div class="timebox"><b>S${i+1}</b>${t} detik</div>`).join('');
  $('#finalScore').textContent=points;
  $('#nextLevel').disabled=level===max;
  $('#nextLevel').textContent=level===max?'KATEGORI SELESAI':'LEVEL BERIKUTNYA →';
  if(level>=(prog[cat]||1)) {
    prog[cat]=Math.min(max,level+1);
    localStorage.setItem('sigapProgress',JSON.stringify(prog))
  }
  show('result');
  beep(650,.2)
}
function save() {
  let name=playerName.trim()||'Pemain SIGAP';
  let old=scores[cat].find(x=>x.name.toLocaleLowerCase()===name.toLocaleLowerCase());
  if(old) {
    old.score+=points;
    old.level=Math.max(old.level,level)
  }
  else scores[cat].push( {
    name,score:points,level
  });
  scores[cat].sort((a,b)=>b.score-a.score);
  scores[cat]=scores[cat].slice(0,30);
  localStorage.setItem('sigapScores',JSON.stringify(scores))
}
function drawScores(which='eco') {
  catScore=which;
  $$('.scoretab').forEach(b=>b.classList.toggle('active',b.dataset.score===which));
  let data=scores[which]||[];
  $('#scoreRows').innerHTML=data.length?data.map((x,i)=>`<div class="score-row"><b>${['🥇','🥈','🥉'][i]||i+1}</b><span>${safe(x.name)}<small>Level ${x.level}</small></span><strong>${x.score}</strong></div>`).join(''):'<div class="empty">🌱 Belum ada skor. Selesaikan level untuk masuk papan skor!</div>'
}
function safe(s) {
  return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
let selectedStartCat='eco';
const startNameInput=$('#startName');
startNameInput.addEventListener('input',()=>{const pos=startNameInput.selectionStart;const before=startNameInput.value;startNameInput.value=before.toLocaleUpperCase('id-ID');try{startNameInput.setSelectionRange(pos,pos)}catch{}});
$$('[data-startcat]').forEach(b=>b.onclick=()=>{selectedStartCat=b.dataset.startcat;$$('[data-startcat]').forEach(x=>x.classList.toggle('selected',x===b))});
$('#enterGame').onclick=()=>{let n=$('#startName').value.trim().toLocaleUpperCase('id-ID');$('#startName').value=n;if(n.split(/\s+/).filter(Boolean).length<2){toast('Masukkan nama lengkap minimal dua kata');$('#startName').focus();return}playerName=n;cat=selectedStartCat;level=prog[cat]||1;show('home');drawLevels()};
$$('[data-go]').forEach(b=>b.onclick=()=>{let id=b.dataset.go;if(id==='game'){level=prog[cat]||1;startGame()}else{if(id==='levels')drawLevels();if(id==='scores')drawScores();show(id)}});
$$('.back').forEach(b=>b.onclick=()=>show('home'));
$$('.cat').forEach(b=>b.onclick=()=>{cat=b.dataset.cat;$$('.cat').forEach(x=>x.classList.toggle('active',x===b));drawLevels()});
$$('.scoretab').forEach(b=>b.onclick=()=>drawScores(b.dataset.score));
$('#exitGame').onclick=()=>{clearInterval(timer);show('home')};
$('#nextLevel').onclick=()=>{save();if(level<cfg[cat].total){level++;startGame()}else show('home')};
$('#homeResult').onclick=()=>{save();show('home')};
/* ===== Bahasa Indonesia / English ===== */
const translations={
 'SELAMAT DATANG DI':'WELCOME TO','Siswa Gerak Aktif Peduli Lingkungan':'Active Students Care for the Environment',
 'Quiz Peduli Lingkungan':'Environmental Care Quiz','Belajar menjaga bumi sambil bermain!':'Learn to protect the Earth while playing!',
 'Isi nama lengkap dan pilih kategori permainanmu!':'Enter your full name and choose a game category!',
 'NAMA LENGKAP':'FULL NAME','PILIH KATEGORI GAME':'CHOOSE GAME CATEGORY','Masukkan nama lengkap Anda':'Enter your full name',
 '50 level · Peduli lingkungan':'50 levels · Environmental care','10 level · Hadis dan ayat tentang lingkungan':'10 levels · Hadith and verses about the environment',
 'MULAI PETUALANGAN →':'START ADVENTURE →','MAIN':'PLAY','Mulai permainan':'Start playing','LEVEL':'LEVEL','Pilih tantangan':'Choose a challenge',
 'PENGATURAN':'SETTINGS','Atur permainan':'Game settings','PAPAN SKOR':'SCOREBOARD','Peringkat pemain':'Player rankings',
 '🌱 Satu aksi kecil, perubahan besar untuk bumi!':'🌱 One small action, a big change for Earth!',
 'Pilih Kategori & Level':'Choose Category & Level','🟢 Mudah 1–15　 🟠 Sedang 16–30　 🔴 Sulit 31–50':'🟢 Easy 1–15　 🟠 Medium 16–30　 🔴 Hard 31–50',
 'Selesaikan level sebelumnya untuk membuka level berikutnya.':'Complete the previous level to unlock the next one.',
 'Pengaturan':'Settings','PENDIDIKAN AGAMA ISLAM':'ISLAMIC EDUCATION','Pendidikan Agama Islam':'Islamic Education','Quiz Peduli Lingkungan':'Environmental Care Quiz','🔊 Efek Suara':'🔊 Sound Effects','🎵 Musik':'🎵 Music','🌐 Bahasa':'🌐 Language',
 'AKTIF':'ON','MATI':'OFF','Indonesia':'Indonesian','Atur suara sesuai kenyamananmu.':'Adjust the sound to your preference.',
 'Papan Skor':'Scoreboard','Nama Pemain':'Player Name','Skor':'Score','Pemain SIGAP':'SIGAP Player','SOAL':'QUESTION','detik':'seconds','SISWA GERAK AKTIF PEDULI LINGKUNGAN':'ACTIVE STUDENTS CARE FOR THE ENVIRONMENT','Pilih kategori dan level':'Choose category and level','Efek Suara':'Sound Effects','Musik':'Background Music','Belum ada skor. Selesaikan level untuk masuk papan skor!':'No scores yet. Complete a level to appear on the scoreboard!',
 'PILIH JAWABAN YANG TEPAT':'CHOOSE THE CORRECT ANSWER','SOAL':'QUESTION','BENAR!':'CORRECT!','SALAH!':'WRONG!',
 'WAKTU HABIS! Jawaban:':'TIME IS UP! Answer:','SALAH! Pengurangan skor':'WRONG! Score penalty',
 'TANTANGAN SELESAI':'CHALLENGE COMPLETE','LEVEL SELESAI!':'LEVEL COMPLETED!','LEVEL BERIKUTNYA →':'NEXT LEVEL →',
 'KATEGORI SELESAI':'CATEGORY COMPLETED','MENU UTAMA':'MAIN MENU','detik':'seconds','MUDAH':'EASY','SEDANG':'MEDIUM','SULIT':'HARD','TERKUNCI':'LOCKED',
 'Masukkan nama lengkap minimal dua kata':'Please enter your full name (at least two words)',
 'Bahasa Indonesia dipilih':'Indonesian selected','English dipilih':'English selected',
 'HAPUS SEMUA SKOR PEMAIN':'DELETE ALL PLAYER SCORES','Semua skor pemain akan dihapus dan seluruh level kembali ke Level 1.':'All player scores will be deleted and all levels will reset to Level 1.',
 'BATAL':'CANCEL','HAPUS':'DELETE','Level':'Level','Kategori':'Category','Aktifkan suara pada browser untuk mendengar musik':'Enable browser audio to hear the music','TANTANGAN SELESAI':'CHALLENGE COMPLETE','LEVEL SELESAI!':'LEVEL COMPLETED!','SKOR LEVEL':'LEVEL SCORE','Aktifkan suara pada browser untuk mendengar musik':'Enable browser audio to hear the music','TANTANGAN SELESAI':'CHALLENGE COMPLETE','LEVEL SELESAI!':'LEVEL COMPLETED!','SKOR LEVEL':'LEVEL SCORE','SIGAP ECO QUIZ':'SIGAP ECO QUIZ','PILIH KATEGORI GAME':'CHOOSE GAME CATEGORY'
};
function tr(v){return lang==='en'?(translations[v]||v):v}
function translateStatic(){
 const map=[
  ['#start .tag','SELAMAT DATANG DI'],['#home .tag','SISWA GERAK AKTIF PEDULI LINGKUNGAN'],['#start .hero h2','Siswa Gerak Aktif Peduli Lingkungan'],['#home .hero h2','Quiz Peduli Lingkungan'],['#start .hero p:last-child','Isi nama lengkap dan pilih kategori permainanmu!'],['#home .hero p:last-child','Belajar menjaga bumi sambil bermain!'],
  ['.start-panel label','NAMA LENGKAP'],['.start-panel h3','PILIH KATEGORI GAME'],['#startName',''],['#enterGame','MULAI PETUALANGAN →'],
  ['#mainPlay','▶ MAIN'],['.menu button:nth-child(1) small','Mulai permainan'],['.menu button:nth-child(2) small','Pilih tantangan'],['.menu button:nth-child(3)','⚙️ PENGATURAN'],['.menu button:nth-child(3) small','Atur permainan'],['.menu button:nth-child(4)','🏆 PAPAN SKOR'],['.menu button:nth-child(4) small','Peringkat pemain'],
  ['.foot','🌱 Satu aksi kecil, perubahan besar untuk bumi!'],['#settings .heading h2','Pengaturan'],['#scores .heading h2','🏆 Papan Skor'],['#levels .heading h2','Pilih Kategori & Level'],['#levels .foot','Selesaikan level sebelumnya untuk membuka level berikutnya.'],['#settings .foot','Atur suara sesuai kenyamananmu.'],
  ['#soundToggle',''],['#musicToggle',''],['#legend','🟢 Mudah 1–15　 🟠 Sedang 16–30　 🔴 Sulit 31–50'],['#questionText',''],['.question small','PILIH JAWABAN YANG TEPAT'],['#result .tag','TANTANGAN SELESAI'],['#result h2','LEVEL SELESAI!'],['#result .total','SKOR LEVEL'],['#nextLevel',''],['#homeResult','']
 ];
 map.forEach(([sel,key])=>{let el=$(sel);if(!el||!key)return;if(el.children.length===0)el.textContent=tr(key);});
 const input=$('#startName');if(input)input.placeholder=tr('Masukkan nama lengkap Anda');
 const cats=$$('.category-card');if(cats.length){cats[0].querySelector('small').textContent=tr('50 level · Peduli lingkungan');cats[1].querySelector('small').textContent=tr('10 level · Hadis dan ayat tentang lingkungan');cats[1].querySelector('b').textContent=tr('PENDIDIKAN AGAMA ISLAM')}
 $$('.menu small').forEach((el,i)=>el.textContent=tr(['Mulai permainan','Pilih tantangan','Atur permainan','Peringkat pemain'][i]));
 $$('.setting span').forEach(el=>{el.textContent=tr(el.textContent)});
 $$('.tabs .cat').forEach((el,i)=>{el.textContent=lang==='en'?(i===0?'🌳 SIGAP ECO QUIZ · 50 LEVELS':'🕌 ISLAMIC EDUCATION · 10 LEVELS'):(i===0?'🌳 SIGAP ECO QUIZ · 50 LEVEL':'🕌 PENDIDIKAN AGAMA ISLAM · 10 LEVEL')});
 $$('.scoretab').forEach((el,i)=>{el.textContent=lang==='en'?(i===0?'SIGAP ECO QUIZ':'ISLAMIC EDUCATION'):(i===0?'SIGAP ECO QUIZ':'PAI')});
 const sh=$('.scorehead');if(sh)sh.innerHTML=lang==='en'?'<b>#</b><b>Player Name</b><b>Score</b>':'<b>#</b><b>Nama Pemain</b><b>Skor</b>';
 const menu=$$('.menu button');if(menu.length){menu[0].firstChild.textContent=lang==='en'?'▶ PLAY ':'▶ MAIN ';menu[1].firstChild.textContent=lang==='en'?'🧩 LEVEL ':'🧩 LEVEL ';menu[2].firstChild.textContent=lang==='en'?'⚙️ SETTINGS ':'⚙️ PENGATURAN ';menu[3].firstChild.textContent=lang==='en'?'🏆 SCOREBOARD ':'🏆 PAPAN SKOR '}
 const go=$('#enterGame');if(go)go.textContent=tr('MULAI PETUALANGAN →');
 $$('.lang').forEach(el=>{el.classList.toggle('active',el.dataset.lang===lang);el.textContent=el.dataset.lang==='en'?'English':'Indonesia';});
 const resultInfo=$('#resultInfo');if(resultInfo&&lang==='en'&&$('#result').classList.contains('active'))resultInfo.textContent=tr('Kategori')+' '+tr(cat==='eco'?'SIGAP ECO QUIZ':'Pendidikan Agama Islam')+' · '+tr('Level')+' '+level;
 const resultTag=$('#result .tag');if(resultTag)resultTag.textContent=tr('TANTANGAN SELESAI');
 const resultTitle=$('#result h2');if(resultTitle)resultTitle.textContent=tr('LEVEL SELESAI!');
 const totalLabel=$('#result .total');if(totalLabel&&totalLabel.firstChild)totalLabel.firstChild.textContent=tr('SKOR LEVEL');

 const del=$('#deleteAllScores');if(del)del.textContent='🗑️ '+tr('HAPUS SEMUA SKOR PEMAIN');
}
function refreshDynamicLanguage(){
 if($('#categoryLabel'))$('#categoryLabel').textContent=tr(cat==='eco'?'SIGAP ECO QUIZ':'PENDIDIKAN AGAMA ISLAM');
 if($('#levelLabel'))$('#levelLabel').textContent=tr('LEVEL')+' '+level;
 if($('#questionNo'))$('#questionNo').textContent=tr('SOAL')+' '+(qi+1)+'/3';
 if($('#questionText')&&timer!==null){let q=getQuestions()[qi];$('#questionText').textContent=trQuiz(q[0]);}
 if($('#resultInfo'))$('#resultInfo').textContent=tr('Kategori')+' '+tr(cat==='eco'?'SIGAP ECO QUIZ':'Pendidikan Agama Islam')+' · '+tr('Level')+' '+level;
 if($('#nextLevel'))$('#nextLevel').textContent=level===cfg[cat].total?tr('KATEGORI SELESAI'):tr('LEVEL BERIKUTNYA →');
 if($('#homeResult'))$('#homeResult').textContent=tr('MENU UTAMA');
}
/* Musik latar instrumental ceria dengan melodi, harmoni, dan bass.
   Dibuat melalui Web Audio API sehingga tidak membutuhkan file audio eksternal. */
let musicTimer=null,musicStep=0,musicMaster=null;
const melody=[659.25,783.99,880,783.99,698.46,783.99,987.77,880,659.25,783.99,880,1046.5,987.77,880,783.99,698.46];
const bassline=[164.81,164.81,196,196,146.83,146.83,174.61,174.61];
function musicTone(freq,duration,volume,wave='sine',when=0){
  if(!audio||!musicMaster)return;
  const now=audio.currentTime+(when||0),osc=audio.createOscillator(),gain=audio.createGain();
  osc.type=wave;osc.frequency.setValueAtTime(freq,now);
  gain.gain.setValueAtTime(0.0001,now);
  gain.gain.exponentialRampToValueAtTime(Math.max(.0001,volume),now+.04);
  gain.gain.setValueAtTime(Math.max(.0001,volume),now+Math.max(.06,duration-.12));
  gain.gain.exponentialRampToValueAtTime(.0001,now+duration);
  osc.connect(gain);gain.connect(musicMaster);osc.start(now);osc.stop(now+duration+.02);
}
function playMusicNote(){
  if(!music||!audio||audio.state!=='running')return;
  const i=musicStep%melody.length;
  musicTone(melody[i],.42,.13,'triangle');
  if(i%2===0)musicTone(melody[i]*.5,.38,.045,'sine');
  if(i%4===0){
    const root=bassline[(musicStep/2|0)%bassline.length];
    musicTone(root,.82,.10,'sine');
    musicTone(root*1.5,1.05,.025,'sine',.02);
  }
  musicStep++;
}
async function startMusic(){
  try{
    audio ||= new(window.AudioContext||window.webkitAudioContext)();
    if(audio.state==='suspended')await audio.resume();
    if(!music||audio.state!=='running')return;
    if(!musicMaster){musicMaster=audio.createGain();musicMaster.gain.value=.8;musicMaster.connect(audio.destination);}else{musicMaster.gain.cancelScheduledValues(audio.currentTime);musicMaster.gain.setTargetAtTime(.8,audio.currentTime,.04);}
    if(musicTimer)clearInterval(musicTimer);
    musicStep=0;playMusicNote();musicTimer=setInterval(playMusicNote,360);
  }catch(err){console.warn('Audio belum dapat diputar:',err);}
}
function stopMusic(){
  if(musicTimer)clearInterval(musicTimer);
  musicTimer=null;
  if(musicMaster&&audio){musicMaster.gain.cancelScheduledValues(audio.currentTime);musicMaster.gain.setTargetAtTime(.0001,audio.currentTime,.08);}
}
function audioUI(){
 const st=$('#soundToggle'),mt=$('#musicToggle');
 if(st){st.textContent=tr(sound?'AKTIF':'MATI');st.classList.toggle('on',sound);}
 if(mt){mt.textContent=tr(music?'AKTIF':'MATI');mt.classList.toggle('on',music);}
}
$('#soundToggle').onclick=()=>{sound=!sound;audioUI()};
$('#musicToggle').onclick=async()=>{
 music=!music;audioUI();
 if(music){await startMusic();if(!audio||audio.state!=='running')toast(tr('Aktifkan suara pada browser untuk mendengar musik'));}
 else stopMusic();
};
$$('.lang').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;translateStatic();audioUI();refreshDynamicLanguage();toast(tr(lang==='id'?'Bahasa Indonesia dipilih':'English dipilih'));if($('#levels').classList.contains('active'))drawLevels();if($('#scores').classList.contains('active'))drawScores(catScore)});
/* Hapus semua skor: reset data kategori dan progress, lalu kembali ke awal permainan. */
$('#deleteAllScores').onclick=()=>{let overlay=document.createElement('div');overlay.className='confirm-overlay';overlay.innerHTML=`<div class="confirm-box"><h2>${tr('HAPUS SEMUA SKOR PEMAIN')}?</h2><p>${tr('Semua skor pemain akan dihapus dan seluruh level kembali ke Level 1.')}</p><button class="confirm-no">${tr('BATAL')}</button><button class="confirm-yes">${tr('HAPUS')}</button></div>`;document.body.append(overlay);overlay.querySelector('.confirm-no').onclick=()=>overlay.remove();overlay.querySelector('.confirm-yes').onclick=()=>{scores={eco:[],pai:[]};prog.eco=1;prog.pai=1;localStorage.setItem('sigapScores',JSON.stringify(scores));localStorage.setItem('sigapProgress',JSON.stringify(prog));overlay.remove();drawScores(catScore);level=1;toast(lang==='en'?'All scores deleted. Progress reset to Level 1.':'Semua skor dihapus. Progress kembali ke Level 1.');};};
/* Translate question/answer feedback and common quiz phrases. */
const quizEnglish={
 'Apa yang sebaiknya dilakukan terhadap botol plastik bekas?':'What should you do with used plastic bottles?','Mendaur ulang':'Recycle','Membuangnya ke sungai':'Throw them into a river','Membakarnya':'Burn them','Meninggalkannya di jalan':'Leave them on the road',
 'Sampah kulit pisang termasuk jenis apa?':'What type of waste is a banana peel?','Organik':'Organic','Anorganik':'Inorganic','Elektronik':'Electronic waste','Apa manfaat menanam pohon?':'What is the benefit of planting trees?','Menghasilkan oksigen':'Produces oxygen','Menambah polusi':'Increases pollution','Mengotori air':'Pollutes water','Bagaimana cara menghemat air?':'How can we save water?','Menutup keran saat tidak digunakan':'Turn off the tap when not in use','Membiarkan keran terbuka':'Leave the tap running','Mandi sangat lama':'Take very long showers','Membuang air bersih':'Waste clean water',
 'Ke mana membuang bungkus makanan?':'Where should food wrappers be thrown?','Tempat sampah':'A trash bin','Selokan':'A drain','Sungai':'A river','Halaman':'The yard','Apa kepanjangan 3R?':'What does 3R stand for?','Contoh menggunakan kembali barang adalah...':'Which is an example of reusing an item?','Memakai botol isi ulang':'Use a refillable bottle','Apa manfaat kerja bakti?':'What is the benefit of community clean-up?','Lingkungan menjadi bersih':'The environment becomes clean',
 'Mengapa sampah organik cocok dijadikan kompos?':'Why is organic waste suitable for compost?','Dapat terurai dan menyuburkan tanah':'It decomposes and enriches the soil','Mengapa sampah perlu dipilah dari sumbernya?':'Why should waste be sorted at its source?','Memudahkan pengolahan sesuai jenis':'It makes processing by type easier','Apa dampak pestisida berlebihan?':'What is the impact of excessive pesticide use?','Dapat mencemari tanah dan air':'It can pollute soil and water','Bagaimana hutan membantu mengurangi banjir?':'How do forests help reduce flooding?','Akar membantu menyerap air':'Roots help absorb water','Apa yang dimaksud jejak karbon?':'What is a carbon footprint?','Total emisi gas rumah kaca dari aktivitas':'The total greenhouse gas emissions from activities',
 'Gas rumah kaca dari pembakaran bahan bakar fosil adalah...':'Which greenhouse gas is released by burning fossil fuels?','Karbon dioksida':'Carbon dioxide','Apa yang dimaksud eutrofikasi perairan?':'What is water eutrophication?','Nutrien berlebih memicu ledakan alga':'Excess nutrients trigger algal blooms','Apa tujuan AMDAL?':'What is the purpose of an environmental impact assessment?','Mengkaji dampak penting kegiatan terhadap lingkungan':'To assess significant impacts of an activity on the environment',
 'Hadis tentang kebersihan mengajarkan kita untuk...':'What do hadith about cleanliness teach us?','Menjaga kebersihan diri dan lingkungan':'Keep ourselves and our surroundings clean','Manusia sebagai khalifah di bumi bertugas...':'What is the role of humans as stewards on Earth?','Mengelola dan menjaga bumi dengan tanggung jawab':'Manage and protect the Earth responsibly','QS. Al-A’raf ayat 56 melarang manusia...':'What does Surah Al-A’raf 7:56 forbid?','Membuat kerusakan di bumi':'Causing corruption on Earth','Hadis tentang menanam pohon mengajarkan nilai...':'What value is taught by hadith about planting trees?','Kebaikan bagi makhluk hidup':'Kindness to living creatures','QS. Ar-Rum ayat 41 menjelaskan kerusakan terjadi karena...':'According to Surah Ar-Rum 30:41, what causes corruption?','Perbuatan tangan manusia':'The deeds of human beings',
 'Menjaga kebersihan sekolah termasuk...':'Keeping the school clean is...','Perilaku terpuji':'A praiseworthy act','Israf dalam penggunaan air berarti...':'What does israf in water use mean?','Berlebihan atau melampaui batas':'Excessiveness or going beyond limits','Sikap terhadap hewan menurut ajaran Islam adalah...':'What is the Islamic attitude toward animals?','Menyayangi dan tidak menyiksanya':'Treat them kindly and do not harm them','Contoh sedekah jariyah yang bermanfaat bagi lingkungan...':'Which is an example of ongoing charity that benefits the environment?','Menanam pohon yang bermanfaat':'Planting a beneficial tree',
 'Hadis tentang menanam tanaman mengajarkan bahwa hasil tanaman dapat menjadi...':'What do hadith teach about the produce of planted crops?','Sedekah bagi makhluk yang memanfaatkannya':'Charity for creatures that benefit from it','Dalam QS. Al-A’raf ayat 31, manusia diperintahkan untuk tidak...':'In Surah Al-A’raf 7:31, what are people told not to do?','Berlebih-lebihan':'Be excessive','Sikap syukur atas air dapat diwujudkan dengan...':'How can we show gratitude for water?','Menggunakan air secukupnya':'Use only the water we need'
};

Object.assign(quizEnglish, {"Apa manfaat menanam pohon?":"What are the benefits of planting trees?","Menghasilkan oksigen":"Produces oxygen","Menambah polusi":"Increases pollution","Mengotori air":"Pollutes water","Mengurangi resapan":"Reduces water absorption","Bagaimana cara menghemat air?":"How can we save water?","Menutup keran saat tidak digunakan":"Turn off the tap when it is not in use","Membiarkan keran terbuka":"Leave the tap running","Mandi sangat lama":"Take very long showers","Membuang air bersih":"Waste clean water","Tempat sampah":"Trash bin","Selokan":"Drain","Sungai":"River","Halaman":"Yard","Apa kepanjangan 3R?":"What does 3R stand for?","Reduce, Reuse, Recycle":"Reduce, Reuse, Recycle","Read, Run, Rest":"Read, Run, Rest","Repair, Return, Remove":"Repair, Return, Remove","Rain, River, Road":"Rain, River, Road","Contoh menggunakan kembali barang adalah...":"Which is an example of reusing an item?","Memakai botol isi ulang":"Use a refillable bottle","Membuang tas layak pakai":"Throw away a reusable bag","Membakar kertas":"Burn paper","Membeli barang sekali pakai":"Buy single-use products","Apa manfaat kerja bakti?":"What are the benefits of a community clean-up?","Lingkungan menjadi bersih":"The environment becomes clean","Menambah sampah":"Creates more waste","Merusak tanaman":"Damages plants","Mencemari air":"Pollutes water","Apa yang dilakukan saat keluar kelas?":"What should you do when leaving the classroom?","Mematikan lampu":"Turn off the lights","Menyalakan semua lampu":"Turn on all the lights","Membiarkan kipas menyala":"Leave the fan running","Membuka keran":"Turn on the tap","Apa yang dapat dibuat dari daun kering?":"What can be made from dry leaves?","Kompos":"Compost","Plastik":"Plastic","Kaca":"Glass","Logam":"Metal","Mengapa tidak boleh membuang sampah ke sungai?":"Why should we never throw rubbish into rivers?","Mencemari air dan menyumbat aliran":"It pollutes the water and blocks the flow","Membuat air bersih":"Makes water clean","Memberi makan semua ikan":"Feeds all the fish","Menambah oksigen":"Adds oxygen","Tas apa yang baik untuk belanja?":"What kind of bag is best for shopping?","Tas kain pakai ulang":"Reusable cloth bag","Kantong sekali pakai":"Single-use bag","Kantong yang dibuang ke jalan":"A bag thrown onto the road","Plastik dibakar":"Burn plastic","Bagaimana menjaga kebersihan sekolah?":"How can we keep the school clean?","Piket dan buang sampah pada tempatnya":"Do classroom duties and put rubbish in the bin","Mencoret meja":"Write on desks","Membuang sampah sembarangan":"Litter carelessly","Apa manfaat membawa tempat minum sendiri?":"What are the benefits of bringing your own drinking bottle?","Mengurangi botol sekali pakai":"Reduces single-use bottles","Mencemari tanah":"Pollutes the soil","Memboroskan air":"Wastes water","Tempat sampah organik biasanya berwarna...":"What colour is an organic waste bin usually?","Hijau":"Green","Merah muda":"Pink","Ungu":"Purple","Hitam pekat":"Black","Mendaur ulang":"Recycle","Membuangnya ke sungai":"Throw it into a river","Membakarnya":"Burn it","Meninggalkannya di jalan":"Leave it on the road","Organik":"Organic","Anorganik":"Inorganic","B3":"Hazardous waste","Elektronik":"Electronic waste","Mengapa sampah organik cocok dijadikan kompos?":"Why is organic waste suitable for composting?","Dapat terurai dan menyuburkan tanah":"It decomposes and enriches the soil","Tidak dapat terurai":"It cannot decompose","Mengandung plastik":"Contains plastic","Selalu beracun":"It is always toxic","Mengapa sampah perlu dipilah dari sumbernya?":"Why should waste be sorted at its source?","Memudahkan pengolahan sesuai jenis":"It makes processing by type easier","Mencampur semua limbah":"Mix all waste together","Mempercepat penumpukan":"Speeds up waste accumulation","Membuat daur ulang sulit":"Makes recycling difficult","Apa dampak pestisida berlebihan?":"What is the impact of excessive pesticide use?","Dapat mencemari tanah dan air":"It can pollute soil and water","Menghilangkan semua polusi":"Removes all pollution","Selalu aman bagi lebah":"It is always safe for bees","Bagaimana hutan membantu mengurangi banjir?":"How do forests help reduce flooding?","Akar membantu menyerap air":"Roots help absorb water","Pohon menghentikan hujan":"Trees stop the rain","Daun mengubah air jadi tanah":"Leaves turn water into soil","Hutan mempersempit sungai":"Forests make rivers narrower","Apa yang dimaksud jejak karbon?":"What is a carbon footprint?","Total emisi gas rumah kaca dari aktivitas":"The total greenhouse gas emissions caused by activities","Jumlah sampah di halaman":"The amount of rubbish in a yard","Luas hutan":"The area of a forest","Banyaknya hujan":"The amount of rainfall","Cara mengurangi emisi perjalanan dekat adalah...":"How can you reduce emissions on short trips?","Berjalan kaki atau bersepeda":"Walk or ride a bicycle","Memakai kendaraan sendiri":"Use a private vehicle","Membiarkan mesin menyala":"Leave the engine running","Memanaskan kendaraan lama":"Warm up the vehicle for a long time","Apa fungsi lubang biopori?":"What is the function of a biopore hole?","Membantu resapan air":"Helps water seep into the ground","Membuang limbah berbahaya":"Disposes of hazardous waste","Mengeringkan tanah":"Dries the soil","Menghambat air meresap":"Prevents water from seeping in","Mengapa baterai bekas perlu dipisahkan?":"Why should used batteries be separated from other waste?","Dapat mengandung bahan berbahaya":"They may contain hazardous materials","Mudah menjadi kompos":"They easily become compost","Aman dimakan hewan":"They are safe for animals to eat","Selalu aman bagi air":"They are always safe for water","Contoh energi terbarukan adalah...":"Which is an example of renewable energy?","Energi matahari":"Solar energy","Batu bara":"Coal","Minyak bumi":"Petroleum","Gas fosil":"Fossil gas","Apa dampak penebangan hutan liar?":"What are the effects of illegal deforestation?","Hilangnya habitat dan erosi":"Loss of habitat and soil erosion","Habitat bertambah":"More habitats","Tanah semakin kuat":"The soil becomes stronger","Banjir pasti berkurang":"Flooding is certain to decrease","Mengapa minyak jelantah tidak dibuang ke saluran air?":"Why should used cooking oil not be poured down drains?","Dapat mencemari dan menyumbat saluran":"It can pollute and clog drains","Menjernihkan air":"It purifies water","Menyuburkan sungai":"It fertilises rivers","Apa tujuan konservasi keanekaragaman hayati?":"What is the purpose of biodiversity conservation?","Melindungi makhluk hidup dan habitatnya":"Protect living things and their habitats","Menghilangkan spesies lokal":"Remove local species","Mengubah hutan jadi sampah":"Turn forests into rubbish","Mengurangi habitat":"Reduce habitats","Apa tindakan saat melihat keran sekolah bocor?":"What should you do if you see a leaking school tap?","Melapor agar segera diperbaiki":"Report it so it can be repaired quickly","Membiarkan air mengalir":"Let the water keep running","Membuka keran lain":"Open another tap","Membuang air":"Waste the water","Mengapa ruang terbuka hijau penting?":"Why are green open spaces important?","Membantu kualitas udara dan resapan":"They improve air quality and water absorption","Menambah suhu kota":"They increase city temperatures","Menghilangkan resapan":"They eliminate water absorption","Apa prinsip ekonomi sirkular?":"What is the principle of a circular economy?","Menjaga bahan tetap digunakan selama mungkin":"Keep materials in use for as long as possible","Langsung membuang barang":"Throw items away immediately","Memperbanyak barang sekali pakai":"Increase the use of disposable products","Gas rumah kaca dari pembakaran bahan bakar fosil adalah...":"Which greenhouse gas is produced by burning fossil fuels?","Karbon dioksida":"Carbon dioxide","Oksigen":"Oxygen","Helium":"Helium","Neon":"Neon","Apa yang dimaksud eutrofikasi perairan?":"What is water eutrophication?","Nutrien berlebih memicu ledakan alga":"Excess nutrients trigger algal blooms","Penguapan air laut":"Evaporation of seawater","Pembentukan batuan":"Rock formation","Penyaringan air":"Water filtration","Mengapa lahan gambut perlu dijaga tetap basah?":"Why should peatlands be kept wet?","Mengurangi risiko kebakaran dan pelepasan karbon":"To reduce fire risk and carbon release","Agar mudah dibakar":"So they are easier to burn","Agar tidak menyimpan air":"So they do not store water","Mempercepat pengeringan":"To speed up drying","Apa dampak mikroplastik pada perairan?":"What is the impact of microplastics in aquatic environments?","Dapat tertelan organisme dan masuk rantai makanan":"They can be swallowed by organisms and enter the food chain","Selalu menjadi oksigen":"They always become oxygen","Menjadi makanan utama":"They become the main food","Menghilangkan pencemaran":"They eliminate pollution","Apa tujuan AMDAL?":"What is the purpose of an environmental impact assessment?","Mengkaji dampak penting kegiatan terhadap lingkungan":"Assess significant environmental impacts of an activity","Menghitung pekerja":"Count workers","Menentukan harga produk":"Set product prices","Mengatur liburan":"Arrange holidays","Apa arti daya dukung lingkungan?":"What does environmental carrying capacity mean?","Kemampuan lingkungan mendukung kehidupan dan aktivitas":"The environment's ability to support life and activities","Jumlah gedung kota":"The number of city buildings","Kecepatan angin":"Wind speed","Jumlah kendaraan":"The number of vehicles","Mengapa koridor satwa liar dibutuhkan?":"Why are wildlife corridors needed?","Menghubungkan habitat yang terpisah":"Connect separated habitats","Membatasi semua satwa":"Restrict all wildlife","Mengganti hutan":"Replace forests","Memperluas jalan":"Widen roads","Apa itu mitigasi perubahan iklim?":"What is climate change mitigation?","Mengurangi emisi atau meningkatkan penyerapannya":"Reducing emissions or increasing their absorption","Menambah emisi":"Increasing emissions","Menghentikan proses alam":"Stopping natural processes","Memindahkan musim":"Moving the seasons","Mengapa pembakaran sampah terbuka berbahaya?":"Why is open waste burning dangerous?","Menghasilkan polutan udara berbahaya":"It produces harmful air pollutants","Menghilangkan semua zat berbahaya":"It removes all hazardous substances","Membuat udara steril":"It makes the air sterile","Menambah kesuburan air":"It increases water fertility","Apa peran mangrove di pesisir?":"What role do mangroves play on coastlines?","Meredam gelombang dan menjadi habitat biota":"They reduce wave impact and provide habitats for organisms","Mempercepat abrasi":"They speed up coastal erosion","Menghilangkan sedimen":"They remove sediment","Mengurangi habitat ikan":"They reduce fish habitats","Mengapa restorasi sebaiknya memakai spesies lokal?":"Why should restoration use native species?","Lebih sesuai dengan kondisi ekologi setempat":"They are better suited to local ecological conditions","Agar semua spesies sama":"So all species become the same","Agar spesies asing mendominasi":"So foreign species dominate","Menghapus keanekaragaman":"Eliminate biodiversity","Apa yang dimaksud pencemaran udara sekunder?":"What is secondary air pollution?","Polutan yang terbentuk melalui reaksi di atmosfer":"Pollutants formed through reactions in the atmosphere","Polutan dari cerobong saja":"Pollutants only from chimneys","Debu tanah":"Soil dust","Uap air murni":"Pure water vapour","Bagaimana permukaan kedap air memengaruhi siklus air kota?":"How do impermeable surfaces affect the urban water cycle?","Mengurangi resapan dan menambah limpasan":"They reduce infiltration and increase runoff","Menambah infiltrasi":"Increase infiltration","Menghilangkan limpasan":"Eliminate runoff","Menghentikan hujan":"Stop rainfall","Apa prinsip polluter pays?":"What is the polluter-pays principle?","Pencemar menanggung biaya pencegahan dan pemulihan":"Polluters bear the costs of prevention and restoration","Biaya ditanggung alam":"Nature pays the costs","Pencemaran tak perlu ditangani":"Pollution does not need to be addressed","Semua biaya korban":"Victims pay all costs","Mengapa keanekaragaman genetik penting?":"Why is genetic diversity important?","Membantu peluang adaptasi terhadap perubahan":"It improves the ability to adapt to change","Membuat individu identik":"Makes individuals identical","Menghilangkan reproduksi":"Eliminates reproduction","Selalu menyebabkan kepunahan":"Always causes extinction","Hadis tentang kebersihan mengajarkan kita untuk...":"What do hadith about cleanliness teach us?","Menjaga kebersihan diri dan lingkungan":"Keep ourselves and our environment clean","Merusak alam":"Damage nature","Mengabaikan kesehatan":"Ignore health","Manusia sebagai khalifah di bumi bertugas...":"What is the duty of humans as stewards on Earth?","Mengelola dan menjaga bumi dengan tanggung jawab":"Manage and protect the Earth responsibly","Menghabiskan sumber daya":"Use up resources","Merusak hutan":"Destroy forests","QS. Al-A’raf ayat 56 melarang manusia...":"What does Qur'an 7:56 forbid people from doing?","Membuat kerusakan di bumi":"Spread corruption on Earth","Menjaga alam":"Protect nature","Berbuat baik":"Do good","Memelihara tanaman":"Care for plants","Hadis tentang menanam pohon mengajarkan nilai...":"What value is taught by hadith about planting trees?","Kebaikan bagi makhluk hidup":"Doing good for living creatures","Kesombongan":"Arrogance","Pemborosan":"Wastefulness","Permusuhan":"Hostility","Sikap sesuai amanah sebagai khalifah adalah...":"Which action reflects the trust of being a steward?","Menggunakan sumber daya secara bijak":"Use resources wisely","Membuang limbah ke sungai":"Dump waste into rivers","Menebang pohon sembarangan":"Cut down trees carelessly","Menyiksa hewan":"Harm animals","QS. Ar-Rum ayat 41 menjelaskan kerusakan terjadi karena...":"According to Qur'an 30:41, what causes corruption?","Perbuatan tangan manusia":"What human hands have done","Gerakan bintang":"The movement of stars","Pergantian siang malam":"The change between day and night","Pertumbuhan tanaman":"Plant growth","Menjaga kebersihan sekolah termasuk...":"Keeping the school clean is an example of...","Perilaku terpuji":"Praised behaviour","Perbuatan sia-sia":"A useless act","Sikap boros":"Wasteful behaviour","Perilaku merusak":"Destructive behaviour","Israf dalam penggunaan air berarti...":"What does israf in water use mean?","Berlebihan atau melampaui batas":"Excessiveness or going beyond limits","Menghemat secukupnya":"Saving an appropriate amount","Berbagi air":"Sharing water","Menjaga sumber air":"Protecting water sources","Sikap terhadap hewan menurut ajaran Islam adalah...":"What is the Islamic teaching about treating animals?","Menyayangi dan tidak menyiksanya":"Treat them kindly and do not mistreat them","Menyakitinya":"Hurt them","Merusak habitat":"Destroy their habitats","Membiarkannya kelaparan":"Let them starve","Contoh sedekah jariyah yang bermanfaat bagi lingkungan...":"Which is an example of ongoing charity that benefits the environment?","Menanam pohon yang bermanfaat":"Plant a beneficial tree","Membuang sampah":"Throw away rubbish","Merusak sumber air":"Damage water sources","Membakar hutan":"Burn forests","QS. Al-Baqarah ayat 205 memberi peringatan tentang...":"What does Qur'an 2:205 warn against?","Tindakan merusak tanaman dan ternak":"Actions that destroy crops and livestock","Membakar kebun":"Burning gardens","Mencemari sungai":"Polluting rivers","Larangan menanam":"A prohibition on planting","Mengapa menjaga sumber air merupakan sikap terpuji?":"Why is protecting water sources praiseworthy?","Air adalah nikmat yang harus dijaga":"Water is a blessing that must be protected","Air tidak berguna":"Water is useless","Air harus dihamburkan":"Water should be wasted","Air hanya untuk satu orang":"Water is only for one person","Contoh amanah terhadap alam adalah...":"Which is an example of being responsible toward nature?","Tidak mengambil sumber daya berlebihan":"Do not take excessive resources","Memburu satwa dilindungi":"Hunt protected wildlife","Membuang limbah beracun":"Dump toxic waste","Menebang hutan liar":"Clear forests illegally","Hadis menyingkirkan gangguan dari jalan mengajarkan...":"What do hadith about removing obstacles from roads teach?","Menjaga keselamatan dan kenyamanan bersama":"Protect everyone's safety and comfort","Mengotori jalan":"Litter the road","Menghalangi jalan":"Block the road","Merusak fasilitas":"Damage facilities","Mengapa tidak boleh menyia-nyiakan makanan?":"Why should we not waste food?","Islam mengajarkan hidup sederhana dan tidak berlebihan":"Islam teaches a simple life without excess","Agar sampah bertambah":"So that waste increases","Makanan tidak berharga":"Food has no value","Supaya cepat habis":"So it runs out quickly","Menjaga keseimbangan alam berarti...":"Maintaining nature's balance means...","Memanfaatkan alam tanpa merusaknya":"Use nature without damaging it","Mengambil sumber daya tanpa batas":"Take unlimited resources","Mencemari udara":"Pollute the air","Menghilangkan habitat":"Destroy habitats","Makna larangan fasad fil ardh adalah...":"What does the prohibition of fasad fil ardh mean?","Larangan membuat kerusakan di bumi":"A prohibition against causing corruption on Earth","Perintah merusak tanaman":"An order to destroy plants","Anjuran membuang sampah":"Encouragement to litter","Larangan menolong":"A prohibition against helping","Menanam pohon dapat menjadi amal kebaikan karena...":"Why can planting a tree be a good deed?","Manfaatnya dirasakan manusia dan makhluk lain":"Its benefits are felt by people and other creatures","Pohon menghasilkan sampah":"Trees produce rubbish","Mengurangi oksigen":"Reduces oxygen","Merusak tanah":"Damages the soil","Sikap terhadap nikmat alam adalah...":"How should we treat nature's blessings?","Bersyukur dan menjaganya":"Be grateful and protect them","Menghamburkannya":"Waste them","Merusaknya":"Damage them","Mengabaikannya":"Ignore them","Hubungan iman dan kepedulian lingkungan adalah...":"What is the relationship between faith and environmental care?","Iman mendorong tanggung jawab terhadap ciptaan Allah":"Faith encourages responsibility for Allah's creation","Tidak ada hubungan":"There is no connection","Iman membolehkan pencemaran":"Faith allows pollution","Alam tidak penting":"Nature is not important","Hadis tentang menanam tanaman mengajarkan bahwa hasil tanaman dapat menjadi...":"What do hadith about planting teach us that its produce can become?","Sedekah bagi makhluk yang memanfaatkannya":"Charity for creatures that benefit from it","Alasan merusak kebun":"A reason to destroy gardens","Sumber kesombongan":"A source of arrogance","Sesuatu yang harus dibuang":"Something that must be thrown away","Dalam QS. Al-A’raf ayat 31, manusia diperintahkan untuk tidak...":"In Qur'an 7:31, what are people instructed not to do?","Berlebih-lebihan":"Be excessive","Bersyukur":"Be grateful","Menjaga kebersihan":"Maintain cleanliness","Perilaku menjaga lingkungan sesuai nilai amanah berarti...":"What does caring for the environment as a trust mean?","Merawat fasilitas dan alam dengan tanggung jawab":"Care for facilities and nature responsibly","Menggunakan air tanpa batas":"Use unlimited water","Membuang sampah ke sungai":"Throw rubbish into rivers","Hadis tentang menyingkirkan gangguan di jalan termasuk contoh...":"Hadith about removing obstacles from roads is an example of...","Perbuatan baik":"A good deed","Perbuatan tercela":"A blameworthy act","Kerusakan alam":"Environmental destruction","QS. Al-An’am ayat 141 mengingatkan manusia agar tidak...":"What does Qur'an 6:141 remind people not to do?","Bersyukur atas rezeki":"Be grateful for provisions","Berbagi hasil panen":"Share the harvest","Memanfaatkan hasil bumi secara baik":"Use the earth's produce properly","Sikap syukur atas air dapat diwujudkan dengan...":"How can we show gratitude for water?","Menggunakan air secukupnya":"Use only the water we need","Mencemari sumber air":"Pollute water sources","Menjaga hewan dan habitatnya merupakan bentuk...":"Protecting animals and their habitats is a form of...","Kasih sayang terhadap makhluk Allah":"Compassion for Allah's creatures","Kesewenang-wenangan":"Arbitrary behaviour","Perusakan":"Destruction","Kandungan QS. Ar-Rum ayat 41 mengajak manusia untuk...":"What does Qur'an 30:41 encourage people to do?","Menyadari akibat kerusakan dan kembali berbuat baik":"Recognise the consequences of corruption and return to doing good","Menambah pencemaran":"Increase pollution","Mengabaikan alam":"Ignore nature","Membuang sampah pada tempatnya di sekolah mencerminkan...":"Putting rubbish in the proper bin at school reflects...","Kebersihan dan tanggung jawab":"Cleanliness and responsibility","Sikap tidak peduli":"An uncaring attitude","Menggunakan sumber daya alam secara seimbang berarti...":"Using natural resources sustainably means...","Memenuhi kebutuhan tanpa merusak kelestariannya":"Meet needs without damaging their sustainability","Mengambil sebanyak-banyaknya":"Take as much as possible","Menghabiskan semua sumber daya":"Use up all resources","Mencemari lingkungan":"Pollute the environment"});
function trQuiz(v){return lang==='en'?(quizEnglish[v]||v):v}
const originalLoadQ=loadQ;
loadQ=function(){originalLoadQ();if(lang==='en'){let q=getQuestions()[qi];$('#questionText').textContent=trQuiz(q[0]);$$('.answer').forEach(b=>{let raw=b.textContent.replace(/^[A-D]\. /,'');b.textContent=b.textContent.slice(0,3)+trQuiz(raw)})}refreshDynamicLanguage()};
const originalDrawLevels=drawLevels;
drawLevels=function(){originalDrawLevels();if(lang==='en'){$('#legend').textContent='🟢 Easy 1–15　 🟠 Medium 16–30　 🔴 Hard 31–50';$$('.tile small').forEach(el=>{el.textContent=el.textContent.replace('MUDAH','EASY').replace('SEDANG','MEDIUM').replace('SULIT','HARD').replace('TERKUNCI','LOCKED')})}};
const originalDrawScores=drawScores;
drawScores=function(which='eco'){originalDrawScores(which);if(lang==='en'){$('#scoreRows .empty').textContent='🌱 No scores yet. Complete a level to appear on the scoreboard!';$$('#scoreRows small').forEach(el=>el.textContent=el.textContent.replace('Level','Level'))}};
const originalAnswer=answer;
answer=function(opt,btn,timeout){
 originalAnswer(opt,btn,timeout);
 if(lang==='en'&&$('#feedback')){
  let txt=$('#feedback').textContent;
  txt=txt.replace('BENAR!','CORRECT!').replace(' poin',' points')
   .replace('SALAH! Pengurangan skor','WRONG! Score penalty')
   .replace('WAKTU HABIS! Jawaban:','TIME IS UP! Answer:')
   .replace('Jawaban:','Answer:');
  const answerText=getQuestions()[qi]?.[1];
  if(answerText)txt=txt.replace(answerText,trQuiz(answerText));
  $('#feedback').textContent=txt;
 }
};
const originalFinish=finish;
finish=function(){
 originalFinish();refreshDynamicLanguage();
 $('#resultInfo').textContent=tr('Kategori')+' '+tr(cat==='eco'?'SIGAP ECO QUIZ':'Pendidikan Agama Islam')+' · '+tr('Level')+' '+level;
 $('#nextLevel').textContent=tr(level===cfg[cat].total?'KATEGORI SELESAI':'LEVEL BERIKUTNYA →');
 $('#homeResult').textContent=tr('MENU UTAMA');
 if(lang==='en')$$('#times .timebox').forEach((el,i)=>{el.innerHTML='<b>Q'+(i+1)+'</b>'+elapsed[i]+' seconds';});
};
translateStatic();audioUI();drawLevels();


/* ===== Perbaikan navigasi menu dan papan skor lintas bahasa ===== */
function openMainMenuDestination(id){
  if(!id) return;
  if(id==='game'){
    level=prog[cat]||1;
    startGame();
    return;
  }
  if(id==='levels') drawLevels();
  if(id==='scores') drawScores(catScore||'eco');
  show(id);
}
$$('[data-go]').forEach(button=>{
  button.onclick=null;
  button.addEventListener('click',()=>openMainMenuDestination(button.dataset.go));
});
$$('.scoretab').forEach(button=>{
  button.onclick=null;
  button.addEventListener('click',()=>drawScores(button.dataset.score));
});
/* Pastikan label menu berubah tanpa menghapus elemen kecil atau atribut tombol. */
function refreshMainMenuLabels(){
  const labels=lang==='en'
    ? ['▶ PLAY','🧩 LEVEL','⚙️ SETTINGS','🏆 SCOREBOARD']
    : ['▶ MAIN','🧩 LEVEL','⚙️ PENGATURAN','🏆 PAPAN SKOR'];
  const descriptions=lang==='en'
    ? ['Start playing','Choose a challenge','Game settings','Player rankings']
    : ['Mulai permainan','Pilih tantangan','Atur permainan','Peringkat pemain'];
  $$('.menu button').forEach((button,index)=>{
    if(index>=labels.length)return;
    let title=button.querySelector('.menu-title');
    if(!title){
      title=document.createElement('span');
      title.className='menu-title';
      button.insertBefore(title,button.firstChild);
    }
    title.textContent=labels[index];
    let small=button.querySelector('small');
    if(small)small.textContent=descriptions[index];
  });
}
const previousTranslateStatic=translateStatic;
translateStatic=function(){
  previousTranslateStatic();
  refreshMainMenuLabels();
  const scoreHeading=$('#scores .heading h2');
  if(scoreHeading)scoreHeading.textContent=lang==='en'?'🏆 Scoreboard':'🏆 Papan Skor';
  const deleteButton=$('#deleteAllScores');
  if(deleteButton)deleteButton.textContent=lang==='en'?'🗑️ DELETE ALL PLAYER SCORES':'🗑️ HAPUS SEMUA SKOR PEMAIN';
  const scoreHead=$('.scorehead');
  if(scoreHead)scoreHead.innerHTML=lang==='en'
    ? '<b>#</b><b>Player Name</b><b>Score</b>'
    : '<b>#</b><b>Nama Pemain</b><b>Skor</b>';
  if($('#scores').classList.contains('active'))drawScores(catScore||'eco');
};
refreshMainMenuLabels();
