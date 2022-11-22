import React from "react";
import ReactDOM from "react-dom/client";
import { APP } from "./app.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://petsgram-server-mappedev-339gmifsh.vercel.app/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("app"));
const element = <APP />;
root.render(<ApolloProvider client={client}>{element}</ApolloProvider>);
