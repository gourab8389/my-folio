import React, { useState } from 'react';
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Eye, EyeOff } from "lucide-react";

interface EnhancedPasswordInputProps {
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent) => void;
    label?: string;
    placeholder?: string;
}

const EnhancedPasswordInput = ({ 
  value, 
  onChange, 
  onKeyPress,
  label = "Password",
  placeholder = "Enter password"
}: EnhancedPasswordInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(prevState => !prevState);

  return (
    <div className="space-y-2">
      <Label htmlFor="password">{label}</Label>
      <div className="relative">
        <Input
          id="password"
          className="w-full pe-9"
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <button
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls="password"
        >
          {isVisible ? (
            <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Eye size={16} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
};

export default EnhancedPasswordInput;