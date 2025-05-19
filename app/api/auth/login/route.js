import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { get } from 'mongoose';
import { getUserFromToken } from '@/lib/auth';

const SECRET = process.env.JWT_SECRET;

const mockUser = {
  id: 1,
  email: 'test@example.com',
  passwordHash: bcrypt.hashSync('password123', 10),
};

export async function POST(request) {
  const { email, password } = await request.json();

  if (email !== mockUser.email || !bcrypt.compareSync(password, mockUser.passwordHash)) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = jwt.sign({ id: mockUser.id, email: mockUser.email }, SECRET, { expiresIn: '1h' });
  const user = getUserFromToken({token});
  const response = NextResponse.json({ success: true, user});
  response.cookies.set({
    name: 'token',
    value: token,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}
