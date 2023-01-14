import React from "react";
import { createRoot } from "react-dom/client";

import APP from "./app.jsx";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Provider } from "react-redux";
import store from "./store.js";

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

const root = createRoot(document.getElementById("app"));
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <APP />
    </ApolloProvider>
  </Provider>
);
