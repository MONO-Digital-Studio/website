import { useEffect, useRef } from "react";

const DigitalRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    canvasCtxRef.current = ctx;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    
    // Characters to display
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
    
    // Rain drops
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }
    
    // Draw the characters
    const draw = () => {
      // Add semi-transparent black rectangle to create trail effect
      ctx.fillStyle = "rgba(13, 2, 8, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set the font
      ctx.font = `${fontSize}px monospace`;
      
      // For each column
      for (let i = 0; i < drops.length; i++) {
        // Pick a random character
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        // Vary the intensity of green for matrix effect
        const greenIntensity = Math.floor(Math.random() * 156) + 100; // 100-255
        ctx.fillStyle = `rgba(0, ${greenIntensity}, 65, 0.8)`;
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Move the drop down
        drops[i]++;
        
        // Send the drop back to the top randomly after it has crossed the screen
        // Add randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.random() * -20;
        }
      }
      
      // Loop the animation
      animationRef.current = requestAnimationFrame(draw);
    };
    
    // Start the animation
    draw();
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      aria-hidden="true"
    />
  );
};

export default DigitalRain;
