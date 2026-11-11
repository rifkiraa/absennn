/**
 * pages-auth-dashboard.js — Halaman Autentikasi, Landing Page, Modal Kamera/GPS, & Dashboard Peran
 * Sistem Absensi Karyawan CV Mandala Mahardika
 */

// ============================================================================
// 1. SKELETON LOADER (Identik dengan Skeleton.jsx)
// ============================================================================
const renderDashboardSkeleton = () => `
  <div class="space-y-6 max-w-5xl mx-auto animate-fadeIn">
    <div class="flex justify-between items-center">
      <div class="space-y-2">
        <div class="animate-pulse bg-slate-200/80 rounded-lg h-7 w-48"></div>
        <div class="animate-pulse bg-slate-200/80 rounded-lg h-4 w-64"></div>
      </div>
      <div class="animate-pulse bg-slate-200/80 rounded-lg h-8 w-32"></div>
    </div>
    <div class="bg-white rounded-card p-6 border border-brand-border space-y-4">
      <div class="animate-pulse bg-slate-200/80 rounded-lg h-5 w-40"></div>
      <div class="animate-pulse bg-slate-200/80 rounded-lg h-8 w-72"></div>
      <div class="flex gap-3 pt-2">
        <div class="animate-pulse bg-slate-200/80 rounded-control h-12 w-36"></div>
        <div class="animate-pulse bg-slate-200/80 rounded-control h-12 w-36"></div>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="bg-white rounded-card p-5 border border-brand-border space-y-2">
        <div class="animate-pulse bg-slate-200/80 rounded-lg h-4 w-24"></div>
        <div class="animate-pulse bg-slate-200/80 rounded-lg h-6 w-32"></div>
      </div>
      <div class="bg-white rounded-card p-5 border border-brand-border space-y-2">
        <div class="animate-pulse bg-slate-200/80 rounded-lg h-4 w-24"></div>
        <div class="animate-pulse bg-slate-200/80 rounded-lg h-6 w-32"></div>
      </div>
      <div class="bg-white rounded-card p-5 border border-brand-border space-y-2">
        <div class="animate-pulse bg-slate-200/80 rounded-lg h-4 w-24"></div>
        <div class="animate-pulse bg-slate-200/80 rounded-lg h-6 w-32"></div>
      </div>
    </div>
  </div>
`;

// ============================================================================
// 2. LANDING PAGE (Identik dengan LandingPage.jsx)
// ============================================================================
Pages.renderLandingPage = () => `
  <div class="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-500 selection:text-white">
    <!-- 1. TOP NAVBAR -->
    <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-blue-700 to-primary text-white flex items-center justify-center shadow-md shadow-blue-600/20">
            ${Icons.building('w-5 h-5 sm:w-6 sm:h-6')}
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-extrabold text-base sm:text-lg tracking-tight text-slate-900">CV Mandala Mahardika</span>
              ${UI.badge('SOT v0.2', 'primary', 'sm')}
            </div>
            <p class="text-[11px] text-slate-500 font-medium hidden sm:block">Sistem Presensi Karyawan Berbasis Web & PWA</p>
          </div>
        </div>

        <nav class="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
          <a href="#fitur" class="hover:text-primary transition-colors">Fitur Unggulan</a>
          <a href="#alur" class="hover:text-primary transition-colors">Alur Presensi</a>
          <a href="#jadwal" class="hover:text-primary transition-colors">Jadwal Kerja</a>
          <a href="#kontak" class="hover:text-primary transition-colors">Profil Kantor</a>
        </nav>

        <div class="flex items-center gap-2 sm:gap-3">
          <button onclick="Router.navigateTo('login')" class="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-primary hover:bg-blue-50 rounded-xl transition-all">
            Masuk
          </button>
          <button onclick="Router.navigateTo('register')" class="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold bg-primary hover:bg-blue-700 text-white rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center gap-1.5">
            ${Icons.user('w-4 h-4')}
            <span>Daftar Akun</span>
          </button>
        </div>
      </div>
    </header>

    <!-- 2. HERO SECTION -->
    <section class="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-primary text-xs font-semibold border border-blue-200/60">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>Teknologi Presensi Swafoto Live & Koordinat GPS Terverifikasi</span>
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Presensi Kerja Karyawan <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">Cepat, Akurat</span> & Terintegrasi Real-Time
            </h1>
            <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Platform presensi digital resmi CV Mandala Mahardika dengan validasi kamera live anti-manipulasi, pencatatan koordinat GPS mandatori, dan rekapitulasi data kehadiran yang siap diekspor ke berkas Excel (CSV) maupun dokumen cetak resmi PDF.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button onclick="Router.navigateTo('login')" class="w-full sm:w-auto px-6 py-3.5 bg-primary hover:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2">
                ${Icons.logIn('w-5 h-5')}
                <span>Masuk ke Akun Saya</span>
              </button>
              <button onclick="Router.navigateTo('register')" class="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base rounded-xl border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2">
                ${Icons.user('w-5 h-5 text-primary')}
                <span>Daftar Karyawan Baru</span>
              </button>
            </div>
            <div class="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <span class="text-xs text-slate-500 font-medium block">Jam Masuk</span>
                <span class="text-base sm:text-lg font-bold text-slate-900">Bebas</span>
                <span class="text-[10px] text-emerald-600 font-semibold block">Fleksibel</span>
              </div>
              <div>
                <span class="text-xs text-slate-500 font-medium block">Batas Kerja</span>
                <span class="text-base sm:text-lg font-bold text-slate-900">Min. 8j 30m</span>
                <span class="text-[10px] text-indigo-600 font-semibold block">Dari Jam Masuk</span>
              </div>
              <div>
                <span class="text-xs text-slate-500 font-medium block">Lokasi GPS</span>
                <span class="text-base sm:text-lg font-bold text-blue-600">Mandatori</span>
                <span class="text-[10px] text-slate-500 block">Tanpa Radius</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 relative">
            <div class="bg-white rounded-3xl p-6 sm:p-7 shadow-float border border-slate-200/80 relative z-10 space-y-5">
              <div class="flex items-center justify-between pb-4 border-b border-slate-100">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-blue-100 text-primary font-bold flex items-center justify-center text-sm">BP</div>
                  <div>
                    <h4 class="font-bold text-slate-900 text-sm">Budi Pratama</h4>
                    <p class="text-xs text-slate-500">Karyawan • Divisi Operasional</p>
                  </div>
                </div>
                ${UI.badge('Tepat Waktu', 'success', 'sm')}
              </div>
              <div class="relative rounded-2xl bg-slate-900 h-52 overflow-hidden flex flex-col items-center justify-center text-white border border-slate-800">
                <div class="w-24 h-32 border-2 border-dashed border-emerald-400 rounded-full relative z-10 flex items-center justify-center">
                  ${Icons.camera('w-6 h-6 text-emerald-400 opacity-60')}
                </div>
                <span class="relative z-10 text-[11px] font-semibold text-emerald-400 mt-2 bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  ✓ Swafoto Wajah Terdeteksi
                </span>
              </div>
              <div class="p-3 bg-blue-50/70 rounded-xl border border-blue-100 flex items-center justify-between text-xs">
                <div class="flex items-center gap-2 text-slate-700">
                  ${Icons.mapPin('w-4 h-4 text-primary flex-shrink-0')}
                  <span class="font-mono text-[11px]">-6.9826, 110.4091 (Akurasi: ±8.5m)</span>
                </div>
                <span class="font-bold text-primary text-[11px]">Server Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. FITUR UNGGULAN -->
    <section id="fitur" class="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="text-primary font-bold text-xs uppercase tracking-wider">Keunggulan Sistem</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1.5">Dirancang Khusus untuk Operasional CV Mandala Mahardika</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="w-12 h-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center mb-4">${Icons.camera('w-6 h-6')}</div>
            <h3 class="font-bold text-slate-900 text-base mb-1.5">Swafoto Kamera Live</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Pengambilan foto langsung dari stream kamera perangkat dengan panduan oval wajah.</p>
          </div>
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">${Icons.mapPin('w-6 h-6')}</div>
            <h3 class="font-bold text-slate-900 text-base mb-1.5">Koordinat GPS Mandatori</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Perekaman otomatis latitude, longitude, dan estimasi akurasi meter tanpa batasan radius kantor.</p>
          </div>
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">${Icons.clock('w-6 h-6')}</div>
            <h3 class="font-bold text-slate-900 text-base mb-1.5">Durasi Minimal 8 Jam 30 Menit</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Target absen pulang minimal dihitung otomatis Jam Masuk + 8 jam 30 menit.</p>
          </div>
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">${Icons.fileText('w-6 h-6')}</div>
            <h3 class="font-bold text-slate-900 text-base mb-1.5">Ekspor CSV & Cetak PDF</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Ekspor rekap kehadiran kompatibel Excel serta dokumen cetak A4 ber-kop surat resmi.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. FOOTER -->
    <footer id="kontak" class="bg-slate-900 text-slate-400 py-10 text-xs border-t border-slate-800 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2 text-white font-bold">
          ${Icons.building('w-4 h-4 text-primary')}
          <span>CV Mandala Mahardika — Sistem Absensi Karyawan</span>
        </div>
        <div class="text-center sm:text-right text-[11px]">
          <p>© 2026 CV Mandala Mahardika. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  </div>
`;

