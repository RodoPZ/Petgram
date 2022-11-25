import React from "react";
import ReactDOM from "react-dom/client";
import { APP } from "./app.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProvider } from "./Context.jsx";

const client = new ApolloClient({
  uri: "https://petsgram-server-mappedev-339gmifsh.vercel.app/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <APP />
    </ApolloProvider>
  </AppProvider>
);
