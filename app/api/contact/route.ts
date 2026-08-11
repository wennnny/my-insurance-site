import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, goal } = body;

    // 發送通知信給你自己
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'your-email@example.com', // 接收通知的 Email
      subject: `【新諮詢預約】來自 ${name} 的保險需求診斷`,
      html: `
        <h2>收到新的 1對1 財務需求診斷預約！</h2>
        <p><strong>姓名/暱稱：</strong> ${name}</p>
        <p><strong>聯絡方式：</strong> ${contact}</p>
        <p><strong>諮詢目標：</strong> ${goal}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: '發送失敗' }, { status: 500 });
  }
}