// ============================================================================
// 3. LOGIN PAGE (Identik dengan LoginPage.jsx)
// ============================================================================
const LoginController = {
  selectedRole: 'employee',
  email: 'budi.santoso@mandalamahardika.com',
  password: 'password123',
  showPassword: false,
  errorMsg: '',
  isLoading: false,

  ROLE_OPTIONS: [
    {
      id: 'employee',
      label: 'Karyawan',
      sublabel: 'Staf Operasional',
      icon: Icons.user,
      badge: 'Staf',
      badgeVariant: 'primary',
      activeColor: 'border-blue-600 bg-blue-50/70 text-blue-900 ring-2 ring-blue-500/20',
      activeIconBg: 'bg-blue-600 text-white',
      inactiveIconBg: 'bg-slate-100 text-slate-500',
      description: 'Presensi live camera & GPS, riwayat kehadiran pribadi, dan rekapitulasi shift.',
      defaultEmail: 'budi.santoso@mandalamahardika.com',
      defaultPassword: 'password123',
    },
    {
      id: 'admin',
      label: 'Admin',
      sublabel: 'HR & Operasional',
      icon: Icons.users,
      badge: 'HR & Ops',
      badgeVariant: 'warning',
      activeColor: 'border-amber-500 bg-amber-50/70 text-amber-950 ring-2 ring-amber-500/20',
      activeIconBg: 'bg-amber-600 text-white',
      inactiveIconBg: 'bg-slate-100 text-slate-500',
      description: 'Pemantauan presensi harian, manajemen data karyawan, verifikasi, dan ekspor CSV.',
      defaultEmail: 'admin@mandalamahardika.com',
      defaultPassword: 'password123',
    },
    {
      id: 'superadmin',
      label: 'Superadmin',
      sublabel: 'Direksi & Audit',
      icon: Icons.shield,
      badge: 'Eksekutif',
      badgeVariant: 'danger',
      activeColor: 'border-rose-600 bg-rose-50/70 text-rose-950 ring-2 ring-rose-500/20',
      activeIconBg: 'bg-rose-600 text-white',
      inactiveIconBg: 'bg-slate-100 text-slate-500',
      description: 'Audit trail aktivitas lengkap, konfigurasi jam kerja fleksibel, dan analitik eksekutif.',
      defaultEmail: 'superadmin@mandalamahardika.com',
      defaultPassword: 'password123',
    },
  ],

  selectRole: (roleId) => {
    const found = LoginController.ROLE_OPTIONS.find((r) => r.id === roleId);
    if (!found) return;
    LoginController.selectedRole = found.id;
    LoginController.email = found.defaultEmail;
    LoginController.password = found.defaultPassword;
    LoginController.errorMsg = '';
    Router.render();
  },

  togglePassword: () => {
    const emailEl = document.getElementById('login-email');
    const passEl = document.getElementById('login-password');
    if (emailEl) LoginController.email = emailEl.value;
    if (passEl) LoginController.password = passEl.value;
    LoginController.showPassword = !LoginController.showPassword;
    Router.render();
  },

  submit: async (e) => {
    e.preventDefault();
    const emailEl = document.getElementById('login-email');
    const passEl = document.getElementById('login-password');
    const email = emailEl ? emailEl.value.trim() : LoginController.email;
    const password = passEl ? passEl.value : LoginController.password;

    LoginController.email = email;
    LoginController.password = password;
    LoginController.errorMsg = '';

    if (!email) {
      LoginController.errorMsg = 'Alamat email wajib diisi.';
      Router.render();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      LoginController.errorMsg = 'Format email tidak valid. Gunakan format contoh: nama@mandalamahardika.com';
      Router.render();
      return;
    }
    if (!password) {
      LoginController.errorMsg = 'Kata sandi wajib diisi.';
      Router.render();
      return;
    }

    LoginController.isLoading = true;
    Router.render();

    try {
      const loggedUser = await AppState.login(email, password);
      LoginController.isLoading = false;
      Router.navigateTo(AppState.getDefaultPageForRole(loggedUser.role));
    } catch (err) {
      LoginController.isLoading = false;
      LoginController.errorMsg = err.message || 'Terjadi kegagalan saat login.';
      Router.render();
    }
  },
};

Pages.renderLoginPage = () => {
  const activeRole = LoginController.ROLE_OPTIONS.find((r) => r.id === LoginController.selectedRole) || LoginController.ROLE_OPTIONS[0];
  return `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 flex flex-col justify-center items-center p-4 sm:p-6">
      <div class="w-full max-w-lg">
        <!-- Brand Header -->
        <div class="text-center mb-6">
          <div class="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-700 to-blue-500 text-white items-center justify-center shadow-lg shadow-blue-500/25 mb-3 cursor-pointer" onclick="Router.navigateTo('landing')" title="Lihat Landing Page">
            ${Icons.building('w-7 h-7')}
          </div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">CV Mandala Mahardika</h1>
          <p class="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Sistem Absensi Karyawan Berbasis Web (Mobile-First / PWA)</p>
        </div>

        <div class="bg-white/95 backdrop-blur-sm rounded-card border border-slate-200/80 shadow-float p-6 sm:p-8">
          <div class="mb-5 pb-4 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 class="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Masuk ke Sistem</h2>
              <p class="text-xs text-slate-500 mt-0.5">Pilih peran akses akun Anda dan masukkan kredensial untuk melanjutkan</p>
            </div>
            <button onclick="Router.navigateTo('landing')" class="text-xs font-semibold text-primary hover:underline">Beranda Info</button>
          </div>

          <!-- Pilihan Role Demo -->
          <div class="mb-5">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Pilih Akun Demo / Akses:</label>
            <div class="grid grid-cols-3 gap-2">
              ${LoginController.ROLE_OPTIONS.map((role) => {
                const isSelected = LoginController.selectedRole === role.id;
                return `
                  <button type="button" onclick="LoginController.selectRole('${role.id}')" ${LoginController.isLoading ? 'disabled' : ''} class="p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    isSelected ? role.activeColor : 'border-slate-200 bg-white hover:bg-slate-50/80 text-slate-600'
                  }">
                    <div class="flex items-center justify-between mb-2">
                      <div class="w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${isSelected ? role.activeIconBg : role.inactiveIconBg}">
                        ${role.icon('w-4 h-4')}
                      </div>
                      ${UI.badge(role.badge, role.badgeVariant, 'xs')}
                    </div>
                    <div>
                      <span class="block font-bold text-xs leading-tight">${role.label}</span>
                      <span class="block text-[10px] text-slate-400 mt-0.5 leading-none truncate">${role.sublabel}</span>
                    </div>
                  </button>
                `;
              }).join('')}
            </div>

            <div class="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-[11px] text-slate-600 flex items-start gap-2">
              ${Icons.checkCircle('w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5')}
              <div>
                <span class="font-semibold text-slate-800">Hak Akses ${activeRole.label}:</span>
                <span>${activeRole.description}</span>
              </div>
            </div>
          </div>

          <!-- Form Login -->
          <form onsubmit="LoginController.submit(event)" class="space-y-4">
            ${
              LoginController.errorMsg
                ? `
              <div class="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5 animate-fadeIn">
                ${Icons.alertCircle('w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600')}
                <div class="flex-1">
                  <span class="font-semibold block">Gagal Masuk:</span>
                  <span>${LoginController.errorMsg}</span>
                </div>
              </div>
            `
                : ''
            }

            <div>
              <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Alamat Email Pengguna</label>
              <input id="login-email" type="email" value="${LoginController.email}" placeholder="nama@mandalamahardika.com" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-slate-50/50" required ${
                LoginController.isLoading ? 'disabled' : ''
              } />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Kata Sandi</label>
              <div class="relative">
                <input id="login-password" type="${LoginController.showPassword ? 'text' : 'password'}" value="${LoginController.password}" placeholder="Masukkan kata sandi akun" class="w-full px-3.5 py-2.5 pr-10 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-slate-50/50" required ${
                  LoginController.isLoading ? 'disabled' : ''
                } />
                <button type="button" onclick="LoginController.togglePassword()" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1">
                  ${LoginController.showPassword ? Icons.eyeOff('w-4 h-4') : Icons.eye('w-4 h-4')}
                </button>
              </div>
            </div>

            <div class="pt-2">
              <button type="submit" ${LoginController.isLoading ? 'disabled' : ''} class="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-control text-base font-bold bg-primary text-white hover:bg-primary-dark shadow-sm transition-all ${
                LoginController.isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }">
                ${LoginController.isLoading ? '' : Icons.logIn('w-5 h-5')}
                <span>${LoginController.isLoading ? 'Menghubungkan ke Server...' : `Masuk sebagai ${activeRole.label}`}</span>
              </button>
            </div>
          </form>

          <div class="mt-6 pt-5 border-t border-slate-100 text-center text-xs text-slate-600">
            Belum memiliki kredensial akun?
            <button type="button" onclick="Router.navigateTo('register')" class="font-bold text-primary hover:underline ml-1">
              Info Pendaftaran Akun
            </button>
          </div>
        </div>

        <div class="mt-5 text-center text-xs text-slate-500">
          <p>© ${new Date().getFullYear()} CV Mandala Mahardika — Hak Cipta Dilindungi</p>
          <p class="mt-1 text-[11px] text-slate-400">Terhubung ke API Backend Produksi (Railway Live Service)</p>
        </div>
      </div>
    </div>
  `;
};

