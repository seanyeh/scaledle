import m from "mithril";
import MainPage from "./components/MainPage";

// Set up routing by connecting components to routes
m.route(document.body, "/", {
  "/": MainPage,
});

