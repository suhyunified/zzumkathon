import React, { HTMLAttributes, forwardRef } from "react";

const Text = forwardRef<
    HTMLParagraphElement, // Type of the ref (target element)
    {
        px: number;
        weight: number;
        color?: string;
        align?: "center" | "left";
        children: React.ReactNode;
    } & HTMLAttributes<HTMLParagraphElement> // Props the component accepts
>(
    (
        { px, weight, color = "white", align = "left", children, ...props },
        ref // The ref parameter
    ) => {
        return (
            <p
                ref={ref} // Attach the ref here
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
    }
);

Text.displayName = "Text"; // Helpful for debugging with React DevTools

export default Text;
