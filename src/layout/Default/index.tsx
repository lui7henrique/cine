import { ReactNode } from "react";
import { Header } from "src/components/Header";

type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 h-screen">
      {/* <Header /> */}

      {props.children}
    </div>
  );
};
