import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Erro capturado:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Algo deu errado.</h2>;
    }
    return this.props.children;
  }
}