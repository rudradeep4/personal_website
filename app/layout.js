import { Provider } from "@/components/ui/provider";

export const metadata = {
  title: "Rudradeep Guha",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
