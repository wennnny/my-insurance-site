"use client";

import React, { useState } from 'react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  // 1. 宣告欄位 State
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [goal, setGoal] = useState('想了解投資型保單與 ETF (如 0050/00878) 的搭配方式');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 2. 呼叫 API 路由傳送資料
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, contact, goal }),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert('發送失敗，請稍後再試！');
    }
  };

  return (
    <div id="booking" className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">
          預約 1 對 1 財務需求診斷（FNA）
        </h3>
        <p className="text-slate-500 text-center text-sm mb-6">
          填寫以下資訊，我將會主動與您聯繫，提供客觀且不推銷的專業諮詢。
        </p>

        {submitted ? (
          <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center font-medium">
            ✅ 感謝您的預約！我會在 24 小時之內與您聯繫。
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">姓名 / 暱稱</label>
              <input 
                required
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="例如：David" 
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">聯絡方式 (Line ID 或 Email)</label>
              <input 
                required
                type="text" 
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="請留下方便聯繫的方式" 
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">目前最想釐清的目標</label>
              <select 
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="想了解投資型保單與 ETF (如 0050/00878) 的搭配方式">想了解投資型保單與 ETF (如 0050/00878) 的搭配方式</option>
                <option value="評估現有保單是否需要調整">評估現有保單是否需要調整</option>
                <option value="規劃退休金與家庭高額保障">規劃退休金與家庭高額保障</option>
                <option value="規劃退休金與家庭高額保障">其他</option>
              </select>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors mt-2"
            >
              送出預約表單
            </button>
          </form>
        )}
      </div>
    </div>
  );
}