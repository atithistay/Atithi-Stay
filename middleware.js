import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload;
  } catch (err) {
    // console.error('Token verification failed:', err);
    return null;
  }
}

export async function middleware(req) {
  const token = req.cookies.get('token')?.value;

  const protectedRoutes = ['/auth'];
  const isProtected = protectedRoutes.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (!token && isProtected) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (token) {
    const user = await verifyToken(token);
    if (!user && isProtected) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/:path*'],
};
