// /api/proxy/route.ts

import { NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';


const isDev = process.env.NODE_ENV === 'development';

// GET
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!path) {
    return NextResponse.json({ error: 'Missing path query param' }, { status: 400 });
  }
  if (!API_URL) {
    return NextResponse.json({ error: 'Invalid api-url on environment.' }, { status: 400 });
  }

  const apiUrl = `${API_URL}${path}`;

  try {
    const token = request.headers.get('authorization')?.split('Bearer ')[1] 
      || request.headers.get('cookie')?.split('token=')[1]?.split(';')[0];

    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    const nextRes = NextResponse.json(response.data);

    return nextRes;
  } catch (err: unknown) {
    const error = err as AxiosError;
    return NextResponse.json(
      { error: error.message },
      // { status: 200 }
      { status: isDev ? (error.response ? error.response.status : 500): 200 }
    );
  }
}

// POST
export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!path) {
    return NextResponse.json({ error: 'Missing path query param' }, { status: 400 });
  }
  if (!API_URL) {
    return NextResponse.json({ error: 'Invalid api-url on environment.' }, { status: 400 });
  }

  const apiUrl = `${API_URL}${path}`;

  try {
    const token = request.headers.get('authorization')?.split('Bearer ')[1] 
      || request.headers.get('cookie')?.split('token=')[1]?.split(';')[0];

    const body = await request.json();
    const response = await axios.post(apiUrl, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    const res = NextResponse.json(response.data);

    if (response.data.access_token) {
      res.cookies.set('token', response.data.access_token, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60
      });
    }

    if (response.data.user) {
      res.cookies.set('user', JSON.stringify(response.data.user), {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60
      });
    }

    return res;
  } catch (err: unknown) {
    const error = err as AxiosError;
    return NextResponse.json(
      { error: error.response ? error.response.data : error.message },
      { status: isDev ? (error.response ? error.response.status : 500): 200 }
    );
  }
}



// PUT
export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!path) {
    return NextResponse.json({ error: 'Missing path query param' }, { status: 400 });
  }
  if (!API_URL) {
    return NextResponse.json({ error: 'Invalid api-url on environment.' }, { status: 400 });
  }

  const apiUrl = `${API_URL}${path}`;

  try {
    const token = request.headers.get('authorization')?.split('Bearer ')[1] 
      || request.headers.get('cookie')?.split('token=')[1]?.split(';')[0];

    const body = await request.json();
    const response = await axios.put(apiUrl, body,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    const nextRes = NextResponse.json(response.data);

    return nextRes;
  } catch (err: unknown) {
    const error = err as AxiosError;
    return NextResponse.json(
      { error: error.message },
      { status: isDev ? (error.response ? error.response.status : 500): 200 }
    );
  }
}

// DELETE
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!path) {
    return NextResponse.json({ error: 'Missing path query param' }, { status: 400 });
  }
  if (!API_URL) {
    return NextResponse.json({ error: 'Invalid api-url on environment.' }, { status: 400 });
  }

  const apiUrl = `${API_URL}${path}`;

  try {
    const token = request.headers.get('authorization')?.split('Bearer ')[1] 
      || request.headers.get('cookie')?.split('token=')[1]?.split(';')[0];

    const response = await axios.delete(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return NextResponse.json(response.data);
  } catch (err: unknown) {
    const error = err as AxiosError;
    return NextResponse.json(
      { error: error.message },
      { status: isDev ? (error.response ? error.response.status : 500): 200 }
    );
  }
}
