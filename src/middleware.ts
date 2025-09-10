import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Definição das rotas protegidas
const protectedRoutes = ['/painel'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Aplica o middleware apenas a essas rotas
export const config = {
  matcher: ['/painel/:path*'],
};