// ============================================================================
// 4. REGISTER PAGE (Identik dengan RegisterPage.jsx)
// ============================================================================
const RegisterController = {
  name: '',
  email: '',
  department: 'Operasional',
  role: 'employee',
  password: '',
  confirmPassword: '',
  showPassword: false,
  errorMsg: '',
  successMsg: '',
  isLoading: false,

  syncInputs: () => {
    const getVal = (id) => document.getElementById(id)?.value || '';
    RegisterController.name = getVal('reg-name');
    RegisterController.email = getVal('reg-email');
    RegisterController.department = getVal('reg-dept') || 'Operasional';
    RegisterController.role = getVal('reg-role') || 'employee';
    RegisterController.password = getVal('reg-pass');
    RegisterController.confirmPassword = getVal('reg-confirm');
  },

  togglePassword: () => {
    RegisterController.syncInputs();
    RegisterController.showPassword = !RegisterController.showPassword;
    Router.render();
  },

  submit: async (e) => {
    e.preventDefault();
    RegisterController.syncInputs();
    RegisterController.errorMsg = '';
    RegisterController.successMsg = '';

    const { name, email, department, role, password, confirmPassword } = RegisterController;
    if (!name.trim()) {
      RegisterController.errorMsg = 'Nama lengkap wajib diisi.';
      Router.render();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      RegisterController.errorMsg = 'Format email tidak valid. Gunakan format contoh: nama@mandalamahardika.com';
      Router.render();
      return;
    }
    if (password.length < 6) {
      RegisterController.errorMsg = 'Kata sandi minimal terdiri dari 6 karakter.';
      Router.render();
      return;
    }
    if (password !== confirmPassword) {
      RegisterController.errorMsg = 'Konfirmasi kata sandi tidak cocok. Silakan periksa kembali.';
      Router.render();
      return;
    }

    RegisterController.isLoading = true;
    Router.render();

    try {
      const newUser = await AppState.register({ name, email, department, role, password });
      RegisterController.isLoading = false;
      RegisterController.successMsg = `Pendaftaran berhasil! Silakan masuk menggunakan akun ${newUser.full_name || name}.`;
      Router.render();
      setTimeout(() => {
        RegisterController.successMsg = '';
        Router.navigateTo('login');
      }, 1200);
    } catch (err) {
      RegisterController.isLoading = false;
      RegisterController.errorMsg = err.message || 'Terjadi kesalahan saat pendaftaran.';
      Router.render();
    }
  },
};

Pages.renderRegisterPage = () => `
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 flex flex-col justify-center items-center p-4 sm:p-6">
    <div class="w-full max-w-lg bg-white rounded-3xl shadow-float border border-slate-200/80 p-6 sm:p-8">
      <div class="text-center mb-6">
        <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-700 to-primary text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-blue-600/20">
          ${Icons.building('w-6 h-6')}
        </div>
        <h1 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Daftar Akun Karyawan</h1>
        <p class="text-xs sm:text-sm text-slate-500 mt-1">CV Mandala Mahardika — Sistem Presensi SOT v0.2</p>
      </div>

      ${
        RegisterController.errorMsg
          ? `
        <div class="p-3.5 mb-5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
          ${Icons.alertCircle('w-5 h-5 flex-shrink-0 text-rose-600 mt-0.5')}
          <span class="leading-snug">${RegisterController.errorMsg}</span>
        </div>
      `
          : ''
      }

      ${
        RegisterController.successMsg
          ? `
        <div class="p-3.5 mb-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
          ${Icons.checkCircle('w-5 h-5 flex-shrink-0 text-emerald-600 mt-0.5')}
          <span class="leading-snug">${RegisterController.successMsg}</span>
        </div>
      `
          : ''
      }

      <form onsubmit="RegisterController.submit(event)" class="space-y-4 text-xs sm:text-sm">
        <div>
          <label class="block font-semibold text-slate-700 mb-1 text-xs">Nama Lengkap Karyawan</label>
          <input id="reg-name" type="text" value="${RegisterController.name}" placeholder="Contoh: Rahmat Hidayat" required class="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        </div>
        <div>
          <label class="block font-semibold text-slate-700 mb-1 text-xs">Alamat Email Kantor / Aktif</label>
          <input id="reg-email" type="email" value="${RegisterController.email}" placeholder="nama@mandalamahardika.com" required class="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold text-slate-700 mb-1 text-xs">Divisi / Departemen</label>
            <select id="reg-dept" class="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
              <option value="Operasional" ${RegisterController.department === 'Operasional' ? 'selected' : ''}>Operasional & Lapangan</option>
              <option value="Keuangan" ${RegisterController.department === 'Keuangan' ? 'selected' : ''}>Keuangan & HR</option>
              <option value="Logistik" ${RegisterController.department === 'Logistik' ? 'selected' : ''}>Logistik & Distribusi</option>
              <option value="Administrasi" ${RegisterController.department === 'Administrasi' ? 'selected' : ''}>Administrasi</option>
            </select>
          </div>
          <div>
            <label class="block font-semibold text-slate-700 mb-1 text-xs">Peran Akun</label>
            <select id="reg-role" class="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
              <option value="employee" ${RegisterController.role === 'employee' ? 'selected' : ''}>Karyawan (Staf)</option>
              <option value="admin" ${RegisterController.role === 'admin' ? 'selected' : ''}>Admin Operasional</option>
            </select>
          </div>
        </div>
        <div>
          <label class="block font-semibold text-slate-700 mb-1 text-xs">Kata Sandi (Minimal 6 Karakter)</label>
          <div class="relative">
            <input id="reg-pass" type="${RegisterController.showPassword ? 'text' : 'password'}" value="${RegisterController.password}" placeholder="Buat kata sandi akun" required class="w-full px-3.5 py-2.5 pr-10 rounded-xl border border-brand-border bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
            <button type="button" onclick="RegisterController.togglePassword()" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1">
              ${RegisterController.showPassword ? Icons.eyeOff('w-4 h-4') : Icons.eye('w-4 h-4')}
            </button>
          </div>
        </div>
        <div>
          <label class="block font-semibold text-slate-700 mb-1 text-xs">Konfirmasi Kata Sandi</label>
          <input id="reg-confirm" type="${RegisterController.showPassword ? 'text' : 'password'}" value="${RegisterController.confirmPassword}" placeholder="Ulangi kata sandi Anda" required class="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        </div>
        <div class="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-[11px] text-slate-600 leading-relaxed">
          Pendaftaran akun ini terikat pada aturan jam kerja fleksibel (minimal durasi kerja 8 jam 30 menit dari jam absen masuk) serta verifikasi swafoto kamera live dan koordinat GPS mandatori sesuai standar operasional CV Mandala Mahardika.
        </div>
        <div class="pt-2">
          <button type="submit" ${RegisterController.isLoading ? 'disabled' : ''} class="w-full py-3 rounded-control bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-all">
            ${RegisterController.isLoading ? 'Mendaftarkan Akun...' : 'Daftar & Masuk ke Sistem'}
          </button>
        </div>
      </form>

      <div class="mt-6 pt-5 border-t border-slate-100 text-center text-xs text-slate-500">
        Sudah memiliki akun terdaftar?
        <button onclick="Router.navigateTo('login')" class="font-bold text-primary hover:underline ml-1">Masuk di sini</button>
      </div>
    </div>
  </div>
`;

