import LightRays from './LightRays';

function LightRaysBackground() {
  return (
    <div className="fixed inset-0 z-0 w-screen h-screen">
      <LightRays
        raysSpeed={1.5}
        lightSpread={1.4}
        mouseInfluence={0.9}
        raysColor="#ffffff"
        className="w-full h-full"
      />
    </div>
  );
}

export default LightRaysBackground;
