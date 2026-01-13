import { cn } from '@/lib/utils';
import React from 'react';

export const Link = React.forwardRef<
    HTMLAnchorElement,
    React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, href, ...props }, ref) => (
    <a
        ref={ref}
        className={cn('text-pink-600 hover:underline', className)}
        href={href?.startsWith('/') ? `#${href}` : href}
        {...props}
    >
        {children}
    </a>
));

Link.displayName = 'Link';
