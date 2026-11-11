/**
 * core.js — Fondasi Utama Sistem Absensi CV Mandala Mahardika (Vanilla JS)
 * Mencakup: Icons, timeUtils, apiClient, Services, Camera/GPS Manager, Auth, Router, & Layout
 */

// ============================================================================
// 1. KUMPULAN IKON SVG (Identik dengan Icons.jsx)
// ============================================================================
const Icons = {
  user: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
  users: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`,
  shield: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  calendar: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
  clock: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  mapPin: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  camera: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  checkCircle: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  alertCircle: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  alertTriangle: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`,
  logIn: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>`,
  logOut: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>`,
  download: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>`,
  fileText: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
  filter: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>`,
  search: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
  settings: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  building: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
  eye: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
  eyeOff: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>`,
  home: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
  history: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  chart: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
  info: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  chevronRight: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>`,
  x: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`,
  arrowLeft: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>`,
  refreshCw: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`,
  printer: (cls = 'w-5 h-5') => `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>`,
};

// ============================================================================
// 2. UTILITAS JAM KERJA & EVALUASI DURASI (timeUtils.js)
// ============================================================================
const MIN_WORK_HOURS = 8;
const MIN_WORK_MINUTES_PART = 30;
const MIN_WORK_MINUTES_TOTAL = 510; // 8 * 60 + 30

const timeUtils = {
  MIN_WORK_MINUTES_TOTAL,

  parseTimeToMinutes: (timeStr) => {
    if (!timeStr || typeof timeStr !== 'string' || timeStr === '-') return 0;
    const clean = timeStr.replace(/WIB/i, '').trim();
    const parts = clean.split(':').map((p) => parseInt(p, 10));
    const hours = isNaN(parts[0]) ? 0 : parts[0];
    const minutes = isNaN(parts[1]) ? 0 : parts[1];
    return hours * 60 + minutes;
  },

  formatMinutesToWIB: (totalMinutes) => {
    const normalized = ((totalMinutes % (24 * 60)) + (24 * 60)) % (24 * 60);
    const hours = Math.floor(normalized / 60);
    const minutes = normalized % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} WIB`;
  },

  calculateMinCheckOutTime: (checkInTimeStr, minMinutes = MIN_WORK_MINUTES_TOTAL) => {
    if (!checkInTimeStr || checkInTimeStr === '-') return '-';
    const inMinutes = timeUtils.parseTimeToMinutes(checkInTimeStr);
    const minOutMinutes = inMinutes + minMinutes;
    return timeUtils.formatMinutesToWIB(minOutMinutes);
  },

  formatDurationHuman: (totalMinutes) => {
    const abs = Math.abs(totalMinutes);
    const hours = Math.floor(abs / 60);
    const minutes = abs % 60;
    if (hours > 0 && minutes > 0) return `${hours} jam ${minutes} menit`;
    if (hours > 0) return `${hours} jam`;
    return `${minutes} menit`;
  },

  evaluateWorkDuration: (checkInStr, checkOutStr, minMinutes = MIN_WORK_MINUTES_TOTAL) => {
    if (!checkInStr || !checkOutStr || checkInStr === '-' || checkOutStr === '-') {
      return {
        durationMinutes: 0,
        durationFormatted: '-',
        targetMet: false,
        diffMinutes: 0,
        status: 'BELUM_SELESAI',
        statusLabel: 'Belum Selesai',
        badgeVariant: 'default',
        keterangan: 'Menunggu proses absen pulang.',
      };
    }

    const inMinutes = timeUtils.parseTimeToMinutes(checkInStr);
    let outMinutes = timeUtils.parseTimeToMinutes(checkOutStr);
    if (outMinutes < inMinutes) {
      outMinutes += 24 * 60;
    }

    const durationMinutes = outMinutes - inMinutes;
    const durationFormatted = timeUtils.formatDurationHuman(durationMinutes);
    const diffMinutes = durationMinutes - minMinutes;
    const diffFormatted = timeUtils.formatDurationHuman(diffMinutes);

    if (diffMinutes < 0) {
      return {
        durationMinutes,
        durationFormatted,
        targetMet: false,
        diffMinutes,
        status: 'KURANG',
        statusLabel: `Kurang (${diffFormatted})`,
        badgeVariant: 'danger',
        keterangan: `Kurang dari batas minimal 8 jam 30 menit (-${diffFormatted})`,
        shortLabel: `Kurang (-${diffFormatted})`,
      };
    } else if (diffMinutes === 0) {
      return {
        durationMinutes,
        durationFormatted,
        targetMet: true,
        diffMinutes: 0,
        status: 'TEPAT',
        statusLabel: 'Tepat 8j 30m',
        badgeVariant: 'success',
        keterangan: 'Memenuhi batas minimal (Tepat 8 jam 30 menit)',
        shortLabel: 'Tepat (8j 30m)',
      };
    } else {
      return {
        durationMinutes,
        durationFormatted,
        targetMet: true,
        diffMinutes,
        status: 'LEBIH',
        statusLabel: `Lebih (+${diffFormatted})`,
        badgeVariant: 'success',
        keterangan: `Lebih dari batas minimal 8 jam 30 menit (+${diffFormatted})`,
        shortLabel: `Lebih (+${diffFormatted})`,
      };
    }
  },

  getCurrentWIBString: () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds} WIB`;
  },
};

// ============================================================================
// 3. CENTRALIZED HTTP CLIENT & SERVICES (apiClient.js + API Services)
// ============================================================================
const API_BASE_URL = 'https://absensi-karyawan-backend-production.up.railway.app/api/v1';
const SESSION_STORAGE_KEY = 'mandala_auth_session';

const apiClient = {
  getBaseUrl: () => API_BASE_URL,

  getAuthToken: () => {
    try {
      const session = localStorage.getItem(SESSION_STORAGE_KEY);
      if (session) {
        const parsed = JSON.parse(session);
        return parsed.token || null;
      }
    } catch (e) {
      // ignore
    }
    return null;
  },

  get: async (endpoint, customHeaders = {}) => {
    const token = apiClient.getAuthToken();
    const headers = {
      'Accept': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...customHeaders,
    };
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, { method: 'GET', headers });
      return await response.json();
    } catch (err) {
      return { data: null, meta: {}, error: { code: 'NETWORK_ERROR', message: err.message || 'Koneksi ke backend server gagal.' } };
    }
  },

  post: async (endpoint, body, customHeaders = {}) => {
    const token = apiClient.getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...customHeaders,
    };
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });
      return await response.json();
    } catch (err) {
      return { data: null, meta: {}, error: { code: 'NETWORK_ERROR', message: err.message || 'Gagal mengirim data ke server.' } };
    }
  },

  postMultipart: async (endpoint, formData, customHeaders = {}) => {
    const token = apiClient.getAuthToken();
    const headers = {
      'Accept': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...customHeaders,
    };
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers,
        body: formData,
      });
      return await response.json();
    } catch (err) {
      return { data: null, meta: {}, error: { code: 'MULTIPART_ERROR', message: err.message || 'Gagal mengunggah rekaman presensi ke server.' } };
    }
  },

  patch: async (endpoint, body = {}, customHeaders = {}) => {
    const token = apiClient.getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...customHeaders,
    };
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(body),
      });
      return await response.json();
    } catch (err) {
      return { data: null, meta: {}, error: { code: 'NETWORK_ERROR', message: err.message || 'Gagal memperbarui data di server.' } };
    }
  },

  delete: async (endpoint, customHeaders = {}) => {
    const token = apiClient.getAuthToken();
    const headers = {
      'Accept': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...customHeaders,
    };
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, { method: 'DELETE', headers });
      return await response.json();
    } catch (err) {
      return { data: null, meta: {}, error: { code: 'NETWORK_ERROR', message: err.message || 'Gagal menghapus data di server.' } };
    }
  },

  downloadBlob: async (endpoint, defaultFilename = 'laporan_absensi') => {
    const token = apiClient.getAuthToken();
    const headers = { ...(token ? { 'Authorization': `Bearer ${token}` } : {}) };
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, { method: 'GET', headers });
      if (!response.ok) {
        let errorMsg = 'Gagal mengunduh berkas laporan.';
        try {
          const errJson = await response.json();
          if (errJson?.error?.message) errorMsg = errJson.error.message;
        } catch (e) {}
        return { success: false, error: errorMsg };
      }
      const blob = await response.blob();
      const disposition = response.headers.get('Content-Disposition');
      let filename = defaultFilename;
      if (disposition && disposition.includes('filename=')) {
        const match = disposition.match(/filename="?([^"]+)"?/);
        if (match && match[1]) filename = match[1];
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      return { success: true, filename, count: 'Semua' };
    } catch (err) {
      return { success: false, error: err.message || 'Gagal mengunduh file dari server.' };
    }
  },
};

// --- Attendance API Service ---
const attendanceApi = {
  getTodayStatus: async (employeeId) => {
    try {
      const res = await apiClient.get('/attendance/today');
      if (res.error) return { data: null, meta: res.meta || {}, error: res.error };

      const rawData = res.data || {};
      const activeSession = rawData.active_session;
      const todayHistory = rawData.today_history || [];

      let status = 'BELUM_ABSEN';
      let checkInTime = null;
      let checkOutTime = null;
      let minCheckOutTime = null;
      let durationStatus = null;
      let lastTransaction = null;

      if (activeSession && !activeSession.check_out_at) {
        status = 'SUDAH_MASUK';
        const timePart = activeSession.check_in_at?.includes(' ')
          ? activeSession.check_in_at.split(' ')[1]
          : activeSession.check_in_at;
        checkInTime = timePart ? `${timePart} WIB` : null;
        minCheckOutTime = timeUtils.calculateMinCheckOutTime(checkInTime, MIN_WORK_MINUTES_TOTAL);
        lastTransaction = activeSession;
      } else if (todayHistory.length > 0) {
        status = 'SELESAI';
        const latest = todayHistory[0];
        checkInTime = latest.check_in_at?.split(' ')[1] ? `${latest.check_in_at.split(' ')[1]} WIB` : null;
        checkOutTime = latest.check_out_at?.split(' ')[1] ? `${latest.check_out_at.split(' ')[1]} WIB` : null;
        durationStatus = latest.duration_status;
        lastTransaction = latest;
      }

      return {
        data: {
          employeeId,
          date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
          status,
          checkInTime,
          checkOutTime,
          minCheckOutTime,
          durationStatus,
          activeSession,
          todayHistory,
          lastTransaction,
        },
        meta: res.meta || {},
        error: null,
      };
    } catch (err) {
      return { data: null, meta: {}, error: { code: 'CLIENT_ERROR', message: err.message } };
    }
  },

  submitCheckIn: async (payload) => {
    const { photoBlob, latitude, longitude, accuracy_m, notes } = payload;
    if (!photoBlob) {
      return { data: null, error: { code: 'CAMERA_REQUIRED', message: 'Foto swafoto kamera live wajib disertakan saat absen masuk.' } };
    }
    if (latitude === undefined || longitude === undefined || latitude === null) {
      return { data: null, error: { code: 'LOCATION_REQUIRED', message: 'Koordinat lokasi GPS wajib disertakan saat absen masuk.' } };
    }
    const formData = new FormData();
    formData.append('photo', photoBlob, 'selfie_checkin.jpg');
    formData.append('latitude', String(latitude));
    formData.append('longitude', String(longitude));
    formData.append('accuracy_m', String(accuracy_m || 10));
    if (notes) formData.append('notes', notes);

    const res = await apiClient.postMultipart('/attendance/check-in', formData);
    if (res.data && res.data.session) {
      const session = res.data.session;
      const timePart = session.check_in_at?.includes(' ') ? session.check_in_at.split(' ')[1] : session.check_in_at;
      const formattedTime = timePart ? `${timePart} WIB` : '-';
      const minCheckOutTime = timeUtils.calculateMinCheckOutTime(formattedTime, MIN_WORK_MINUTES_TOTAL);
      return {
        data: {
          ...session,
          id: `ATT-${session.id}`,
          checkIn: formattedTime,
          minCheckOutTime,
          statusLabel: `Tercatat (Min. Pulang: ${minCheckOutTime})`,
        },
        meta: { message: res.data.message || 'Absen masuk berhasil dicatat.' },
        error: null,
      };
    }
    return res;
  },

  submitCheckOut: async (payload) => {
    const { photoBlob, latitude, longitude, accuracy_m, notes } = payload;
    if (latitude === undefined || longitude === undefined || latitude === null) {
      return { data: null, error: { code: 'LOCATION_REQUIRED', message: 'Koordinat lokasi GPS wajib disertakan saat absen pulang.' } };
    }
    let res;
    if (photoBlob) {
      const formData = new FormData();
      formData.append('photo', photoBlob, 'selfie_checkout.jpg');
      formData.append('latitude', String(latitude));
      formData.append('longitude', String(longitude));
      formData.append('accuracy_m', String(accuracy_m || 10));
      if (notes) formData.append('notes', notes);
      res = await apiClient.postMultipart('/attendance/check-out', formData);
    } else {
      res = await apiClient.post('/attendance/check-out', {
        latitude: String(latitude),
        longitude: String(longitude),
        accuracy_m: String(accuracy_m || 10),
        notes: notes || 'Selesai bertugas',
      });
    }
    if (res.data && res.data.session) {
      const session = res.data.session;
      const evalObj = res.data.evaluation || {};
      return {
        data: {
          ...session,
          id: `ATT-${session.id}`,
          workDuration: evalObj.duration_human || `${session.elapsed_minutes || 0} menit`,
          durationStatus: session.duration_status,
          evaluation: evalObj,
        },
        meta: { message: res.data.message },
        error: null,
      };
    }
    return res;
  },

  getAttendanceHistory: async (filters = {}) => {
    const queryParams = new URLSearchParams();
    if (filters.page) queryParams.append('page', filters.page);
    if (filters.limit) queryParams.append('limit', filters.limit);
    if (filters.startDate) queryParams.append('start_date', filters.startDate);
    if (filters.endDate) queryParams.append('end_date', filters.endDate);
    if (filters.durationStatus && filters.durationStatus !== 'ALL') {
      queryParams.append('duration_status', filters.durationStatus);
    }
    if (filters.userId) queryParams.append('user_id', filters.userId);

    const res = await apiClient.get(`/attendance?${queryParams.toString()}`);
    if (res.error) return { data: [], meta: res.meta || {}, error: res.error };

    const items = (res.data || []).map((row) => {
      const checkInParts = (row.check_in_at || '').split(' ');
      const checkOutParts = (row.check_out_at || '').split(' ');
      const checkInTime = checkInParts[1] ? `${checkInParts[1]} WIB` : '-';
      const checkOutTime = checkOutParts[1] ? `${checkOutParts[1]} WIB` : '-';
      const minCheckOut = timeUtils.calculateMinCheckOutTime(checkInTime, MIN_WORK_MINUTES_TOTAL);

      let durationLabel = 'Sedang Berjalan';
      let statusLabel = 'Sedang Bekerja';
      if (row.duration_status === 'MEETS_MINIMUM') {
        durationLabel = 'Target Terpenuhi (≥ 8j 30m)';
        statusLabel = 'Memenuhi Target';
      } else if (row.duration_status === 'BELOW_MINIMUM') {
        durationLabel = 'Kurang Durasi (< 8j 30m)';
        statusLabel = 'Kurang Jam Kerja';
      }

      return {
        id: `ATT-${row.id}`,
        rawId: row.id,
        user_id: row.user_id,
        employeeId: row.employee_code || `EMP-${row.user_id}`,
        employeeName: row.full_name || 'Karyawan',
        email: row.email,
        date: checkInParts[0] || row.date || '-',
        checkIn: checkInTime,
        checkOut: checkOutTime,
        minCheckOut,
        workDuration: row.elapsed_minutes ? `${Math.floor(row.elapsed_minutes / 60)} jam ${row.elapsed_minutes % 60} menit` : '-',
        durationStatus: row.duration_status,
        durationLabel,
        status: row.duration_status,
        statusLabel,
        notes: row.notes,
        coordinates: {
          latitude: row.check_in_latitude,
          longitude: row.check_in_longitude,
          accuracy_m: row.check_in_accuracy_m,
        },
        photoUrl: row.check_in_selfie_path || null,
        photoCaptured: Boolean(row.check_in_selfie_path),
      };
    });

    return { data: items, meta: res.meta || {}, error: null };
  },

  getEmployeeDashboard: async () => apiClient.get('/dashboard/employee'),
  getAdminDashboard: async () => apiClient.get('/dashboard/admin'),
};

// --- Employee API Service ---
const mapRoleToBackend = (uiRole) => {
  if (!uiRole) return 'EMPLOYEE';
  const r = uiRole.toUpperCase();
  if (r === 'ADMIN') return 'ADMIN';
  if (r === 'SUPERADMIN') return 'SUPERADMIN';
  return 'EMPLOYEE';
};

const mapRoleToUI = (backendRole) => {
  if (!backendRole) return 'Karyawan';
  const r = backendRole.toUpperCase();
  if (r === 'SUPERADMIN') return 'Superadmin';
  if (r === 'ADMIN') return 'Admin';
  return 'Karyawan';
};

const employeeApi = {
  getEmployees: async (params = {}) => {
    const query = new URLSearchParams();
    if (params.page) query.append('page', params.page);
    query.append('limit', params.limit || '50');
    if (params.search) query.append('search', params.search);
    if (params.role && params.role !== 'ALL') query.append('role', mapRoleToBackend(params.role));
    if (params.isActive !== undefined && params.isActive !== 'ALL') {
      query.append('is_active', params.isActive ? '1' : '0');
    }

    const res = await apiClient.get(`/admin/employees?${query.toString()}`);
    if (res.error) return { data: [], meta: res.meta || {}, error: res.error };

    const formattedList = (res.data || []).map((emp) => ({
      id: String(emp.id),
      code: emp.employee_code || `EMP-${emp.id}`,
      name: emp.full_name,
      email: emp.email,
      department: emp.department || 'Operasional',
      role: mapRoleToUI(emp.role),
      rawRole: emp.role,
      status: emp.is_active ? 'Aktif' : 'Nonaktif',
      isActive: Boolean(emp.is_active),
      joinDate: emp.created_at
        ? new Date(emp.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
        : '-',
    }));

    return { data: formattedList, meta: res.meta || { total: formattedList.length }, error: null };
  },

  addEmployee: async (employeeData) => {
    const payload = {
      employee_code: employeeData.code || employeeData.employee_code || `EMP-${Date.now().toString().slice(-4)}`,
      full_name: employeeData.name || employeeData.full_name,
      email: employeeData.email,
      password: employeeData.password || 'password123',
      role: mapRoleToBackend(employeeData.role),
    };
    const res = await apiClient.post('/admin/employees', payload);
    if (res.error) return { success: false, error: res.error.message || 'Gagal menambahkan karyawan.' };
    return { success: true, data: res.data?.employee, message: res.data?.message };
  },

  updateEmployee: async (id, updatedFields) => {
    const payload = {};
    if (updatedFields.name || updatedFields.full_name) payload.full_name = updatedFields.name || updatedFields.full_name;
    if (updatedFields.email) payload.email = updatedFields.email;
    if (updatedFields.role) payload.role = mapRoleToBackend(updatedFields.role);
    if (updatedFields.status !== undefined) {
      payload.is_active = updatedFields.status === 'Aktif' || updatedFields.status === 1 ? 1 : 0;
    }
    const res = await apiClient.patch(`/admin/employees/${id}`, payload);
    if (res.error) return { success: false, error: res.error.message || 'Gagal memperbarui data karyawan.' };
    return { success: true, data: res.data?.employee, message: res.data?.message };
  },

  toggleEmployeeStatus: async (id, newStatus) => {
    const isActivating = newStatus === 'Aktif';
    if (!isActivating) {
      const res = await apiClient.delete(`/admin/employees/${id}`);
      if (res.error) return { success: false, error: res.error.message || 'Gagal menonaktifkan akun karyawan.' };
      return { success: true, message: res.data?.message };
    } else {
      const res = await apiClient.patch(`/admin/employees/${id}`, { is_active: 1 });
      if (res.error) return { success: false, error: res.error.message || 'Gagal mengaktifkan akun karyawan.' };
      return { success: true, message: res.data?.message };
    }
  },
};

// --- Config, Audit, & Report Export Services ---
const configApi = {
  getWorkSchedule: async () => {
    try {
      const res = await apiClient.get('/admin/settings/work-schedule');
      if (res.error) throw new Error();
      const d = res.data || {};
      const totalMinutes = d.minimum_work_duration_minutes || 510;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return {
        ...d,
        type: 'Kebijakan Durasi Fleksibel',
        minDurationMinutesTotal: totalMinutes,
        minWorkHours: hours,
        minWorkMinutes: minutes,
        minDurationFormatted: `${hours} Jam ${minutes} Menit`,
        checkInRule: 'Absen Masuk Bebas (Jam Berapapun)',
        checkOutRule: `Absen Pulang Minimal ${hours} Jam ${minutes} Menit dari Jam Masuk`,
        workDays: 'Senin – Jumat',
        timezone: d.timezone ? `${d.timezone} (WIB)` : 'WIB (UTC+7)',
      };
    } catch (e) {
      return {
        type: 'Kebijakan Durasi Fleksibel',
        minDurationFormatted: '8 Jam 30 Menit',
        minDurationMinutesTotal: 510,
        minWorkHours: 8,
        minWorkMinutes: 30,
        workDays: 'Senin – Jumat',
        checkInRule: 'Absen Masuk Bebas (Jam Berapapun)',
        checkOutRule: 'Absen Pulang Minimal 8 Jam 30 Menit dari Jam Masuk',
        timezone: 'WIB (UTC+7)',
      };
    }
  },

  updateWorkSchedule: async (newSchedule) => {
    const totalMinutes = newSchedule.minDurationMinutesTotal || (Number(newSchedule.minWorkHours) || 8) * 60 + (Number(newSchedule.minWorkMinutes) || 30);
    const res = await apiClient.patch('/admin/settings/work-schedule', {
      minimum_work_duration_minutes: totalMinutes,
      allow_checkout_below_minimum: true,
      cross_midnight_session_enabled: true,
      gps_recording_enabled: true,
      gps_geofence_enabled: false,
      selfie_camera_only: true,
    });
    if (res.error) return { success: false, error: res.error.message || 'Gagal memperbarui konfigurasi kerja.' };
    return { success: true, data: res.data?.settings };
  },

  getOrganization: async () => {
    try {
      const res = await apiClient.get('/admin/settings/organization');
      if (res.error) throw new Error();
      const d = res.data || {};
      return {
        companyName: d.company_name || 'CV Mandala Mahardika',
        address: d.address || 'Jl. Pemuda No. 108, Kota Semarang, Jawa Tengah',
        timezone: d.timezone || 'Asia/Jakarta',
        reportExportFormat: d.report_export_format || 'CSV',
        activeEmployees: d.active_employees || 48,
        totalEmployees: d.total_employees || 48,
      };
    } catch (e) {
      return {
        companyName: 'CV Mandala Mahardika',
        address: 'Jl. Pemuda No. 108, Kota Semarang, Jawa Tengah',
        timezone: 'Asia/Jakarta',
        reportExportFormat: 'CSV',
        activeEmployees: 48,
        totalEmployees: 48,
      };
    }
  },

  updateOrganization: async (newOrg) => {
    const res = await apiClient.patch('/admin/settings/organization', {
      company_name: newOrg.companyName,
      timezone: newOrg.timezone || 'Asia/Jakarta',
      report_export_format: 'CSV',
    });
    if (res.error) return { success: false, error: res.error.message || 'Gagal memperbarui profil organisasi.' };
    return { success: true, data: res.data };
  },
};

const auditApi = {
  getAuditLogs: async (params = {}) => {
    const query = new URLSearchParams();
    query.append('limit', params.limit || '50');
    const res = await apiClient.get(`/admin/audit-logs?${query.toString()}`);
    if (res.error || !res.data) return [];
    return res.data.map((log) => {
      const actorName = log.full_name ? `${log.full_name} (${log.employee_code || log.role})` : log.actor || 'Admin Sistem';
      let detailsText = '-';
      if (log.new_values && typeof log.new_values === 'object') {
        detailsText = JSON.stringify(log.new_values).replace(/["{}]/g, ' ');
      } else if (log.entity_type) {
        detailsText = `Entitas: ${log.entity_type}`;
      }
      return {
        id: `AUD-${log.id}`,
        timestamp: log.created_at || new Date().toISOString(),
        actor: actorName,
        action: log.action || 'SYSTEM_ACTION',
        details: detailsText,
      };
    });
  },
};

const reportExportService = {
  exportCSV: async (filters = {}) => {
    const query = new URLSearchParams();
    query.append('format', 'csv');
    if (filters.startDate) query.append('start_date', filters.startDate);
    if (filters.endDate) query.append('end_date', filters.endDate);
    const filename = `Laporan_Absensi_Mandala_${filters.startDate || 'all'}_${Date.now()}.csv`;
    return apiClient.downloadBlob(`/admin/reports/attendance/export?${query.toString()}`, filename);
  },
};

// ============================================================================
// 4. CAMERA & GEOLOCATION MANAGER (useCamera.js & useGeolocation.js)
// ============================================================================
const CameraManager = {
  stream: null,
  facingMode: 'user',

  start: async (videoElement) => {
    CameraManager.stop();
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: CameraManager.facingMode }, width: { ideal: 640 }, height: { ideal: 480 } },
          audio: false,
        });
        CameraManager.stream = mediaStream;
        if (videoElement) {
          videoElement.srcObject = mediaStream;
          videoElement.play().catch(() => {});
        }
        return { active: true, hardware: true };
      } catch (err) {
        console.warn('Kamera fisik tidak tersedia/ditolak, menggunakan Canvas Fallback:', err);
      }
    }
    return { active: true, hardware: false };
  },

  stop: () => {
    if (CameraManager.stream) {
      CameraManager.stream.getTracks().forEach((track) => track.stop());
      CameraManager.stream = null;
    }
  },

  capture: (videoElement) => {
    const canvas = document.createElement('canvas');
    const width = videoElement && videoElement.videoWidth > 0 ? videoElement.videoWidth : 640;
    const height = videoElement && videoElement.videoHeight > 0 ? videoElement.videoHeight : 480;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (videoElement && videoElement.videoWidth > 0) {
      ctx.drawImage(videoElement, 0, 0, width, height);
    } else {
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#1E293B');
      grad.addColorStop(1, '#0F172A');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#334155';
      ctx.beginPath();
      ctx.arc(width / 2, height * 0.42, 85, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(width / 2, height + 40, 160, Math.PI, 0);
      ctx.fill();

      ctx.fillStyle = 'rgba(37, 99, 235, 0.9)';
      ctx.fillRect(16, 16, 260, 28);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('SWAFOTO ABSENSI MANDALA', 26, 35);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.font = '11px monospace';
      ctx.fillText(`CV Mandala Mahardika • ${new Date().toLocaleString('id-ID')}`, 16, height - 20);
    }

    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob ? { blob, dataUrl } : null), 'image/jpeg', 0.85);
    });
  },
};

const GeoManager = {
  coords: null,
  fallbackCoords: () => ({
    latitude: -6.982614,
    longitude: 110.409152,
    accuracy_m: 10,
    timestamp: new Date().toISOString(),
  }),

  getLocation: () => {
    return new Promise((resolve) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const realCoords = {
              latitude: Number(pos.coords.latitude.toFixed(6)),
              longitude: Number(pos.coords.longitude.toFixed(6)),
              accuracy_m: Math.round(pos.coords.accuracy) || 10,
              timestamp: new Date().toISOString(),
            };
            GeoManager.coords = realCoords;
            resolve(realCoords);
          },
          () => {
            const fb = GeoManager.fallbackCoords();
            GeoManager.coords = fb;
            resolve(fb);
          },
          { enableHighAccuracy: true, timeout: 8000, maximumAge: 10000 }
        );
      } else {
        const fb = GeoManager.fallbackCoords();
        GeoManager.coords = fb;
        resolve(fb);
      }
    });
  },
};

// ============================================================================
// 5. STATE GLOBAL, AUTENTIKASI, & NAVIGASI RBAC
// ============================================================================
const PAGE_PERMISSIONS = {
  'employee-dashboard': ['employee', 'admin', 'superadmin'],
  'admin-dashboard': ['admin', 'superadmin'],
  'superadmin-dashboard': ['superadmin'],
  'employees': ['admin', 'superadmin'],
  'history': ['employee', 'admin', 'superadmin'],
  'reports': ['admin', 'superadmin'],
  'settings': ['employee', 'admin', 'superadmin'],
};

const formatUserObject = (rawUser) => {
  if (!rawUser) return null;
  const roleStr = (rawUser.role || 'EMPLOYEE').toUpperCase();
  const roleLower = roleStr.toLowerCase();
  return {
    id: rawUser.id,
    employee_code: rawUser.employee_code || `EMP-${rawUser.id}`,
    name: rawUser.full_name || rawUser.name || 'Pengguna',
    full_name: rawUser.full_name || rawUser.name || 'Pengguna',
    email: rawUser.email,
    role: roleLower,
    rawRole: roleStr,
    roleLabel: roleStr === 'SUPERADMIN' ? 'Superadmin' : roleStr === 'ADMIN' ? 'Admin' : 'Karyawan',
    department: rawUser.department || 'Operasional',
    avatar: (rawUser.full_name || rawUser.name || 'US').substring(0, 2).toUpperCase(),
  };
};

const AppState = {
  currentUser: null,
  isAuthenticated: false,
  currentPage: 'login',
  isOnline: navigator.onLine,
  mockBannerDismissed: false,
  liveClockInterval: null,

  initSession: () => {
    try {
      const saved = localStorage.getItem(SESSION_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.user && parsed.token) {
          AppState.currentUser = formatUserObject(parsed.user);
          AppState.isAuthenticated = true;
        }
      }
    } catch (e) {}
  },

  getRole: () => (AppState.currentUser ? AppState.currentUser.role : 'guest'),

  getDefaultPageForRole: (role) => {
    if (role === 'superadmin') return 'superadmin-dashboard';
    if (role === 'admin') return 'admin-dashboard';
    return 'employee-dashboard';
  },

  login: async (email, password) => {
    const res = await apiClient.post('/auth/login', {
      email: email.trim().toLowerCase(),
      password,
    });
    if (res.error) throw new Error(res.error.message || 'Login gagal. Periksa email dan kata sandi Anda.');
    if (!res.data || !res.data.token) throw new Error('Respons server tidak valid (Token tidak ditemukan).');

    const formattedUser = formatUserObject(res.data.user);
    localStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify({
        token: res.data.token,
        user: formattedUser,
        role: formattedUser.role,
        timestamp: new Date().toISOString(),
      })
    );
    AppState.currentUser = formattedUser;
    AppState.isAuthenticated = true;
    return formattedUser;
  },

  register: async ({ name, email, department, role, password }) => {
    const res = await apiClient.post('/admin/employees', {
      employee_code: `EMP-${Date.now().toString().slice(-4)}`,
      full_name: name,
      email,
      password,
      role: (role || 'EMPLOYEE').toUpperCase(),
    });
    if (res.error) throw new Error(res.error.message || 'Pendaftaran akun gagal. Silakan hubungi Administrator HR.');
    return res.data?.employee || { name, role: role || 'employee' };
  },

  logout: async () => {
    try {
      await apiClient.post('/auth/logout', {});
    } catch (e) {}
    localStorage.removeItem(SESSION_STORAGE_KEY);
    AppState.isAuthenticated = false;
    AppState.currentUser = null;
    Router.navigateTo('login');
  },
};

// ============================================================================
// 6. UI HELPERS (Badge, Toast, Modal, Layout Shell)
// ============================================================================
const UI = {
  badge: (text, variant = 'default', size = 'md', extraClass = '') => {
    const variants = {
      default: 'bg-slate-100 text-slate-700 border-slate-200',
      primary: 'bg-blue-50 text-blue-700 border-blue-200',
      success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      warning: 'bg-amber-50 text-amber-700 border-amber-200',
      danger: 'bg-rose-50 text-rose-700 border-rose-200',
      mock: 'bg-indigo-50 text-indigo-700 border-indigo-200 font-semibold tracking-wide',
    };
    const sizes = {
      xs: 'text-[10px] px-2 py-0.5 rounded-md',
      sm: 'text-xs px-2 py-0.5 rounded-md',
      md: 'text-xs px-2.5 py-1 rounded-lg',
      lg: 'text-sm px-3 py-1.5 rounded-lg',
    };
    return `<span class="inline-flex items-center font-medium border ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${extraClass}">${text}</span>`;
  },

  showToast: (message, type = 'success', duration = 3500) => {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const bgMap = { success: 'bg-emerald-600', error: 'bg-rose-600', info: 'bg-blue-600' };
    const iconMap = {
      success: Icons.checkCircle('w-5 h-5 flex-shrink-0'),
      error: Icons.alertCircle('w-5 h-5 flex-shrink-0'),
      info: Icons.info('w-5 h-5 flex-shrink-0'),
    };
    container.innerHTML = `
      <div class="fixed bottom-20 md:bottom-6 right-4 z-50 animate-slideUp">
        <div class="${bgMap[type] || bgMap.success} text-white px-4 py-3 rounded-xl shadow-float flex items-center gap-3 text-xs sm:text-sm font-medium border border-white/10 max-w-sm">
          ${iconMap[type] || iconMap.success}
          <span class="flex-1">${message}</span>
          <button onclick="document.getElementById('toast-container').innerHTML=''" class="text-white/80 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors">
            ${Icons.x('w-4 h-4')}
          </button>
        </div>
      </div>
    `;
    if (duration > 0) {
      setTimeout(() => {
        if (container) container.innerHTML = '';
      }, duration);
    }
  },

  openLogoutModal: () => {
    const user = AppState.currentUser;
    if (!user) return;
    const modalRoot = document.getElementById('modal-root');
    modalRoot.innerHTML = `
      <div role="dialog" aria-modal="true" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
        <div class="bg-white rounded-card max-w-sm w-full p-6 shadow-float border border-brand-border">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0">
              ${Icons.alertTriangle('w-5 h-5')}
            </div>
            <div>
              <h3 class="text-base font-bold text-slate-900">Konfirmasi Keluar</h3>
              <p class="text-xs text-slate-500">Sesi login Anda akan diakhiri</p>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
            Apakah Anda yakin ingin keluar dari akun <strong>${user.name}</strong> (${user.roleLabel})?
          </p>
          <div class="flex justify-end gap-2.5">
            <button onclick="UI.closeModal()" class="px-4 py-2.5 text-sm font-medium rounded-control bg-white text-brand-text border border-brand-border hover:bg-slate-50">
              Batal
            </button>
            <button onclick="UI.closeModal(); AppState.logout();" class="px-4 py-2.5 text-sm font-medium rounded-control bg-rose-600 text-white hover:bg-rose-700">
              Keluar Sekarang
            </button>
          </div>
        </div>
      </div>
    `;
  },

  closeModal: () => {
    CameraManager.stop();
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) modalRoot.innerHTML = '';
  },

  renderOfflineBanner: () => {
    if (AppState.isOnline) return '';
    return `
      <div class="bg-amber-600 text-white px-4 py-2.5 text-xs sm:text-sm font-medium flex items-center justify-between shadow-xs z-50 sticky top-0 animate-fadeIn w-full">
        <div class="flex items-center gap-2 w-full">
          ${Icons.alertTriangle('w-4 h-4 flex-shrink-0 text-amber-200')}
          <span><strong>Perangkat Sedang Offline.</strong> Anda dapat melihat data riwayat tersimpan, namun verifikasi kamera dan rekaman GPS memerlukan internet.</span>
        </div>
      </div>
    `;
  },

  renderMockNoticeBanner: () => {
    if (AppState.mockBannerDismissed) return '';
    return `
      <div class="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-4 py-2.5 text-xs sm:text-sm border-b border-blue-800 w-full no-print">
        <div class="w-full flex items-center justify-between gap-3">
          <div class="flex items-center gap-2 flex-1">
            <span class="bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded text-[11px] tracking-wide uppercase flex-shrink-0">
              SOT v0.2 Live
            </span>
            <p class="text-blue-100 leading-snug">
              <strong class="text-white">Sistem Presensi CV Mandala Mahardika:</strong> Terhubung dengan API Produksi, Verifikasi Kamera Live, & Perekaman Koordinat GPS Mandatori.
            </p>
          </div>
          <button onclick="AppState.mockBannerDismissed = true; Router.render();" class="text-blue-200 hover:text-white p-1 rounded hover:bg-blue-800/50 transition-colors">
            ${Icons.x('w-4 h-4')}
          </button>
        </div>
      </div>
    `;
  },

  renderHeader: () => {
    const user = AppState.currentUser;
    const role = AppState.getRole();
    const badgeVariant = role === 'superadmin' ? 'danger' : role === 'admin' ? 'warning' : 'primary';

    return `
      <header class="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-brand-border w-full">
        <div class="w-full px-4 sm:px-6">
          <div class="flex items-center justify-between h-16 gap-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                ${Icons.building('w-5 h-5')}
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-slate-900 tracking-tight text-base sm:text-lg">Mandala Mahardika</span>
                  <span class="hidden md:inline-block">${UI.badge(user.roleLabel, badgeVariant, 'sm')}</span>
                </div>
                <p class="text-[11px] text-slate-500 font-medium leading-none hidden sm:block">Sistem Absensi Karyawan</p>
              </div>
            </div>

            <div class="flex items-center gap-2 sm:gap-4">
              <div class="flex items-center gap-2.5 pl-2">
                <div class="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs flex-shrink-0">
                  ${user.avatar}
                </div>
                <div class="hidden lg:block text-left">
                  <p class="text-xs font-semibold text-slate-900 leading-tight">${user.name}</p>
                  <p class="text-[11px] text-slate-500 leading-none truncate max-w-[140px]">${user.department}</p>
                </div>
                <button onclick="UI.openLogoutModal()" class="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors" title="Keluar / Akhiri Sesi">
                  ${Icons.logOut('w-5 h-5')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
  },

  getMenuItems: () => {
    const role = AppState.getRole();
    const dashboardPage = AppState.getDefaultPageForRole(role);

    if (role === 'employee') {
      return [
        { id: dashboardPage, label: 'Beranda Karyawan', shortLabel: 'Beranda', icon: Icons.home, desc: 'Absensi Masuk / Pulang' },
        { id: 'history', label: 'Riwayat Absensi', shortLabel: 'Riwayat', icon: Icons.history, desc: 'Catatan Kehadiran Saya' },
        { id: 'settings', label: 'Profil & Jadwal', shortLabel: 'Profil', icon: Icons.settings, desc: 'Informasi Karyawan' },
      ];
    }
    if (role === 'admin') {
      return [
        { id: dashboardPage, label: 'Dashboard Admin', shortLabel: 'Dashboard', icon: Icons.chart, desc: 'Ringkasan & KPI Kehadiran' },
        { id: 'employees', label: 'Kelola Karyawan', shortLabel: 'Karyawan', icon: Icons.users, desc: 'Data Karyawan & Status' },
        { id: 'history', label: 'Monitoring Absensi', shortLabel: 'Riwayat', icon: Icons.history, desc: 'Riwayat & Log Karyawan' },
        { id: 'reports', label: 'Laporan & Rekap', shortLabel: 'Laporan', icon: Icons.fileText, desc: 'Filter & Ekspor CSV/PDF' },
        { id: 'settings', label: 'Pengaturan & Jadwal', shortLabel: 'Pengaturan', icon: Icons.settings, desc: 'Jadwal Kerja Tetap & Info' },
      ];
    }
    return [
      { id: dashboardPage, label: 'Dashboard Sistem', shortLabel: 'Sistem', icon: Icons.shield, desc: 'Audit & Operasional Global' },
      { id: 'employees', label: 'Kelola Karyawan', shortLabel: 'Karyawan', icon: Icons.users, desc: 'Manajemen Akun Seluruh Staf' },
      { id: 'history', label: 'Riwayat Seluruh Absensi', shortLabel: 'Riwayat', icon: Icons.history, desc: 'Validasi & Detail Lokasi' },
      { id: 'reports', label: 'Laporan Eksekutif', shortLabel: 'Laporan', icon: Icons.fileText, desc: 'Ekspor Data CSV/PDF' },
      { id: 'settings', label: 'Konfigurasi Sistem', shortLabel: 'Konfigurasi', icon: Icons.settings, desc: 'Jadwal Tetap & Organisasi' },
    ];
  },

  renderDesktopSidebar: () => {
    const user = AppState.currentUser;
    const items = UI.getMenuItems();
    return `
      <aside class="hidden md:flex flex-col w-64 lg:w-72 bg-white border-r border-brand-border flex-shrink-0">
        <div class="p-5 border-b border-brand-border">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
              ${user.avatar}
            </div>
            <div class="min-w-0 flex-1">
              <h4 class="text-sm font-bold text-slate-900 truncate">${user.name}</h4>
              <p class="text-xs text-slate-500 truncate">${user.roleLabel}</p>
            </div>
          </div>
        </div>

        <div class="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          <div class="px-3 pb-2 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">Menu Navigasi</div>
          ${items
            .map((item) => {
              const isActive = AppState.currentPage === item.id;
              return `
                <button onclick="Router.navigateTo('${item.id}')" class="w-full flex items-start gap-3 px-3.5 py-3 rounded-control text-left transition-all ${
                  isActive ? 'bg-blue-50/80 text-primary font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }">
                  <div class="mt-0.5 p-1 rounded-lg ${isActive ? 'bg-primary text-white shadow-xs' : 'text-slate-400'}">
                    ${item.icon('w-4 h-4')}
                  </div>
                  <div class="min-w-0 flex-1">
                    <span class="text-sm leading-tight block">${item.label}</span>
                    <span class="text-xs text-slate-400 font-normal leading-tight block mt-0.5">${item.desc}</span>
                  </div>
                </button>
              `;
            })
            .join('')}
        </div>

        <div class="p-4 border-t border-brand-border bg-slate-50/60 m-3 rounded-card space-y-2 text-xs">
          <div class="flex items-center gap-2 text-slate-700 font-semibold">
            ${Icons.building('w-4 h-4 text-primary')}
            <span>CV Mandala Mahardika</span>
          </div>
          <div class="flex items-center gap-2 text-slate-500">
            ${Icons.clock('w-3.5 h-3.5 text-slate-400')}
            <span>Batas Kerja: Min. 8j 30m</span>
          </div>
          <div class="flex items-center gap-2 text-slate-500">
            ${Icons.mapPin('w-3.5 h-3.5 text-slate-400')}
            <span>GPS Dicatat (Tanpa Geofence)</span>
          </div>
          <div class="pt-2 border-t border-slate-200">
            ${UI.badge('Fondasi Front-end v0.2', 'mock', 'sm', 'w-full justify-center')}
          </div>
        </div>
      </aside>
    `;
  },

  renderMobileBottomNav: () => {
    const items = UI.getMenuItems();
    return `
      <nav class="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-brand-border shadow-float">
        <div class="grid max-w-lg mx-auto" style="grid-template-columns: repeat(${items.length}, minmax(0, 1fr));">
          ${items
            .map((item) => {
              const isActive = AppState.currentPage === item.id;
              return `
                <button onclick="Router.navigateTo('${item.id}')" class="flex flex-col items-center justify-center py-2 min-h-[56px] transition-colors ${
                  isActive ? 'text-primary font-semibold' : 'text-slate-500 hover:text-slate-800'
                }">
                  <div class="p-1 rounded-lg transition-transform ${isActive ? 'scale-110 bg-blue-50 text-primary' : ''}">
                    ${item.icon('w-5 h-5')}
                  </div>
                  <span class="text-[11px] mt-0.5">${item.shortLabel}</span>
                </button>
              `;
            })
            .join('')}
        </div>
      </nav>
    `;
  },

  renderForbidden403: (pageId, allowedRoles) => {
    const user = AppState.currentUser;
    const role = AppState.getRole();
    const defaultPage = AppState.getDefaultPageForRole(role);
    return `
      <div class="max-w-2xl mx-auto py-8 animate-fadeIn">
        <div class="bg-white rounded-card border border-rose-200 shadow-float overflow-hidden">
          <div class="bg-gradient-to-r from-rose-500 to-rose-600 p-6 text-white text-center">
            <div class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
              ${Icons.alertTriangle('w-9 h-9 text-white')}
            </div>
            <h2 class="text-xl font-bold tracking-tight">403 — Akses Ditolak (Peran Tidak Diizinkan)</h2>
            <p class="text-rose-100 text-xs sm:text-sm mt-1">Hak akses halaman ini dibatasi sesuai kontrol akses berbasis peran (RBAC)</p>
          </div>
          <div class="p-6 space-y-4 text-center">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs sm:text-sm text-slate-700 space-y-2">
              <div class="flex justify-between items-center pb-2 border-b border-slate-200">
                <span class="text-slate-500">Halaman yang Diminta:</span>
                <span class="font-mono font-semibold text-slate-900">${pageId}</span>
              </div>
              <div class="flex justify-between items-center pb-2 border-b border-slate-200">
                <span class="text-slate-500">Peran Akun Aktif:</span>
                ${UI.badge(`${user.roleLabel} (${role})`, 'primary', 'sm')}
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-500">Peran yang Diizinkan:</span>
                <span class="font-semibold text-rose-600">${allowedRoles.join(', ')}</span>
              </div>
            </div>
            <div class="pt-2 flex justify-center">
              <button onclick="Router.navigateTo('${defaultPage}')" class="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-control hover:bg-primary-dark">
                ${Icons.arrowLeft('w-4 h-4')}
                <span>Kembali ke Dashboard ${user.roleLabel}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};

// ============================================================================
// 7. ROUTER & PEMUATAN HALAMAN (NavigationContext + App.jsx)
// ============================================================================
const Pages = {}; // Akan diisi oleh pages-auth-dashboard.js & pages-management.js

const Router = {
  validPages: [
    'landing',
    'login',
    'register',
    'employee-dashboard',
    'admin-dashboard',
    'superadmin-dashboard',
    'employees',
    'history',
    'reports',
    'settings',
  ],

  navigateTo: (page) => {
    if (AppState.liveClockInterval) {
      clearInterval(AppState.liveClockInterval);
      AppState.liveClockInterval = null;
    }
    AppState.currentPage = page;
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    Router.render();
  },

  render: () => {
    const root = document.getElementById('app-root');
    if (!root) return;

    // Jika belum login, izinkan halaman login, register, atau landing
    if (!AppState.isAuthenticated) {
      if (AppState.currentPage === 'register' && Pages.renderRegisterPage) {
        root.innerHTML = Pages.renderRegisterPage();
        return;
      }
      if (AppState.currentPage === 'landing' && Pages.renderLandingPage) {
        root.innerHTML = Pages.renderLandingPage();
        return;
      }
      AppState.currentPage = 'login';
      if (Pages.renderLoginPage) {
        root.innerHTML = Pages.renderLoginPage();
      }
      return;
    }

    // Jika sudah login tapi berada di rute auth/landing, arahkan ke dashboard sesuai role
    if (['login', 'register', 'landing'].includes(AppState.currentPage)) {
      AppState.currentPage = AppState.getDefaultPageForRole(AppState.getRole());
    }

    const pageId = AppState.currentPage;
    const allowedRoles = PAGE_PERMISSIONS[pageId] || ['employee', 'admin', 'superadmin'];
    const hasAccess = allowedRoles.includes(AppState.getRole());

    root.innerHTML = `
      <div class="min-h-screen bg-brand-bg flex flex-col text-brand-text">
        ${UI.renderOfflineBanner()}
        ${UI.renderMockNoticeBanner()}
        ${UI.renderHeader()}
        <div class="flex-1 flex w-full">
          ${UI.renderDesktopSidebar()}
          <main id="page-content" class="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 pb-24 md:pb-8"></main>
        </div>
        ${UI.renderMobileBottomNav()}
      </div>
    `;

    const pageContainer = document.getElementById('page-content');
    if (!hasAccess) {
      pageContainer.innerHTML = UI.renderForbidden403(pageId, allowedRoles);
      return;
    }

    // Panggil fungsi render halaman terkait
    switch (pageId) {
      case 'employee-dashboard':
        Pages.mountEmployeeDashboard && Pages.mountEmployeeDashboard(pageContainer);
        break;
      case 'admin-dashboard':
        Pages.mountAdminDashboard && Pages.mountAdminDashboard(pageContainer);
        break;
      case 'superadmin-dashboard':
        Pages.mountSuperadminDashboard && Pages.mountSuperadminDashboard(pageContainer);
        break;
      case 'employees':
        Pages.mountEmployeesPage && Pages.mountEmployeesPage(pageContainer);
        break;
      case 'history':
        Pages.mountHistoryPage && Pages.mountHistoryPage(pageContainer);
        break;
      case 'reports':
        Pages.mountReportsPage && Pages.mountReportsPage(pageContainer);
        break;
      case 'settings':
        Pages.mountSettingsPage && Pages.mountSettingsPage(pageContainer);
        break;
      default:
        Pages.mountEmployeeDashboard && Pages.mountEmployeeDashboard(pageContainer);
    }
  },
};

// Listener Hash & Koneksi Jaringan
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  if (hash && Router.validPages.includes(hash) && hash !== AppState.currentPage) {
    AppState.currentPage = hash;
    Router.render();
  }
});

window.addEventListener('online', () => { AppState.isOnline = true; Router.render(); });
window.addEventListener('offline', () => { AppState.isOnline = false; Router.render(); });
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') UI.closeModal();
});
