import { Outlet } from "react-router-dom";
import Header from "../../Components/User/Header";
import Navigation from "../../Components/User/Nav";
import Footer from "../../Components/User/Footer";

export default function UserLayout() {
    return (
        <div className="home blog">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                id="blankslate-style-css"
                href="/assets/style.css"
                type="text/css"
                media="all"
            />

            <Header />
            <Navigation />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
