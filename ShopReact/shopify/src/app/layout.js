import NavBar from "./nav";
import ToastApp from "../components/toast";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Shopify",
  description: "Generated by SHOPIFY",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.jpeg"></link>
      </head>
      <body>
        <NavBar></NavBar>
        <div className="m-5"></div>
        <div className="container d-block shadow shadow-sm p-1">
          <div className="container-fluid container-lg">
            <ToastApp children={children}></ToastApp>
          </div>
        </div>
      </body>
    </html>
  );
}
