initSidebarItems({"fn":[["all","Result is true if all components of `vector` is true, otherwise result is false."],["all_memory_barrier","Blocks execution of all threads in a group until all memory accesses have been completed."],["all_memory_barrier_with_group_sync","Blocks execution of all threads in a group until all memory accesses have been completed and all threads in the group have reached this call."],["any","Result is true if any component of `vector` is true, otherwise result is false."],["control_barrier","Wait for other invocations of this module to reach the current point of execution."],["ddx","Returns the partial derivative of `component` with respect to the window’s X coordinate. Returns the same result as either [`ddx_fine`] or [`ddx_coarse`], selection of which one is dependent on external factors."],["ddx_coarse","Returns the partial derivative of `component` with respect to the window’s X coordinate. Uses local differencing based on the value of `component` for the current fragment’s neighbors, and possibly, but not necessarily, includes the value of `component` for the current fragment. That is, over a given area, the implementation can compute X derivatives in fewer unique locations than would be allowed by [`ddx_fine`]."],["ddx_coarse_vector","Returns the partial derivative of `component` with respect to the window’s X coordinate. Uses local differencing based on the value of `component` for the current fragment’s neighbors, and possibly, but not necessarily, includes the value of `component` for the current fragment. That is, over a given area, the implementation can compute X derivatives in fewer unique locations than would be allowed by [`ddx_fine`]."],["ddx_fine","Returns the partial derivative of `component` with respect to the window’s X coordinate. Uses local differencing based on the value of `component` for the current fragment and its immediate neighbor(s)."],["ddx_fine_vector","Returns the partial derivative of `component` with respect to the window’s X coordinate. Uses local differencing based on the value of `component` for the current fragment and its immediate neighbor(s)."],["ddx_vector","Returns the partial derivative of `component` with respect to the window’s X coordinate. Returns the same result as either [`ddx_fine`] or [`ddx_coarse`], selection of which one is dependent on external factors."],["ddy","Returns the partial derivative of `component` with respect to the window’s Y coordinate. Returns the same result as either [`ddy_fine`] or [`ddy_coarse`], selection of which one is dependent on external factors."],["ddy_coarse","Returns the partial derivative of `component` with respect to the window’s Y coordinate. Uses local differencing based on the value of `component` for the current fragment’s neighbors, and possibly, but not necessarily, includes the value of `component` for the current fragment. That is, over a given area, the implementation can compute Y derivatives in fewer unique locations than would be allowed by [`ddy_fine`]."],["ddy_coarse_vector","Returns the partial derivative of `component` with respect to the window’s Y coordinate. Uses local differencing based on the value of `component` for the current fragment’s neighbors, and possibly, but not necessarily, includes the value of `component` for the current fragment. That is, over a given area, the implementation can compute Y derivatives in fewer unique locations than would be allowed by [`ddy_fine`]."],["ddy_fine","Returns the partial derivative of `component` with respect to the window’s Y coordinate. Uses local differencing based on the value of `component` for the current fragment and its immediate neighbor(s)."],["ddy_fine_vector","Returns the partial derivative of `component` with respect to the window’s Y coordinate. Uses local differencing based on the value of `component` for the current fragment and its immediate neighbor(s)."],["ddy_vector","Returns the partial derivative of `component` with respect to the window’s Y coordinate. Returns the same result as either [`ddy_fine`] or [`ddy_coarse`], selection of which one is dependent on external factors."],["demote_to_helper_invocation","Demote fragment shader invocation to a helper invocation. Equivalvent to `discard()` in HLSL. Any stores to memory after this instruction are suppressed and the fragment does not write outputs to the framebuffer."],["device_memory_barrier","Blocks execution of all threads in a group until all device memory accesses have been completed."],["device_memory_barrier_with_group_sync","Blocks execution of all threads in a group until all device memory accesses have been completed and all threads in the group have reached this call."],["emit_stream_vertex","Emits the current values of all output variables to the current output primitive. After execution, the values of all output variables are undefined."],["emit_vertex","Emits the current values of all output variables to the current output primitive. After execution, the values of all output variables are undefined.  Requires capability `Geometry`."],["end_primitive","Finish the current primitive and start a new one. No vertex is emitted. Requires capability `Geometry`."],["end_stream_primitive","Finish the current primitive and start a new one. No vertex is emitted."],["execute_callable","Invoke a callable shader."],["fwidth","Returns the sum of the absolute values of [`ddx`] and [`ddy`] as a single operation."],["fwidth_coarse","Returns the sum of the absolute values of [`ddx_coarse`] and [`ddy_coarse`] as a single operation."],["fwidth_coarse_vector","Returns the sum of the absolute values of [`ddx_coarse`] and [`ddy_coarse`] as a single operation."],["fwidth_fine","Returns the sum of the absolute values of [`ddx_fine`] and [`ddy_fine`] as a single operation."],["fwidth_fine_vector","Returns the sum of the absolute values of [`ddx_fine`] and [`ddy_fine`] as a single operation."],["fwidth_vector","Returns the sum of the absolute values of [`ddx`] and [`ddy`] as a single operation."],["ignore_intersection","Ignores the current potential intersection, terminating the invocation that executes it, and continues the ray traversal.  This instruction is allowed only in `any_hit` execution model."],["is_helper_invocation","Returns `true` if the invocation is currently a helper invocation, otherwise result is `false`. An invocation is currently a helper invocation if it was originally invoked as a helper invocation or if it has been demoted to a helper invocation by [demote_to_helper_invocation]."],["kill","Fragment-shader discard. Equivalvent to `discard()` from GLSL"],["memory_barrier","Control the order that memory accesses are observed."],["report_intersection","Reports an intersection back to the traversal infrastructure."],["signed_max","Compute the maximum of two signed integers via a GLSL extended instruction."],["signed_min","Compute the minimum of two signed integers via a GLSL extended instruction."],["terminate_ray","Terminates the invocation that executes it, stops the ray traversal, accepts the current hit, and invokes the `closest_hit` execution model (if active). This instruction is allowed only in the `any_hit` execution model."],["unsigned_max","Compute the maximum of two unsigned integers via a GLSL extended instruction."],["unsigned_min","Compute the minimum of two unsigned integers via a GLSL extended instruction."],["vector_extract_dynamic","Extract a single, dynamically selected, component of a vector."],["vector_insert_dynamic","Make a copy of a vector, with a single, variably selected, component modified."],["workgroup_memory_barrier","Blocks execution of all threads in a group until all group shared accesses have been completed."],["workgroup_memory_barrier_with_group_sync","Blocks execution of all threads in a group until all group shared accesses have been completed and all threads in the group have reached this call."]],"trait":[["IndexUnchecked","Index into an array without bounds checking."]]});