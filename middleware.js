import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(function middleware(req) {
    console.log(req.nextauth.token);

    if (req.nextUrl.pathname.startsWith('/dashboard') && req.nextauth.token.role !== 'admin') {
        return NextResponse.rewrite(new URL('/', req.url));
    }
},

{
    callbacks: {
        authorized: ({ token }) => !!token
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET
    }
});

export const config = { matcher: ['/dashboard'] };