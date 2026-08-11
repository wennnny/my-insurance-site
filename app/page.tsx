import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* 頁首 Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-900">
            智選保險顧問 <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Tech & Finance</span>
          </h1>
          <a 
            href="#booking" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
          >
            立即預約免費諮詢
          </a>
        </div>
      </header>

      {/* Hero 區塊 */}
      <section className="bg-gradient-to-b from-blue-50 to-slate-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            用理性邏輯，為你打磨保障與資產增值的最佳平衡
          </h2>
          <p className="text-slate-600 text-lg">
            打破傳統推銷迷思。結合工程邏輯與財務需求分析（FNA），幫你精準配置每一份保費。
          </p>
        </div>
      </section>

      {/* 核心區塊 1：保險迷思 QA */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
          上班族常見的投資型保單迷思
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 font-semibold mb-2">Q: 自己買 ETF 便宜又方便，為什麼還需要投資型保單？</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              買 ETF 就像買空屋 DIY 裝潢，成本最低但沒有安全防護；投資型保單就像「附帶全天候保全的精裝房」。它能在你衝刺資產累積時，同步建立低成本的高額保障（安全氣囊），避免極端風險打亂人生計畫。
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 font-semibold mb-2">Q: 投資型保單手續費好像很高，真的划算嗎？</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              關鍵在於「保費結構拆解」。前期費用包含壽險保障與平台管理成本。只要透過客製化模組試算，長線結合規律扣款與低成本保障，整體槓桿效益往往高於單純購買高昂的定期壽險。
            </p>
          </div>
        </div>
      </section>

      {/* 核心區塊 2：線上預約諮詢表單 */}
      <section id="booking" className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">
            預約 1 對 1 財務需求診斷（FNA）
          </h3>
          <p className="text-slate-500 text-center text-sm mb-6">
            填寫以下資訊，我將會主動與您聯繫，提供客觀且不推銷的專業諮詢。
          </p>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">姓名 / 暱稱</label>
              <input 
                type="text" 
                placeholder="例如：Alex" 
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">聯絡方式 (Line ID 或 Email)</label>
              <input 
                type="text" 
                placeholder="請留下方便聯繫的方式" 
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">目前最想釐清的目標</label>
              <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>想了解投資型保單與 ETF 的搭配方式</option>
                <option>評估現有保單是否需要調整</option>
                <option>規劃退休金與家庭保障額度</option>
              </select>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors mt-2"
            >
              送出預約表單
            </button>
          </form>
        </div>
      </section>

      {/* 頁尾 Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <p>? 2026 智選保險諮詢網. All rights reserved.</p>
        <p className="mt-1">本網站內容僅供保險觀念分享與預約諮詢使用，具體商品規劃須經親自評估簽署。</p>
      </footer>
    </div>
  );
}
