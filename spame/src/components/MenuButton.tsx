import React from "react";

interface MenuButtonProps {
  icon: React.ElementType; // This type is used for React components
  text: string;
}

export default function MenuButton({
  icon: Icon,
  text,
}: MenuButtonProps): JSX.Element {
  return (
    <main>
      <button className="flex flex-col items-center mt-16 gap-4 hover:bg-[#071952] hover:text-[#A5F1E9] hover:font-medium p-3 rounded ">
        <div className="text-6xl">{Icon && <Icon />}</div>
        <p>{text}</p>
      </button>
    </main>
  );
}
