import "./globals.css";

export const metadata = {
  title: "Nohan-V2",
  description: "Portfolio de Nohan, développeur full-stack.",
  icons: {
    icon: "https://avatars.githubusercontent.com/u/181266553",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="font-space bg-[#151515] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
