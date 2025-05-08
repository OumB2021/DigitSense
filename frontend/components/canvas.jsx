"use client";

import { RefreshCw, Trash2 } from "lucide-react";
import { useRef, useState } from "react";

export default function DigitCanvas() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 30;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FFFFFF";
    setPrediction(null);
    setConfidence(null);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleSubmit = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const image = canvas.toDataURL("image/png");
    setLoading(true);
    try {
      const res = await fetch(
        "https://smiling-impala-highly.ngrok-free.app/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: image }),
        }
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      const predictedDigit = data.prediction;
      const probability = data.probabilities[predictedDigit] * 100;
      setPrediction(predictedDigit);
      setConfidence(probability);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Prediction failed:", err);
    }
  };

  return (
    <div className="space-y-4 rounded-xl p-10 shadow-sm border border-zinc-300">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Draw a digit (0-9)</h3>
        <div className="flex gap-2">
          <button
            onClick={clearCanvas}
            className="flex items-center gap-1 px-3 py-1  text-zinc-800 border-1 border-zinc-300 rounded-md cursor-pointer"
          >
            <Trash2 className="h-4 w-4" />
            Clear
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-1 px-3 py-1  text-zinc-800 border-1 border-zinc-300 rounded-md cursor-pointer"
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Predict
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="relative border-1 border-zinc-300 rounded-lg overflow-hidden ">
          <canvas
            ref={canvasRef}
            width={500}
            height={500}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            className="w-full h-full cursor-crosshair bg-white"
          />
        </div>

        <div className="flex flex-col justify-center space-y-4 p-4 border-1 border-zinc-300 rounded-lg bg-zinc-50">
          <div className="text-center">
            <h4 className="text-sm font-medium text-zinc-500">Prediction</h4>
            {loading ? (
              <div className="mt-2 text-4xl font-bold text-zinc-300">...</div>
            ) : prediction !== null ? (
              <div className="mt-2 text-6xl font-bold">{prediction}</div>
            ) : (
              <div className="mt-2 text-4xl font-bold text-zinc-300">?</div>
            )}
          </div>

          {confidence !== null && !loading && (
            <div className="text-center">
              <h4 className="text-sm font-medium text-zinc-500">Confidence</h4>
              <div className="mt-1 text-xl font-medium">
                {Math.round(confidence)}%
              </div>
              <div className="mt-2 h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-zinc-900 rounded-full"
                  style={{ width: `${confidence}%` }}
                />
              </div>
            </div>
          )}

          {!prediction && !loading && (
            <p className="text-sm text-zinc-500 text-center">
              Draw a digit on the canvas to see the prediction
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
