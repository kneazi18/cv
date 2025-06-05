import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
    words: string[];
    typingSpeed?: number;
    pauseTime?: number;
};

export const AnimatedTypingText = ({ words, typingSpeed = 100, pauseTime = 2000 }: Props) => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout: ReturnType<typeof setTimeout>;

        const type = () => {
            const updatedText = currentWord.substring(0, charIndex + 1);
            setText(updatedText);
            setCharIndex(charIndex + 1);
        };

        const erase = () => {
            const updatedText = currentWord.substring(0, charIndex - 1);
            setText(updatedText);
            setCharIndex(charIndex - 1);
        };

        if (!isDeleting && charIndex === currentWord.length) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        } else {
            timeout = setTimeout(() => {
                isDeleting ? erase() : type();
            }, isDeleting ? typingSpeed / 2 : typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, words, typingSpeed, pauseTime]);

    return (
        <motion.span
            className="text-green-600 font-bold ml-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
        >
            {text}
            <span className="animate-blink">|</span>
        </motion.span>
    );
};