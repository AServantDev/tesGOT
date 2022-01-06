import React from "react";
import ReactDom from "react-dom";
import { ThemeConfig, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { BookProvider } from "./components/context/GOTContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Books } from "./components/Books";
import { Book } from "./components/Book";

const config: ThemeConfig = {
  initialColorMode: "dark",
};
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const theme = extendTheme({
  config,
  fonts: { body: "Inter" },
  breakpoints,
});

const App = () => (
  <ChakraProvider theme={theme}>
    <BookProvider>
      <Layout>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Books />} />
              <Route path="book/:name" element={<Book />} />
            </Routes>
          </Router>
        </div>
      </Layout>
    </BookProvider>
  </ChakraProvider>
);

ReactDom.render(<App />, document.getElementById("app"));
