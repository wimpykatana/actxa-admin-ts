// middleware.ts
// import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl;
  // re-direct /api/hello
  // if (pathname.includes('/api/hello')) {
  //   return NextResponse.rewrite(new URL('/points', request.url));
  // }
}
