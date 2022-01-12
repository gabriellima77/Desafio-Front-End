import React, { useEffect, useState } from 'react';

interface mousePoints {
  begin: point;
  end: point;
}

interface point {
  x: number;
  y: number;
}

export default function Canvas() {
  const [points, setPoints] = useState<mousePoints>();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const [hasInterval, setHasInterval] = useState(false);
  const [index, setIndex] = useState(0);

  const colors = [
    '#9400D3',
    '#4B0082',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000',
  ];

  const setCanvas = () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const context = canvas.getContext('2d');
      canvas.width = canvas.scrollWidth;
      canvas.height = canvas.scrollHeight;
      const { width, height } = canvas;
      const [initialX, initialY] = [width / 2, height / 2];
      setWidth(width);
      setHeight(height);
      if (context) {
        context.lineWidth = 96;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        setCtx(context);
      }

      setPoints({
        begin: {
          x: initialX,
          y: initialY,
        },
        end: {
          x: initialX,
          y: initialY,
        },
      });
    }
  };

  const clearCanvas = () => {
    if (ctx) {
      ctx.clearRect(0, 0, width, height);
      const { x, y } = points ? points.end : { x: 0, y: 0 };
      ctx.beginPath();
      ctx.arc(x, y, 48, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  const mouseEvent = (e: React.MouseEvent) => {
    if (points && ctx) {
      if (!hasInterval) {
        setHasInterval(true);
        window.setInterval(clearCanvas, 500);
      }
      setIndex((prev) => prev + 1);
      const i = Math.floor(index / 10);
      if (i > colors.length) setIndex(0);
      const x = e?.pageX;
      const y = e?.pageY;
      const start = points.begin;
      ctx.fillStyle = colors[i];
      ctx.strokeStyle = colors[i];
      points.begin.x = points.end.x;
      points.begin.y = points.end.y;
      points.end.x = x;
      points.end.y = y;
      const end = points.end;
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.bezierCurveTo(
        points.begin.x,
        points.begin.y,
        points.end.x,
        points.end.y,
        end.x,
        end.y
      );
      ctx.stroke();
      ctx.fill();
    }
  };

  useEffect(() => {
    setCanvas();
  }, []);

  return (
    <div className="canvas-container">
      <div
        onMouseMove={(e) => mouseEvent(e)}
        className="hexagon"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/hexagon.png')`,
        }}
      />
      <canvas className="canvas"></canvas>
    </div>
  );
}
