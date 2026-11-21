import { NextResponse } from 'next/server';
export async function POST(request) {
 const key=process.env.BUTTONDOWN_API_KEY?.trim();
 if(!key) return NextResponse.json({message:'Newsletter signup is not available yet.'},{status:503});
 let data; try { data=await request.json(); } catch { return NextResponse.json({message:'Please enter a valid email address.'},{status:400}); }
 const email=typeof data?.email==='string'?data.email.trim():'';
 if(email.length>254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({message:'Please enter a valid email address.'},{status:400});
 try { const response=await fetch('https://api.buttondown.com/v1/subscribers',{method:'POST',headers:{Authorization:`Token ${key}`,'Content-Type':'application/json'},body:JSON.stringify({email_address:email}),cache:'no-store',signal:AbortSignal.timeout(10000)});
 if(response.ok) return NextResponse.json({message:'Thanks for subscribing. Please check your inbox for any confirmation email.'});
 return NextResponse.json({message:'We could not complete your signup. Please try again later.'},{status:502});
 } catch { return NextResponse.json({message:'We could not complete your signup. Please try again later.'},{status:502}); }
}