// ============================================================================
// 5. MODAL VERIFIKASI ABSENSI KAMERA LIVE & GPS (Lengkap Seluruh Step)
// ============================================================================
const VerificationModal = {
  actionType: 'CHECK_IN',
  step: 'CAPTURE', // 'CAPTURE' | 'CONFIRM' | 'SUBMITTING' | 'SUCCESS'
  capturedPhoto: null,
  coords: null,
  notes: '',
  apiError: '',
  submitResult: null,
  onSuccessCallback: null,

  open: async (actionType = 'CHECK_IN', onSuccess = null) => {
    VerificationModal.actionType = actionType;
    VerificationModal.step = 'CAPTURE';
    VerificationModal.capturedPhoto = null;
    VerificationModal.coords = null;
    VerificationModal.notes = '';
    VerificationModal.apiError = '';
    VerificationModal.submitResult = null;
    VerificationModal.onSuccessCallback = onSuccess;

    VerificationModal.render();
    await VerificationModal.startStreamAndGPS();
  },

  startStreamAndGPS: async () => {
    const videoEl = document.getElementById('live-camera-video');
    if (videoEl) {
      await CameraManager.start(videoEl);
    }
    const loc = await GeoManager.getLocation();
    VerificationModal.coords = loc;
    const gpsBadgeEl = document.getElementById('modal-gps-coords');
    if (gpsBadgeEl && loc) {
      gpsBadgeEl.innerHTML = `${loc.latitude}, ${loc.longitude} (±${loc.accuracy_m}m)`;
    }
  },

  switchCamera: async () => {
    CameraManager.facingMode = CameraManager.facingMode === 'user' ? 'environment' : 'user';
    const videoEl = document.getElementById('live-camera-video');
    if (videoEl) await CameraManager.start(videoEl);
  },

  takePhoto: async () => {
    const videoEl = document.getElementById('live-camera-video');
    const result = await CameraManager.capture(videoEl);
    if (result) {
      VerificationModal.capturedPhoto = result;
      CameraManager.stop();
      if (!VerificationModal.coords) {
        VerificationModal.coords = await GeoManager.getLocation();
      }
      VerificationModal.step = 'CONFIRM';
      VerificationModal.render();
    }
  },

  retakePhoto: async () => {
    VerificationModal.capturedPhoto = null;
    VerificationModal.step = 'CAPTURE';
    VerificationModal.apiError = '';
    VerificationModal.render();
    await VerificationModal.startStreamAndGPS();
  },

  submit: async () => {
    const notesInput = document.getElementById('attendance-notes-input');
    if (notesInput) VerificationModal.notes = notesInput.value.trim();

    if (!VerificationModal.capturedPhoto || !VerificationModal.capturedPhoto.blob) {
      VerificationModal.apiError = 'Foto swafoto kamera live belum berhasil diambil.';
      VerificationModal.render();
      return;
    }

    const activeCoords = VerificationModal.coords || GeoManager.fallbackCoords();
    VerificationModal.step = 'SUBMITTING';
    VerificationModal.apiError = '';
    VerificationModal.render();

    try {
      const payload = {
        photoBlob: VerificationModal.capturedPhoto.blob,
        latitude: activeCoords.latitude,
        longitude: activeCoords.longitude,
        accuracy_m: activeCoords.accuracy_m,
        notes: VerificationModal.notes,
      };

      const isCheckIn = VerificationModal.actionType === 'CHECK_IN';
      const res = isCheckIn
        ? await attendanceApi.submitCheckIn(payload)
        : await attendanceApi.submitCheckOut(payload);

      if (res.error) {
        VerificationModal.apiError = res.error.message || 'Gagal mengirim transaksi absensi.';
        VerificationModal.step = 'CONFIRM';
        VerificationModal.render();
      } else {
        VerificationModal.submitResult = res.data;
        VerificationModal.step = 'SUCCESS';
        VerificationModal.render();
        if (VerificationModal.onSuccessCallback) {
          VerificationModal.onSuccessCallback(res.data);
        }
      }
    } catch (err) {
      VerificationModal.apiError = err.message || 'Terjadi kesalahan jaringan.';
      VerificationModal.step = 'CONFIRM';
      VerificationModal.render();
    }
  },

  render: () => {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return;

    const isCheckIn = VerificationModal.actionType === 'CHECK_IN';
    const actionTitle = isCheckIn ? 'Absen Masuk' : 'Absen Pulang';
    const coords = VerificationModal.coords || GeoManager.fallbackCoords();

    let bodyHtml = '';

    if (VerificationModal.step === 'SUCCESS' && VerificationModal.submitResult) {
      bodyHtml = `
        <div class="text-center py-6 space-y-4 animate-fadeIn">
          <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
            ${Icons.checkCircle('w-10 h-10')}
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-900">${actionTitle} Berhasil Dicatat!</h3>
            <p class="text-xs text-slate-500 mt-1">Transaksi kehadiran Anda telah tersimpan di server CV Mandala Mahardika.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
            <div class="flex justify-between">
              <span class="text-slate-500">ID Sesi:</span>
              <span class="font-mono font-bold text-slate-900">${VerificationModal.submitResult.id || '-'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Koordinat GPS:</span>
              <span class="font-mono text-slate-700">${coords.latitude}, ${coords.longitude}</span>
            </div>
            ${
              VerificationModal.submitResult.minCheckOutTime
                ? `<div class="flex justify-between">
                    <span class="text-slate-500">Target Pulang Minimal:</span>
                    <span class="font-bold text-primary">${VerificationModal.submitResult.minCheckOutTime}</span>
                  </div>`
                : ''
            }
          </div>
          <div class="pt-2">
            <button onclick="UI.closeModal()" class="w-full py-3 rounded-control bg-primary hover:bg-primary-dark text-white font-bold text-sm">
              Selesai & Tutup
            </button>
          </div>
        </div>
      `;
    } else if (VerificationModal.step === 'CAPTURE') {
      bodyHtml = `
        <div class="space-y-4">
          <div class="relative rounded-2xl bg-slate-900 h-64 sm:h-72 overflow-hidden flex items-center justify-center border border-slate-800">
            <video id="live-camera-video" autoplay playsinline muted class="w-full h-full object-cover"></video>
            <!-- Panduan Oval Wajah -->
            <div class="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
              <div class="w-36 h-48 border-2 border-dashed border-emerald-400/90 rounded-full shadow-lg"></div>
              <span class="mt-2 px-3 py-0.5 rounded-full bg-slate-900/80 text-emerald-300 text-[11px] font-medium">
                Posisikan wajah di dalam area oval
              </span>
            </div>
            <button type="button" onclick="VerificationModal.switchCamera()" class="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-900/80 text-white hover:bg-slate-800 text-xs flex items-center gap-1.5 border border-white/15">
              ${Icons.refreshCw('w-4 h-4')}
              <span>Putar Kamera</span>
            </button>
          </div>

          <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between text-xs">
            <div class="flex items-center gap-2 text-slate-700">
              ${Icons.mapPin('w-4 h-4 text-primary flex-shrink-0')}
              <span>Koordinat GPS: <strong id="modal-gps-coords" class="font-mono">${coords.latitude}, ${coords.longitude} (±${coords.accuracy_m}m)</strong></span>
            </div>
            ${UI.badge('GPS Aktif', 'success', 'xs')}
          </div>

          <div class="flex justify-end gap-2 pt-2">
            <button type="button" onclick="UI.closeModal()" class="px-4 py-2.5 rounded-control border border-brand-border text-sm font-medium text-slate-700 hover:bg-slate-50">
              Batal
            </button>
            <button type="button" onclick="VerificationModal.takePhoto()" class="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-control bg-primary hover:bg-primary-dark text-white text-sm font-semibold shadow-sm">
              ${Icons.camera('w-5 h-5')}
              <span>Ambil Swafoto Sekarang</span>
            </button>
          </div>
        </div>
      `;
    } else {
      const isSubmitting = VerificationModal.step === 'SUBMITTING';
      bodyHtml = `
        <div class="space-y-4">
          ${
            VerificationModal.apiError
              ? `<div class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2">
                  ${Icons.alertCircle('w-4 h-4 flex-shrink-0 mt-0.5')}
                  <span>${VerificationModal.apiError}</span>
                </div>`
              : ''
          }
          <div class="relative rounded-2xl bg-slate-900 h-60 overflow-hidden border border-slate-200">
            <img src="${VerificationModal.capturedPhoto?.dataUrl || ''}" alt="Preview Swafoto" class="w-full h-full object-cover" />
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-[11px] font-semibold shadow">
              ✓ Swafoto Siap Dikirim
            </span>
          </div>

          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
            <div class="flex justify-between">
              <span class="text-slate-500">Lokasi GPS Tercatat:</span>
              <span class="font-mono font-semibold text-slate-800">${coords.latitude}, ${coords.longitude} (±${coords.accuracy_m}m)</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Waktu Perangkat:</span>
              <span class="font-mono text-blue-700 font-semibold">${timeUtils.getCurrentWIBString()}</span>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Catatan Tambahan (Opsional)</label>
            <input id="attendance-notes-input" type="text" value="${VerificationModal.notes}" placeholder="Contoh: Hadir bertugas operasional harian" class="w-full px-3 py-2 rounded-control border border-brand-border text-xs sm:text-sm bg-slate-50/50" ${
              isSubmitting ? 'disabled' : ''
            } />
          </div>

          <div class="flex gap-2 pt-2">
            <button type="button" onclick="VerificationModal.retakePhoto()" ${isSubmitting ? 'disabled' : ''} class="px-4 py-2.5 rounded-control border border-brand-border text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50">
              Foto Ulang
            </button>
            <button type="button" onclick="VerificationModal.submit()" ${isSubmitting ? 'disabled' : ''} class="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-control bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm">
              ${Icons.checkCircle('w-4 h-4')}
              <span>${isSubmitting ? 'Mengirim ke Server...' : `Konfirmasi ${actionTitle}`}</span>
            </button>
          </div>
        </div>
      `;
    }

    modalRoot.innerHTML = `
      <div role="dialog" aria-modal="true" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn overflow-y-auto">
        <div class="bg-white rounded-card max-w-lg w-full p-5 sm:p-6 shadow-float border border-brand-border my-auto">
          <div class="flex items-center justify-between pb-3 border-b border-brand-border mb-4">
            <div>
              <div class="flex items-center gap-2">
                <h2 class="text-base sm:text-lg font-bold text-slate-900">Verifikasi ${actionTitle}</h2>
                ${UI.badge('Live GPS & Kamera', 'success', 'sm')}
              </div>
              <p class="text-xs text-slate-500 mt-0.5">CV Mandala Mahardika — Verifikasi Kamera Live & Perekaman GPS</p>
            </div>
            <button onclick="UI.closeModal()" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100">
              ${Icons.x('w-5 h-5')}
            </button>
          </div>
          ${bodyHtml}
        </div>
      </div>
    `;
  },
};

