import { ReactNode } from "react";
import { Header } from "src/components/Header";

type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <div className="max-w-screen-md mx-auto p-4 py-8 h-screen">
      <Header />

      {props.children}
    </div>
  );
};
