import './globals.css';

export const metadata = {
  title: 'Find-Well', // Page title
  description: 'A Next.js project with multiple pages', // Meta description
  icons: {
    icon: '/logo.png', // Favicon path
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        {/* Main content */}
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
