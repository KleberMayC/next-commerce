import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
    publicRoutes: ['/', '/product(.*)', '/sign-in', '/sign-up']
})

export const config = {

  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};