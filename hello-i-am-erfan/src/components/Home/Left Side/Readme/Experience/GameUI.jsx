import React, { useRef, useEffect, useState } from "react";

// Simple Dino Runner Game (auto-jump, no user control)
// SLOW VERSION
const GAME_HEIGHT = 120;
const GROUND_Y = 120;
const DINO_WIDTH = 44;
const DINO_HEIGHT = 47;
const OBSTACLE_WIDTH = 15;
const OBSTACLE_HEIGHT = 30;
const GRAVITY = 0.1; // Lower gravity for a smoother, higher jump
const JUMP_VELOCITY = -3.95; // Higher jump velocity for a perfect arc
const OBSTACLE_GAP = 200;
const OBSTACLE_SPEED = 1.5; // Keep obstacle speed unchanged
const BASE_GAME_WIDTH = 600; // Used for scaling

// Use the same background color as the page
const PAGE_BG_COLOR = "#0d1117";

function getRandomGap() {
  return OBSTACLE_GAP + Math.random() * 100;
}

const GameUI = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(BASE_GAME_WIDTH);
  const cactusImgRef = useRef(null);
  const dinoImgRef = useRef(null);

  // Load cactus and dino images once
  useEffect(() => {
    const cactusImg = new window.Image();
    cactusImg.src = "/Images/cactus.png";
    cactusImgRef.current = cactusImg;

    const dinoImg = new window.Image();
    dinoImg.src = "/Images/dino.png";
    dinoImgRef.current = dinoImg;
  }, []);

  // Responsive: update canvas width on resize
  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        // Set a minimum width for playability
        const width = Math.max(320, containerRef.current.offsetWidth);
        setCanvasWidth(width);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Calculate scale factor for responsive drawing
    const scale = canvasWidth / BASE_GAME_WIDTH;

    // Dino state
    let dino = {
      x: 50 * scale,
      y: (GROUND_Y - DINO_HEIGHT) * scale,
      vy: 0,
      isJumping: false,
    };

    // Obstacles
    let obstacles = [
      {
        x: BASE_GAME_WIDTH * scale,
        y: (GROUND_Y - OBSTACLE_HEIGHT) * scale,
        width: OBSTACLE_WIDTH * scale,
        height: OBSTACLE_HEIGHT * scale,
      },
    ];

    let animationId;
    let gameOver = false;

    function drawDino() {
      ctx.save();
      const dinoImg = dinoImgRef.current;
      if (dinoImg && dinoImg.complete) {
        ctx.drawImage(
          dinoImg,
          dino.x,
          dino.y,
          DINO_WIDTH * scale,
          DINO_HEIGHT * scale
        );
      } else {
        // fallback: draw a gray rectangle if image not loaded yet
        // First, fill with the page background color to "erase" the dino area
        ctx.fillStyle = PAGE_BG_COLOR;
        ctx.fillRect(dino.x, dino.y, DINO_WIDTH * scale, DINO_HEIGHT * scale);
        // Then, draw the dino as a gray rectangle (simulate the dino)
        ctx.fillStyle = "#444";
        ctx.fillRect(dino.x, dino.y, DINO_WIDTH * scale, DINO_HEIGHT * scale);
        // Simple eye
        ctx.fillStyle = "#fff";
        ctx.fillRect(
          dino.x + 30 * scale,
          dino.y + 10 * scale,
          5 * scale,
          5 * scale
        );
      }
      ctx.restore();
    }

    // Always draw cactus image for obstacle
    function drawObstacle(obstacle) {
      ctx.save();
      const cactusImg = cactusImgRef.current;
      if (cactusImg && cactusImg.complete) {
        ctx.drawImage(
          cactusImg,
          obstacle.x,
          obstacle.y,
          obstacle.width,
          obstacle.height
        );
      } else {
        // fallback: draw a green rectangle if image not loaded yet
        ctx.fillStyle = "#228B22";
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      }
      ctx.restore();
    }

    function drawGround() {
      ctx.save();
      ctx.strokeStyle = "#888";
      ctx.beginPath();
      ctx.moveTo(0, (GROUND_Y + DINO_HEIGHT - 7) * scale);
      ctx.lineTo(canvasWidth, (GROUND_Y + DINO_HEIGHT - 7) * scale);
      ctx.stroke();
      ctx.restore();
    }

    function checkCollision(dino, obstacle) {
      return (
        dino.x < obstacle.x + obstacle.width &&
        dino.x + DINO_WIDTH * scale > obstacle.x &&
        dino.y < obstacle.y + obstacle.height &&
        dino.y + DINO_HEIGHT * scale > obstacle.y
      );
    }

    function updateDino() {
      // If dino is in the air, apply gravity
      if (dino.isJumping) {
        dino.vy += GRAVITY * scale;
        dino.y += dino.vy;
        if (dino.y >= (GROUND_Y - DINO_HEIGHT) * scale) {
          dino.y = (GROUND_Y - DINO_HEIGHT) * scale;
          dino.vy = 0;
          dino.isJumping = false;
        }
      }
    }

    function autoJumpIfNeeded() {
      // Check if an obstacle is close enough to require a jump
      for (let obs of obstacles) {
        if (
          obs.x - (dino.x + DINO_WIDTH * scale) < 40 * scale &&
          obs.x - (dino.x + DINO_WIDTH * scale) > 0 &&
          !dino.isJumping &&
          dino.y >= (GROUND_Y - DINO_HEIGHT) * scale
        ) {
          dino.isJumping = true;
          dino.vy = JUMP_VELOCITY * scale;
        }
      }
    }

    function updateObstacles() {
      for (let obs of obstacles) {
        obs.x -= OBSTACLE_SPEED * scale;
      }
      // Remove off-screen obstacles
      if (obstacles.length && obstacles[0].x + OBSTACLE_WIDTH * scale < 0) {
        obstacles.shift();
      }
      // Add new obstacle if needed
      if (
        obstacles.length === 0 ||
        obstacles[obstacles.length - 1].x < canvasWidth - getRandomGap() * scale
      ) {
        obstacles.push({
          x: canvasWidth,
          y: (GROUND_Y - OBSTACLE_HEIGHT) * scale,
          width: OBSTACLE_WIDTH * scale,
          height: OBSTACLE_HEIGHT * scale,
        });
      }
    }

    function draw() {
      // Fill the background with the page background color
      ctx.fillStyle = PAGE_BG_COLOR;
      ctx.fillRect(0, 0, canvasWidth, GAME_HEIGHT * scale);

      drawGround();
      drawDino();
      for (let obs of obstacles) {
        drawObstacle(obs);
      }
    }

    function gameLoop() {
      if (gameOver) return;
      updateObstacles();
      autoJumpIfNeeded();
      updateDino();
      draw();

      // Check for collision
      for (let obs of obstacles) {
        if (checkCollision(dino, obs)) {
          gameOver = true;
          ctx.save();
          ctx.font = `bold ${24 * scale}px sans-serif`;
          ctx.fillStyle = "#e74c3c";
          ctx.fillText(
            "Game Over",
            canvasWidth / 2 - 60 * scale,
            (GAME_HEIGHT * scale) / 2
          );
          ctx.restore();
          return;
        }
      }

      animationId = requestAnimationFrame(gameLoop);
    }

    // Start game
    draw();
    animationId = requestAnimationFrame(gameLoop);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
    // Re-run effect when canvasWidth changes
  }, [canvasWidth]);

  return (
    <div
      className="flex flex-col items-center py-4 w-full"
      ref={containerRef}
      style={{ width: "100%" }}
    >
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={GAME_HEIGHT * (canvasWidth / BASE_GAME_WIDTH)}
        style={{
          width: "100%",
          height: `${GAME_HEIGHT * (canvasWidth / BASE_GAME_WIDTH)}px`,
          maxWidth: "100%",
          borderBottom: "1px solid #9098a1",
          background: PAGE_BG_COLOR, // changed from "#f7f7f7" to match your page color
          display: "block",
        }}
      />
    </div>
  );
};

export default GameUI;
