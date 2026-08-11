"use client";

import React from 'react';
import BookingForm from '@/components/BookingForm';

export default function Home() {
  return (
    <div>
      {/* Hero 區塊 */}
      <section className="bg-gradient-to-b from-blue-50 to-slate-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            用工程師的理性邏輯<br />為你打磨保障與資產增值的最佳平衡
          </h2>
          <p className="text-slate-600 text-lg">
            打破傳統保險推銷。透過數據與財務需求分析（FNA），幫你精準配置每一分保費。
          </p>
        </div>
      </section>

      {/* 核心區塊：保險迷思 QA */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
          上班族常見的投資型保單迷思
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 font-semibold mb-2">Q: 自己買 ETF (如 0050) 便宜又方便，為什麼還需要投資型保單？</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              買 ETF 就像買空屋 DIY 裝潢，成本低但沒有安全防護；投資型保單就像「附帶全天候保全的精裝房」。它能在你衝刺資產累積時，同步建立低成本的高額保障（安全氣囊），避免極端風險打亂人生計畫。
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 font-semibold mb-2">Q: 投資型保單手續費好像很高，真的划算嗎？</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              關鍵在於「保費結構拆解」。前期費用包含壽險保障與平台管理成本。只要透過客製化模組試算，長線結合規律扣款與低成本保障，整體槓桿效益往往高於單純購買高昂的傳統壽險。
            </p>
          </div>
        </div>
      </section>

      {/* 預約表單元件 */}
      <BookingForm />


      {/* 頁尾 Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <p>© 2026 智選保險諮詢網. All rights reserved.</p>
        <p className="mt-1">本網站內容僅供保險觀念分享與預約諮詢使用，具體商品規劃須經親自評估簽署。</p>
      </footer>
    </div>
  );
}