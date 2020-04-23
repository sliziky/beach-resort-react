import React from "react";

interface IHeroProps {
  children: React.ReactNode;
  hero?: string;
}

export default function Hero({ children, hero = "defaultHero" }: IHeroProps) {
  return <header className={hero}>{children}</header>;
}

