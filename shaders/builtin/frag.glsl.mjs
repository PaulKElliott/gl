export default "/* start builtins */\nprecision mediump float;\n\n// mesh uniforms\n#ifdef USES_TEXTURE\nuniform sampler2D TEXTURE;\n#endif\n\nuniform vec3 COLOR;\n\n#ifdef USES_ALPHA\nuniform float ALPHA;\n#endif\n\n// lights\nuniform vec3 AMBIENT_LIGHT;\n\nstruct DirectionalLight {\n\tvec3 direction;\n\tvec3 color;\n\tfloat intensity;\n};\n\nuniform DirectionalLight DIRECTIONAL_LIGHTS[NUM_LIGHTS];\n\nstruct PointLight {\n\tvec3 location;\n\tvec3 color;\n\tfloat intensity;\n\t// TODO fall-off etc\n};\n\nuniform PointLight POINT_LIGHTS[NUM_LIGHTS];\n/* end builtins */";