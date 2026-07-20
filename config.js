/**
 * IR 扣點管理系統 — 前端設定檔
 * 填好 3 個值（教學見 部署教學.md）。此檔會被 index.html 讀取。
 */
window.APP_CONFIG = {
  // 1) Google OAuth 用戶端 ID（可沿用 red team 那組；同一個 Google 專案）
  GOOGLE_CLIENT_ID: "270881497553-725ai68vnllj8g1n3pbdps15q16btcrn.apps.googleusercontent.com",

  // 2) Apps Script 部署後的網頁應用程式網址（/exec 結尾）— 部署後填入
  API_URL: "https://script.google.com/macros/s/AKfycbxWNiQBHGG75sgAH9DtSPPHp0dPeIZQgyfoAqmOyzs948TaHEG1sjf_N17PuYvYdGn5Hw/exec",

  // 3) 允許登入的 email
  //    真正的把關在後端 Code.gs 的 ALLOWED_EMAILS（Google 憑證驗證，無法偽造）。
  //    這裡留空即可，不必把成員 email 公開在 GitHub。加人只需改 Code.gs + 重新部署。
  ALLOWED_EMAILS: [],
};
