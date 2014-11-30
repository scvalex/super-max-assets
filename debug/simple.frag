#version 330

out vec4 outputColor;
in float depth;

uniform float zNear;
uniform float zFar;

void main() {
    // CR scvalex: What is the range of depth here?
    float color = mix(0.1, 0.9, clamp(depth / (zFar - zNear), 0.0, 1.0));
    outputColor = vec4(color, color, color, 1.0);
}
