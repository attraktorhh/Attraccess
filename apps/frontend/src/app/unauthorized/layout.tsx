import React from 'react';

interface UnauthorizedLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function UnauthorizedLayout({
  children,
  title,
  subtitle,
}: UnauthorizedLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Left side with background image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=2848&auto=format&fit=crop"
          alt="Office interior"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        <div className="relative z-10 p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-200">{subtitle}</p>
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </div>
    </div>
  );
}
