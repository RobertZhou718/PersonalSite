import React, { useState, useEffect } from 'react';
import NavigationComponent from "./navigation";
import { motion } from 'framer-motion';

const WelcomeComponent = () => {
    const [isMoved, setIsMoved] = useState(false);
    const [showIntro, setShowIntro] = useState(false);
    const [typedText, setTypedText] = useState('');
 
    const welcomeText = "Welcome";
    const introduction = "Hello! Here is Robert, please select an option to know more about me";

    useEffect(() => {
        const moveTimer = setTimeout(() => {
            setIsMoved(true);
        }, 3000); // 2秒后开始移动
        const introTimer = setTimeout(() => {
            setShowIntro(true);
        }, 5000); // 在文字落位2秒后开始显示自我介绍

        return () => {
            clearTimeout(moveTimer);
            clearTimeout(introTimer);
        };
    }, []);

    useEffect(() => {
        if (showIntro) {
            let currentText = '';
            let i = 0;
            const typingTimer = setInterval(() => {
                currentText += introduction[i];
                setTypedText(currentText);
                i++;
                if (i >= introduction.length) {
                    clearInterval(typingTimer);
                }
            }, 66); // 每100ms输出一个字符

            return () => clearInterval(typingTimer);
        }
    }, [showIntro, introduction]);

    return (
        <div style={{ height: '100vh', overflow: 'hidden',background: 'linear-gradient(135deg, #000000 0%, #333333 100%)' }}>
            <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: isMoved ? '-42vw' : '0vw', // horitontal
                    y: isMoved ? '-45vh' : '0vh', // vertical
                }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                style={{
                    color: '#fff',
                    fontSize: '3rem',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    position: 'absolute',
                    top: '45%',
                    left: '45%',
                    transform: 'translate(-50%, -50%)',
                    userSelect: 'none'
                }}
            >
                 {showIntro ? typedText : welcomeText}
            </motion.h1>
            {typedText === introduction && (
                <NavigationComponent />
            )}
        </div>
    );
};

export default WelcomeComponent;