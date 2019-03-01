import * as React from "react";

interface InjectedPageProps {
  type: string;
}

interface PageProps {
  children(props: InjectedPageProps): JSX.Element;
}

class Page extends React.Component<PageProps, {}> {
  render() {
    const { children } = this.props;
    return children({ type: "default" });
  }
}

export default Page;
