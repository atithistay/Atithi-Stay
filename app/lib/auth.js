import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export function getUserFromToken(token=null) {
  const cookiesToken = !token || cookies().get('token')?.value;
  if (!cookiesToken) return null;

  try {
    return jwt.verify(cookiesToken || token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}
