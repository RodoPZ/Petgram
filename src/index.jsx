import React from "react";
import ReactDOM from "react-dom/client";
import { APP } from "./app.jsx";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { AppProvider } from "./Context.jsx";

const httpLink = new HttpLink({
  uri: "https://petsgram-server-mappedev-339gmifsh.vercel.app/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("token");
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
  onError: onError(({ networkError }) => {
    if (networkError && networkError.result.code === "invalid_token") {
      window.sessionStorage.removeItem("token");
      window.location.href = "/";
    }
  }),
});

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <APP />
    </ApolloProvider>
  </AppProvider>
);
