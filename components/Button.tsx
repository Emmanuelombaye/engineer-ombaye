import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Component = asChild ? React.Fragment : "button";
    
    return (
      <Component
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          {
            "bg-primary text-white hover:bg-primary/90 shadow-[0_0_15px_rgba(139,92,246,0.3)]": variant === 'primary',
            "bg-surface text-foreground hover:bg-border border border-border": variant === 'secondary',
            "border border-border hover:bg-surface text-foreground": variant === 'outline',
            "hover:bg-surface text-foreground": variant === 'ghost',
            "h-9 px-3 text-sm": size === 'sm',
            "h-11 px-6": size === 'md',
            "h-14 px-8 text-lg": size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
