import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  
  // Extract the hostname
  let hostname = request.headers.get('host') || ''
  
  // Remove port for local development
  hostname = hostname.split(':')[0]

  // ── WWW → non-WWW 301 redirect (critical for SEO) ──
  // Google must see only ONE version of the domain. Redirect www to non-www.
  if (hostname === 'www.klfpro.in') {
    const newUrl = new URL(request.url)
    newUrl.hostname = 'klfpro.in'
    newUrl.port = ''
    return NextResponse.redirect(newUrl, 301)
  }

  // Define domains associated with healthcare
  const isHealthcare = 
    hostname === 'klfprohealthcare.com' || 
    hostname === 'www.klfprohealthcare.com' || 
    hostname.includes('klfprohealthcare.vercel.app') || // Vercel preview domain
    hostname.includes('klfprohealthcare.local') || // Local testing (e.g. klfprohealthcare.local:3000)
    hostname.startsWith('healthcare.') // alternative local testing (e.g. healthcare.localhost)

  if (isHealthcare) {
    // If the path already starts with /klfpro-healthcare, we don't need to rewrite it, 
    // but ideally, users shouldn't see it in the URL.
    if (!url.pathname.startsWith('/klfpro-healthcare')) {
      // Rewrite the URL to point to the /klfpro-healthcare folder
      // e.g. /about -> /klfpro-healthcare/about
      url.pathname = `/klfpro-healthcare${url.pathname === '/' ? '' : url.pathname}`
      return NextResponse.rewrite(url)
    }
  } else {
    // We are on a non-healthcare domain (e.g. klfpro.in or localhost).
    // If a user tries to access /klfpro-healthcare directly, redirect them to the actual healthcare domain!
    // This prevents duplicate content (SEO) and strict domain boundaries.
    if (url.pathname.startsWith('/klfpro-healthcare')) {
      const newUrl = new URL(request.url)
      // If we're on localhost, we can just redirect to healthcare.local, but for production:
      const targetHost = hostname === 'localhost' ? 'healthcare.localhost:3000' : 'www.klfprohealthcare.com'
      
      newUrl.hostname = targetHost.split(':')[0]
      if (targetHost.includes(':')) {
        newUrl.port = targetHost.split(':')[1]
      } else {
        newUrl.port = '' // Standard port 80/443 for production
      }
      
      newUrl.pathname = url.pathname.replace('/klfpro-healthcare', '') || '/'
      return NextResponse.redirect(newUrl, 301)
    }
  }
  
  // For klfpro.in, www.klfpro.in, or localhost, serve normally (root routes)
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - Metadata files (favicon, sitemap, robots)
     * - All static asset files (images, icons, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
