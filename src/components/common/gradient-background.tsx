import { cn } from "@/libs/style";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export const GradientBackground = ({ className }: { className?: string }) => {
  return (
    <ShaderGradientCanvas
      className={cn("", className)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 5,
        background: "black",
      }}
      lazyLoad={false}
      fov={undefined}
      pixelDensity={1}
      pointerEvents="none"
    >
      <ShaderGradient
        animate="on"
        type="waterPlane"
        wireframe={false}
        shader="positionMix"
        uTime={10}
        uSpeed={0.15}
        uStrength={2}
        uDensity={2}
        uFrequency={0}
        uAmplitude={0}
        positionX={0}
        positionY={0}
        positionZ={0}
        rotationX={2}
        rotationY={21}
        rotationZ={0}
        color1="#040927"
        color2="#c22938"
        color3="#e16f23"
        reflection={0.3}
        // View (camera) props
        cAzimuthAngle={180}
        cPolarAngle={90}
        cDistance={3.5}
        cameraZoom={7}
        // Effect props
        lightType="env"
        brightness={1.1}
        envPreset="lobby"
        grain="on"
        // Tool props
        toggleAxis={false}
        zoomOut={false}
        hoverState=""
        // Optional - if using transition features
        enableTransition={false}
      />
    </ShaderGradientCanvas>
  );
};
