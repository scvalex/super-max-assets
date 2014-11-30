#version 330

out vec4 outputColor;
in float depth;

void main() {
    float color = mix(0.1f, 0.9f, 1.0f - depth / 10.0f);
    outputColor = vec4(color, color, color, 1.0f);
}
