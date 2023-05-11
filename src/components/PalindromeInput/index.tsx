import React, { useState } from "react";
import { Textarea, Container, Button, Image } from "./style";

type Props = {
  text: string;
  setText: (text: string) => void;
};

const PalindromeInput = ({ text, setText }: Props) => {
  const [showCheck, setShowCheck] = useState<null | boolean>(null);

  const isPalindrome = (text: string) => {
    const re = /[\W_]/g;
    const cleanString = text.toLowerCase().replace(re, "");
    const reverseString = cleanString.split("").reverse().join("");
    setShowCheck(cleanString === reverseString);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setShowCheck(null);
    setText(e.target.value);
  };

  return (
    <Container>
      <p>Test if your phrase or word is a palindrome:</p>
      <Textarea
        data-testid="textarea"
        name="palindrome"
        placeholder="Type here..."
        value={text}
        onChange={handleTextareaChange}
      />
      <Button onClick={() => isPalindrome(text)} disabled={text === ""}>
        SEND
      </Button>

      {showCheck && (
        <>
          <Image src="/icons/check.png" alt="checkIcon" />
          <p>It is a palindrome!</p>
        </>
      )}
      {showCheck === false && (
        <>
          <Image src="/icons/cancel.png" alt="cancelIcon" />
          <p>Not a palindrome!</p>
        </>
      )}
    </Container>
  );
};

export default PalindromeInput;
