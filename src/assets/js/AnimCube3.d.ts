type AnimCube3State = {
  uid_active: number;
  n_mouse_down: Ref<number, number>;
  actions: {
    removeListeners: () => void;
    put_var: (v: string, val: string | number, type: 's' | 'n') => void;
    get_var: (v: string) => string | number;
    paint: () => void;
  };
};

declare module '@/assets/js/AnimCube3.js' {
  // Define the types for what AnimCube3.js exports
  const AnimCube3: (html_elt: HTMLElement, params: any) => AnimCube3State;
  export default AnimCube3;
}
