"use client";
import { useState, ReactNode } from "react";
import Image from "next/image";

interface DropdownListProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
  triggerElement: ReactNode;
}

const DropdownList = ({
  options,
  selectedOption,
  onOptionSelect,
  triggerElement,
}: DropdownListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {triggerElement}
      </div>
      {isOpen && (
        <ul className="dropdown">
          {options.map((option) => (
            <li
              key={option}
              className={`list-item ${option === selectedOption ? "selected" : ""}`}
              onClick={() => handleOptionClick(option)}
            >
              <Image src="/assets/icons/hamburger.svg" alt="menu" width={14} height={14} />
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
