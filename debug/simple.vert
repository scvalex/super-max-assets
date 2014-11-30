#version 330

layout(location = 0) in vec4 position;

uniform mat4 perspectiveMatrix;
uniform mat4 cameraMatrix;

out float depth;

void main() {
    gl_Position = perspectiveMatrix * cameraMatrix * position;
    depth = gl_Position.z;
}
