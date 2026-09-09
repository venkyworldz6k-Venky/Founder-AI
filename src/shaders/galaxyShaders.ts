export const galaxyVertexShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform float uPixelRatio;
uniform float uSize;
uniform float uScroll;

attribute vec3 aRandomness;
attribute float aScale;
attribute vec3 aColor;

varying vec3 vColor;
varying float vDistance;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // Orbital logarithmic spin over time
    float angle = atan(modelPosition.x, modelPosition.z);
    float distanceToCenter = length(modelPosition.xz);
    float angleOffset = (1.0 / (distanceToCenter + 0.2)) * uTime * 0.15;
    angle += angleOffset;

    // Recalculate position on spiral plane
    modelPosition.x = cos(angle) * distanceToCenter;
    modelPosition.z = sin(angle) * distanceToCenter;

    // Add per-particle randomness offset with subtle pulsating
    modelPosition.xyz += aRandomness * (1.0 + sin(uTime * 0.6 + distanceToCenter * 2.0) * 0.12);

    // Interactive mouse distortion & attraction
    vec2 mouseWorld = uMouse * 6.0;
    float distToMouse = length(modelPosition.xy - mouseWorld);
    if (distToMouse < 3.5) {
        float force = (1.0 - distToMouse / 3.5);
        vec2 dir = normalize(modelPosition.xy - mouseWorld + vec2(0.001));
        modelPosition.xy += dir * force * 0.4 * sin(uTime * 2.0 + distanceToCenter);
        modelPosition.z += force * 0.6;
    }

    // Depth wobble & scroll reaction
    modelPosition.z += sin(uTime * 0.7 + distanceToCenter * 2.5) * 0.18;
    modelPosition.y += uScroll * 1.2;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    // Perspective size attenuation
    gl_PointSize = uSize * aScale * (260.0 / -viewPosition.z) * uPixelRatio;

    vColor = aColor;
    vDistance = distanceToCenter;
}
`;

export const galaxyFragmentShader = `
uniform float uTime;
varying vec3 vColor;
varying float vDistance;

void main() {
    // Circular particle shape
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    // Soft radial exponential falloff
    float strength = 1.0 - (dist * 2.0);
    strength = pow(strength, 2.8);

    // Warm core intensity booster
    float coreGlow = smoothstep(0.4, 0.0, dist) * 0.5;
    vec3 finalColor = mix(vColor, vec3(1.0, 0.96, 0.88), coreGlow);

    // Subtle twinkling effect based on time and distance
    float twinkle = 0.85 + 0.15 * sin(uTime * 3.0 + vDistance * 10.0);

    gl_FragColor = vec4(finalColor * twinkle, strength);
}
`;
