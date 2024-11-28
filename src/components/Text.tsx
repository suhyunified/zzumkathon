import { HTMLAttributes } from "react";

const Text = ({
  px,
  weight,
  color = "white",
  align = "left",
  children,
  ...props
}: {
  px: number;
  weight: number;
  color?: string;
  align?: "center" | "left";
  children: React.ReactNode;
} & HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      style={{
        fontSize: `${px}px`,
        fontWeight: weight,
        color: color,
        textAlign: align,
        lineHeight: "150%",
      }}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
