type AnimCube3State = {
  uid: number;
  uid_active: Ref<number, number>;
  n_mouse_down: Ref<number, number>;
  actions: {
    removeListeners: () => void;
  };
};

declare module '@/assets/js/AnimCube3.js' {
  // Define the types for what AnimCube3.js exports
  const AnimCube3: (html_elt: HTMLElement, params: any) => AnimCube3State;
  export default AnimCube3;
}