// ============================================================================
// 6. EMPLOYEE DASHBOARD PAGE (Identik dengan EmployeeDashboardPage.jsx)
// ============================================================================
const EmployeeDashboardController = {
  todayStatus: {
    status: 'BELUM_ABSEN',
    checkInTime: null,
    checkOutTime: null,
    minCheckOutTime: null,
  },
  monthlySummary: {
    total_sessions: 0,
    total_hours: '0.0',
    meets_minimum_count: 0,
    below_minimum_count: 0,
  },
  historyList: [],

  refresh: async () => {
    const container = document.getElementById('page-content');
    if (container) Pages.mountEmployeeDashboard(container);
  },
};

Pages.mountEmployeeDashboard = async (container) => {
  container.innerHTML = renderDashboardSkeleton();
  const user = AppState.currentUser;

  try {
    const [todayRes, dashRes] = await Promise.all([
      attendanceApi.getTodayStatus(user?.id),
      attendanceApi.getEmployeeDashboard(),
    ]);

    if (todayRes && todayRes.data) {
      EmployeeDashboardController.todayStatus = todayRes.data;
    }
    if (dashRes && dashRes.data) {
      if (dashRes.data.monthly_summary) {
        EmployeeDashboardController.monthlySummary = dashRes.data.monthly_summary;
      }
      if (dashRes.data.recent_history) {
        EmployeeDashboardController.historyList = dashRes.data.recent_history.map((row) => {
          const checkInTime = row.check_in_at ? row.check_in_at.split(' ')[1] || row.check_in_at : '-';
          const checkOutTime = row.check_out_at ? row.check_out_at.split(' ')[1] || row.check_out_at : '-';
          const dateStr = row.check_in_at ? row.check_in_at.split(' ')[0] : '-';
          let statusLabel = 'Sedang Berjalan';
          let variant = 'warning';
          if (row.duration_status === 'MEETS_MINIMUM') {
            statusLabel = 'Target Terpenuhi (≥ 510m)';
            variant = 'success';
          } else if (row.duration_status === 'BELOW_MINIMUM') {
            statusLabel = 'Kurang Durasi (< 510m)';
            variant = 'warning';
          }
          return {
            id: `ATT-${row.id}`,
            date: dateStr,
            checkIn: `${checkInTime} WIB`,
            checkOut: checkOutTime !== '-' ? `${checkOutTime} WIB` : '-',
            statusLabel,
            variant,
            notes: row.notes,
          };
        });
      }
    }
  } catch (e) {
    console.error('Gagal memuat dashboard karyawan:', e);
  }

  const renderContent = () => {
    const { todayStatus, monthlySummary, historyList } = EmployeeDashboardController;
    const todayDateString = new Date().toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    let statusSectionHtml = '';
    if (todayStatus.status === 'BELUM_ABSEN') {
      statusSectionHtml = `
        <div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></span>
            <h2 class="text-lg font-bold text-slate-900">Belum Melakukan Absen Masuk</h2>
          </div>
          <p class="text-xs text-slate-500 mt-1">
            Absen masuk bebas jam berapapun. Target minimal absen pulang adalah <strong>8 jam 30 menit (510 menit)</strong> setelah jam absen masuk Anda.
          </p>
        </div>
      `;
    } else if (todayStatus.status === 'SUDAH_MASUK') {
      const evalRun = timeUtils.evaluateWorkDuration(todayStatus.checkInTime, timeUtils.getCurrentWIBString());
      const progressPct = Math.min(100, Math.round((evalRun.durationMinutes / 510) * 100));
      statusSectionHtml = `
        <div class="space-y-2">
          <div class="flex flex-wrap items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <h2 class="text-base sm:text-lg font-bold text-emerald-800">Sudah Masuk: ${todayStatus.checkInTime}</h2>
            <span class="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
              Target Pulang Min: ${todayStatus.minCheckOutTime || timeUtils.calculateMinCheckOutTime(todayStatus.checkInTime)}
            </span>
          </div>
          <div class="pt-1 max-w-lg">
            <div class="flex items-center justify-between text-xs text-slate-600 mb-1">
              <span>Durasi Kerja Berjalan: <strong id="live-duration-text">${evalRun.durationFormatted}</strong></span>
              <span class="font-semibold ${evalRun.targetMet ? 'text-emerald-600' : 'text-amber-600'}">
                ${evalRun.targetMet ? 'Target Terpenuhi ✓' : `${progressPct}% (Target: 8j 30m)`}
              </span>
            </div>
            <div class="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <div class="h-full transition-all duration-500 ${evalRun.targetMet ? 'bg-emerald-500' : 'bg-blue-600'}" style="width: ${progressPct}%"></div>
            </div>
            <p class="text-[11px] text-slate-500 mt-1">
              ${
                evalRun.targetMet
                  ? `<span class="text-emerald-700 font-medium">✓ Anda telah memenuhi batas minimal kerja 8 jam 30 menit (+${timeUtils.formatDurationHuman(evalRun.diffMinutes)}).</span>`
                  : `<span class="text-amber-700 font-medium">⏳ Durasi kerja saat ini masih kurang ${timeUtils.formatDurationHuman(evalRun.diffMinutes)} dari batas minimal 8 jam 30 menit.</span>`
              }
            </p>
          </div>
        </div>
      `;
    } else {
      const evalFinished = timeUtils.evaluateWorkDuration(todayStatus.checkInTime, todayStatus.checkOutTime);
      statusSectionHtml = `
        <div class="space-y-1.5">
          <div class="flex flex-wrap items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-blue-600"></span>
            <h2 class="text-base sm:text-lg font-bold text-slate-900">Absensi Selesai (${todayStatus.checkInTime} – ${todayStatus.checkOutTime})</h2>
            ${UI.badge(evalFinished.statusLabel, evalFinished.badgeVariant, 'sm')}
          </div>
          <div class="p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 max-w-lg">
            <div class="flex justify-between items-center mb-1">
              <span class="text-slate-500">Total Durasi Kerja:</span>
              <strong class="font-mono text-slate-900">${evalFinished.durationFormatted}</strong>
            </div>
            <div class="flex justify-between items-center text-[11px]">
              <span class="text-slate-500">Keterangan Evaluasi:</span>
              <span class="${evalFinished.targetMet ? 'text-emerald-700 font-semibold' : 'text-rose-700 font-semibold'}">${evalFinished.keterangan}</span>
            </div>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="space-y-6 max-w-4xl mx-auto animate-fadeIn">
        <!-- Greeting & Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
          <div>
            <h1 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Halo, ${user?.name || 'Karyawan'}! 👋</h1>
            <p class="text-xs sm:text-sm text-slate-500 mt-0.5">${user?.department || 'Operasional'} • ID: ${user?.employee_code || user?.id}</p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            ${UI.badge(`${Icons.calendar('w-3.5 h-3.5 mr-1')} ${todayDateString}`, 'primary', 'md')}
            <button onclick="EmployeeDashboardController.refresh()" class="px-3 py-1.5 text-xs font-medium rounded-lg bg-white border border-brand-border hover:bg-slate-50">
              Segarkan
            </button>
          </div>
        </div>

        <!-- Kartu Status Hari Ini -->
        <div class="bg-gradient-to-br from-white to-blue-50/30 rounded-card border border-blue-100 shadow-card p-5">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-blue-100/80">
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-[11px] font-semibold tracking-wider uppercase text-blue-600 block">Status Kehadiran Hari Ini</span>
                ${UI.badge('Target Durasi: Minimal 8 Jam 30 Menit (510m)', 'primary', 'xs')}
              </div>
              ${statusSectionHtml}
            </div>

            <!-- Tombol Aksi Masuk / Pulang -->
            <div class="w-full md:w-auto flex flex-col sm:flex-row gap-2.5">
              <button
                onclick="VerificationModal.open('CHECK_IN', () => EmployeeDashboardController.refresh())"
                ${todayStatus.status !== 'BELUM_ABSEN' ? 'disabled' : ''}
                class="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-control text-base font-semibold transition-all ${
                  todayStatus.status === 'BELUM_ABSEN'
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-float'
                    : 'bg-white text-slate-400 border border-brand-border opacity-70 cursor-not-allowed'
                }"
              >
                ${todayStatus.status !== 'BELUM_ABSEN' ? Icons.checkCircle('w-5 h-5') : Icons.camera('w-5 h-5')}
                <span>${todayStatus.status === 'BELUM_ABSEN' ? 'Absen Masuk (Live)' : `Masuk: ${todayStatus.checkInTime}`}</span>
              </button>

              <button
                onclick="VerificationModal.open('CHECK_OUT', () => EmployeeDashboardController.refresh())"
                ${todayStatus.status !== 'SUDAH_MASUK' ? 'disabled' : ''}
                class="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-control text-base font-semibold transition-all ${
                  todayStatus.status === 'SUDAH_MASUK'
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-float'
                    : 'bg-white text-slate-400 border border-slate-200 opacity-60 cursor-not-allowed'
                }"
              >
                ${todayStatus.status === 'SELESAI' ? Icons.checkCircle('w-5 h-5') : Icons.clock('w-5 h-5')}
                <span>${todayStatus.status === 'SELESAI' ? `Pulang: ${todayStatus.checkOutTime}` : 'Absen Pulang (Live)'}</span>
              </button>
            </div>
          </div>

          <!-- Ringkasan Parameter 8 Jam 30 Menit -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs">
            <div class="p-3 rounded-xl bg-white border border-slate-200/80">
              <div class="flex items-center gap-2 text-slate-500 mb-1">
                ${Icons.clock('w-4 h-4 text-blue-600')}
                <span class="font-semibold text-slate-700">Aturan Jam Kerja</span>
              </div>
              <p class="font-bold text-slate-900">Minimal 8 Jam 30 Menit</p>
              <p class="text-[11px] text-slate-400 mt-0.5">Absen masuk fleksibel di jam berapapun</p>
            </div>
            <div class="p-3 rounded-xl bg-white border border-slate-200/80">
              <div class="flex items-center gap-2 text-slate-500 mb-1">
                ${Icons.mapPin('w-4 h-4 text-emerald-600')}
                <span class="font-semibold text-slate-700">Perekaman GPS</span>
              </div>
              <p class="font-medium text-emerald-700 flex items-center gap-1">
                ${Icons.checkCircle('w-3.5 h-3.5')}
                <span>Aktif (Mandatori SOT)</span>
              </p>
              <p class="text-[11px] text-slate-400 mt-0.5">Koordinat dicatat ke database</p>
            </div>
            <div class="p-3 rounded-xl bg-white border border-slate-200/80">
              <div class="flex items-center gap-2 text-slate-500 mb-1">
                ${Icons.shield('w-4 h-4 text-blue-600')}
                <span class="font-semibold text-slate-700">Bulan Ini</span>
              </div>
              <p class="font-medium text-blue-700">${monthlySummary.total_sessions} Sesi (${monthlySummary.total_hours} Jam)</p>
              <p class="text-[11px] text-slate-400 mt-0.5">Target tercapai: ${monthlySummary.meets_minimum_count} hari</p>
            </div>
          </div>
        </div>

        <!-- Riwayat Kehadiran Terbaru -->
        <div class="bg-white rounded-card border border-brand-border shadow-subtle overflow-hidden">
          <div class="px-5 py-4 flex items-center justify-between border-b border-brand-border">
            <div>
              <h3 class="text-base font-semibold text-brand-text">Riwayat Kehadiran Terbaru</h3>
              <p class="text-xs text-brand-muted mt-0.5">Transaksi absensi terakhir Anda dari server</p>
            </div>
            <button onclick="Router.navigateTo('history')" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
              <span>Lihat Semua</span>
              ${Icons.chevronRight('w-3.5 h-3.5')}
            </button>
          </div>
          <div class="p-5 divide-y divide-slate-100">
            ${
              historyList.length === 0
                ? `<div class="py-6 text-center text-xs text-slate-400">Belum ada riwayat kehadiran tercatat di sistem.</div>`
                : historyList
                    .slice(0, 3)
                    .map(
                      (item) => `
                  <div class="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div class="flex items-start gap-3">
                      <div class="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ${Icons.checkCircle('w-5 h-5 text-emerald-600')}
                      </div>
                      <div>
                        <div class="flex items-center gap-2">
                          <span class="text-sm font-semibold text-slate-900">${item.date}</span>
                          ${UI.badge(item.statusLabel, item.variant, 'sm')}
                        </div>
                        <div class="flex items-center gap-3 text-xs text-slate-500 mt-1">
                          <span>Masuk: ${item.checkIn || '-'}</span>
                          <span>•</span>
                          <span>Pulang: ${item.checkOut || '-'}</span>
                        </div>
                      </div>
                    </div>
                    <div class="text-left sm:text-right pl-12 sm:pl-0">
                      <span class="text-[11px] font-mono text-slate-400 block">ID Transaksi: ${item.id}</span>
                      <span class="text-[10px] text-emerald-600 block">${item.notes || 'Tercatat di Server Mandala'}</span>
                    </div>
                  </div>
                `
                    )
                    .join('')
            }
          </div>
        </div>
      </div>
    `;
  };

  renderContent();
};

// ============================================================================
// 7. ADMIN DASHBOARD PAGE (Identik dengan AdminDashboardPage.jsx)
// ============================================================================
const AdminDashboardController = {
  exportCSV: async () => {
    UI.showToast('Mengunduh berkas CSV dari server...', 'info', 2000);
    const res = await reportExportService.exportCSV();
    if (res.success) {
      UI.showToast('Laporan CSV berhasil diunduh.', 'success');
    } else {
      UI.showToast(res.error || 'Gagal mengunduh CSV.', 'error');
    }
  },
};

Pages.mountAdminDashboard = async (container) => {
  container.innerHTML = renderDashboardSkeleton();
  let dashboardData = {
    kpi: {
      total_active_employees: 0,
      checked_in_today: 0,
      currently_working: 0,
      completed_today: 0,
    },
    month_to_date: {
      total_completed_sessions: 0,
      total_hours: '0.0',
    },
    recent_activity: [],
  };

  try {
    const res = await attendanceApi.getAdminDashboard();
    if (res && res.data) dashboardData = res.data;
  } catch (err) {
    console.error('Gagal memuat dashboard admin:', err);
  }

  const { kpi, month_to_date, recent_activity } = dashboardData;
  const attendanceRate = kpi.total_active_employees > 0 ? Math.round((kpi.checked_in_today / kpi.total_active_employees) * 100) : 0;

  container.innerHTML = `
    <div class="space-y-6 max-w-6xl mx-auto animate-fadeIn">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Dashboard Operasional Admin</h1>
            ${UI.badge('Live API', 'success', 'sm')}
          </div>
          <p class="text-xs sm:text-sm text-slate-500 mt-0.5">
            Monitoring kehadiran harian CV Mandala Mahardika — Kebijakan Durasi Fleksibel (Min 8 Jam 30 Menit)
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <button onclick="Pages.mountAdminDashboard(document.getElementById('page-content'))" class="px-4 py-2.5 text-sm font-medium rounded-control bg-white border border-brand-border hover:bg-slate-50">
            Segarkan
          </button>
          <button onclick="Router.navigateTo('employees')" class="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-control bg-white border border-brand-border hover:bg-slate-50">
            ${Icons.users('w-4 h-4')}
            <span>Kelola Karyawan</span>
          </button>
          <button onclick="AdminDashboardController.exportCSV()" class="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-control bg-white border border-brand-border hover:bg-slate-50">
            ${Icons.download('w-4 h-4')}
            <span>Ekspor CSV</span>
          </button>
          <button onclick="Router.navigateTo('reports')" class="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-control bg-primary text-white hover:bg-primary-dark">
            ${Icons.filter('w-4 h-4')}
            <span>Laporan</span>
          </button>
        </div>
      </div>

      <!-- KPI Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div class="bg-white rounded-card border border-blue-100 shadow-subtle p-5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Karyawan</span>
            <div class="p-2 rounded-lg bg-blue-50 text-blue-600">${Icons.users('w-4 h-4')}</div>
          </div>
          <div class="mt-2 flex items-baseline gap-2">
            <span class="text-2xl sm:text-3xl font-bold text-slate-900">${kpi.total_active_employees}</span>
            <span class="text-xs text-slate-400">orang aktif</span>
          </div>
        </div>

        <div class="bg-white rounded-card border border-emerald-100 shadow-subtle p-5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Hadir Hari Ini</span>
            <div class="p-2 rounded-lg bg-emerald-50 text-emerald-600">${Icons.checkCircle('w-4 h-4')}</div>
          </div>
          <div class="mt-2 flex items-baseline gap-2">
            <span class="text-2xl sm:text-3xl font-bold text-emerald-600">${kpi.checked_in_today}</span>
            <span class="text-xs text-emerald-600 font-medium">(${attendanceRate}%)</span>
          </div>
        </div>

        <div class="bg-white rounded-card border border-amber-100 shadow-subtle p-5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sedang Bertugas</span>
            <div class="p-2 rounded-lg bg-amber-50 text-amber-600">${Icons.clock('w-4 h-4')}</div>
          </div>
          <div class="mt-2 flex items-baseline gap-2">
            <span class="text-2xl sm:text-3xl font-bold text-amber-600">${kpi.currently_working}</span>
            <span class="text-xs text-slate-400">karyawan aktif</span>
          </div>
        </div>

        <div class="bg-white rounded-card border border-slate-100 shadow-subtle p-5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Bulan Berjalan</span>
            <div class="p-2 rounded-lg bg-slate-50 text-slate-600">${Icons.shield('w-4 h-4')}</div>
          </div>
          <div class="mt-2 flex items-baseline gap-2">
            <span class="text-2xl sm:text-3xl font-bold text-slate-800">${month_to_date.total_completed_sessions}</span>
            <span class="text-xs text-slate-400">sesi (${month_to_date.total_hours} jam)</span>
          </div>
        </div>
      </div>

      <!-- Tabel Aktivitas Terkini -->
      <div class="bg-white rounded-card border border-brand-border shadow-subtle overflow-hidden">
        <div class="px-5 py-4 border-b border-brand-border">
          <h3 class="text-base font-semibold text-brand-text">Pemantauan Aktivitas Masuk/Pulang Terkini</h3>
          <p class="text-xs text-brand-muted mt-0.5">Log kehadiran real-time tersinkronisasi dengan server basis data</p>
        </div>
        <div class="p-5 overflow-x-auto">
          <table class="w-full text-left text-xs sm:text-sm">
            <thead class="bg-slate-50 text-slate-500 uppercase text-[11px] font-semibold border-b border-brand-border">
              <tr>
                <th class="py-3 px-3">Karyawan</th>
                <th class="py-3 px-3">Kode ID</th>
                <th class="py-3 px-3">Jam Masuk</th>
                <th class="py-3 px-3">Jam Pulang</th>
                <th class="py-3 px-3">Durasi</th>
                <th class="py-3 px-3">Status Evaluasi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-700">
              ${
                recent_activity.length === 0
                  ? `<tr><td colspan="6" class="py-6 text-center text-slate-400">Belum ada rekaman aktivitas absensi hari ini.</td></tr>`
                  : recent_activity
                      .map((row) => {
                        let badgeVariant = 'default';
                        let statusText = 'Sedang Bekerja';
                        if (row.duration_status === 'MEETS_MINIMUM') {
                          badgeVariant = 'success';
                          statusText = 'Memenuhi Target (≥ 510m)';
                        } else if (row.duration_status === 'BELOW_MINIMUM') {
                          badgeVariant = 'warning';
                          statusText = 'Kurang Durasi (< 510m)';
                        }
                        const checkInFormatted = row.check_in_at ? row.check_in_at.split(' ')[1] || row.check_in_at : '-';
                        const checkOutFormatted = row.check_out_at ? row.check_out_at.split(' ')[1] || row.check_out_at : 'Aktif';
                        return `
                          <tr class="hover:bg-slate-50/60 transition-colors">
                            <td class="py-3 px-3 font-medium text-slate-900">${row.full_name || 'Karyawan'}</td>
                            <td class="py-3 px-3 font-mono text-slate-500">${row.employee_code || '-'}</td>
                            <td class="py-3 px-3 font-mono text-blue-700">${checkInFormatted}</td>
                            <td class="py-3 px-3 font-mono text-slate-600">${checkOutFormatted}</td>
                            <td class="py-3 px-3">${row.elapsed_minutes ? `${Math.floor(row.elapsed_minutes / 60)}j ${row.elapsed_minutes % 60}m` : '-'}</td>
                            <td class="py-3 px-3">${UI.badge(statusText, badgeVariant, 'sm')}</td>
                          </tr>
                        `;
                      })
                      .join('')
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
};

// ============================================================================
// 8. SUPERADMIN DASHBOARD PAGE (Identik dengan SuperadminDashboardPage.jsx)
// ============================================================================
const SuperadminDashboardController = {
  auditLogs: [],
  schedule: {},
  organization: {},
  logFilter: 'ALL',

  setFilter: (val) => {
    SuperadminDashboardController.logFilter = val;
    SuperadminDashboardController.renderView();
  },

  renderView: () => {
    const container = document.getElementById('page-content');
    if (!container) return;
    const { auditLogs, schedule, organization, logFilter } = SuperadminDashboardController;
    const filteredLogs = auditLogs.filter((l) => logFilter === 'ALL' || (l.action && l.action.includes(logFilter)));

    container.innerHTML = `
      <div class="space-y-6 max-w-6xl mx-auto animate-fadeIn">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Dashboard Manajemen Sistem Superadmin</h1>
              ${UI.badge('Live API', 'success', 'sm')}
            </div>
            <p class="text-xs sm:text-sm text-slate-500 mt-0.5">
              Pengaturan kebijakan global, audit log, dan profil ${organization.companyName}
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <button onclick="Pages.mountSuperadminDashboard(document.getElementById('page-content'))" class="px-4 py-2.5 text-sm font-medium rounded-control bg-white border border-brand-border hover:bg-slate-50">
              Segarkan
            </button>
            <button onclick="Router.navigateTo('employees')" class="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-control bg-white border border-brand-border hover:bg-slate-50">
              ${Icons.users('w-4 h-4')}
              <span>Kelola Karyawan</span>
            </button>
            <button onclick="Router.navigateTo('settings')" class="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-control bg-primary text-white hover:bg-primary-dark">
              ${Icons.settings('w-4 h-4')}
              <span>Konfigurasi Sistem</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-gradient-to-br from-white to-blue-50/20 rounded-card border border-blue-100 p-5 shadow-subtle">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold text-slate-500 uppercase">Profil Perusahaan</span>
              <div class="p-2 rounded-lg bg-blue-50 text-blue-600">${Icons.building('w-4 h-4')}</div>
            </div>
            <h3 class="text-base font-bold text-slate-900">${organization.companyName}</h3>
            <p class="text-xs text-slate-500 mt-1">${organization.address}</p>
            <div class="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span>Status Sistem:</span>
              <span class="font-bold text-emerald-600">Aktif & Beroperasi</span>
            </div>
          </div>

          <div class="bg-gradient-to-br from-white to-emerald-50/20 rounded-card border border-emerald-100 p-5 shadow-subtle">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold text-slate-500 uppercase">Aturan Geolokasi (SOT v0.2)</span>
              <div class="p-2 rounded-lg bg-emerald-50 text-emerald-600">${Icons.mapPin('w-4 h-4')}</div>
            </div>
            <h3 class="text-base font-bold text-emerald-700">Perekaman GPS Aktif</h3>
            <p class="text-xs text-slate-500 mt-1">Tanpa batas radius geofence kantor. Koordinat dicatat sebagai bukti audit.</p>
            <div class="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span>Validasi Geofence:</span>
              ${UI.badge('Tanpa Radius Kantor', 'success', 'sm')}
            </div>
          </div>

          <div class="bg-gradient-to-br from-white to-indigo-50/20 rounded-card border border-indigo-100 p-5 shadow-subtle">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold text-slate-500 uppercase">Kebijakan Jam Kerja</span>
              <div class="p-2 rounded-lg bg-indigo-50 text-indigo-600">${Icons.clock('w-4 h-4')}</div>
            </div>
            <h3 class="text-base font-bold text-indigo-700">Min. ${schedule.minDurationFormatted || '8 Jam 30 Menit'}</h3>
            <p class="text-xs text-slate-500 mt-1">Jam masuk bebas. Minimal absen pulang: Jam Masuk + 8 jam 30 menit.</p>
            <div class="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span>Evaluasi Pulang:</span>
              ${UI.badge('Kurang / Lebih Tercatat', 'primary', 'sm')}
            </div>
          </div>
        </div>

        <div class="bg-white rounded-card border border-brand-border shadow-subtle overflow-hidden">
          <div class="px-5 py-4 flex items-center justify-between border-b border-brand-border">
            <div>
              <h3 class="text-base font-semibold text-brand-text">Audit Log Tindakan Administratif</h3>
              <p class="text-xs text-brand-muted mt-0.5">Pencatatan riwayat aktivitas konfigurasi dan tindakan sensitif secara real-time</p>
            </div>
            <select onchange="SuperadminDashboardController.setFilter(this.value)" class="text-xs px-2.5 py-1.5 rounded-lg border border-brand-border bg-slate-50">
              <option value="ALL" ${logFilter === 'ALL' ? 'selected' : ''}>Semua Aksi</option>
              <option value="EMPLOYEE" ${logFilter === 'EMPLOYEE' ? 'selected' : ''}>Karyawan</option>
              <option value="SCHEDULE" ${logFilter === 'SCHEDULE' ? 'selected' : ''}>Jadwal Kerja</option>
              <option value="ORGANIZATION" ${logFilter === 'ORGANIZATION' ? 'selected' : ''}>Organisasi</option>
            </select>
          </div>
          <div class="p-5 overflow-x-auto">
            <table class="w-full text-left text-xs sm:text-sm">
              <thead class="bg-slate-50 text-slate-500 uppercase text-[11px] font-semibold border-b border-brand-border">
                <tr>
                  <th class="py-3 px-3">Waktu (Server)</th>
                  <th class="py-3 px-3">Aktor</th>
                  <th class="py-3 px-3">Aksi</th>
                  <th class="py-3 px-3">Keterangan Aktivitas</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-700">
                ${
                  filteredLogs.length === 0
                    ? `<tr><td colspan="4" class="py-6 text-center text-slate-400">Belum ada catatan audit log untuk filter ini.</td></tr>`
                    : filteredLogs
                        .map(
                          (log) => `
                      <tr class="hover:bg-slate-50/60 transition-colors">
                        <td class="py-3 px-3 font-mono text-[11px] text-slate-500 whitespace-nowrap">${log.timestamp}</td>
                        <td class="py-3 px-3 font-medium text-slate-900 whitespace-nowrap">${log.actor}</td>
                        <td class="py-3 px-3">${UI.badge(log.action, 'primary', 'sm')}</td>
                        <td class="py-3 px-3 text-slate-600">${log.details}</td>
                      </tr>
                    `
                        )
                        .join('')
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },
};

Pages.mountSuperadminDashboard = async (container) => {
  container.innerHTML = renderDashboardSkeleton();
  const [logs, sch, org] = await Promise.all([
    auditApi.getAuditLogs(),
    configApi.getWorkSchedule(),
    configApi.getOrganization(),
  ]);
  SuperadminDashboardController.auditLogs = logs;
  SuperadminDashboardController.schedule = sch;
  SuperadminDashboardController.organization = org;
  SuperadminDashboardController.renderView();
};