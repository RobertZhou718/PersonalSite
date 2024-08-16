import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const options = ['About Me', 'LinkedIn', 'Tools', 'Projects', 'Contact'];

const randomPosition = () => ({
    x: Math.random() * 200 - 100, // 随机X位置
    y: Math.random() * 200 - 100, // 随机Y位置
});

const NavigationComponent = () => {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const newPositions = options.map(() => randomPosition());
            setPositions(newPositions);
        }, 1000); // 6秒延迟

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ 
            height: '100vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
        }}>
            {positions.length === options.length && options.map((option, index) => (
                <motion.div
                    key={option}
                    initial={{ y: '-100vh', opacity: 0 }}
                    animate={{ 
                        y: positions[index].y, 
                        x: positions[index].x, 
                        opacity: 1 
                    }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    style={{
                        background: '#fff',
                        color: '#333',
                        padding: '10px 20px',
                        margin: '10px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        position: 'absolute',
                        fontWeight: 'bold',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {option}
                </motion.div>
            ))}
        </div>
    );
};

export default NavigationComponent;
