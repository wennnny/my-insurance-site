import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '智選保險顧問 | Tech & Finance',
  description: '結合工程邏輯與財務需求分析（FNA），為你打造客觀、透明的保險與資產配置方案。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-900">
              智選保險顧問 <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Tech & Finance</span>
            </h1>
            <a 
              href="#booking" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
            >
              預約 1對1 財務診斷
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-100 border-t border-slate-200 py-6 text-center text-xs text-slate-500">
          <p>© 2026 智選保險諮詢網. All rights reserved.</p>
          <p className="mt-1 max-w-xl mx-auto px-4">
            免責聲明：本網站內容僅供保險觀念分享與預約諮詢使用，不構成任何線上招攬或投保承諾。具體商品規劃須經持照業務員親自進行財務需求分析（FNA）與合規簽署。
          </p>
        </footer>
      </body>
    </html>
  );
}