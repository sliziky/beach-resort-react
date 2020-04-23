import React from "react";

interface IBannerProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Banner({
  children,
  title,
  subtitle = "",
}: IBannerProps) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
