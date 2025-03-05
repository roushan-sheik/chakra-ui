export const keyframes = {
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  pulse: {
    '50%': { opacity: 0.5 },
  },
  ping: {
    '75%, 100%': { transform: 'scale(2)', opacity: 0 },
  },
  bounce: {
    '0%, 100%': { transform: 'translateY(-25%)' },
    '50%': { transform: 'translateY(0)' },
  },
  'fade-in': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  'fade-out': {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
  'slide-from-left-full': {
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
  },
  'slide-from-right-full': {
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0)' },
  },
  'slide-from-top-full': {
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0)' },
  },
  'slide-from-bottom-full': {
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' },
  },
  'slide-to-left-full': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(-100%)' },
  },
  'slide-to-right-full': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(100%)' },
  },
  'slide-to-top-full': {
    from: { transform: 'translateY(0)' },
    to: { transform: 'translateY(-100%)' },
  },
  'slide-to-bottom-full': {
    from: { transform: 'translateY(0)' },
    to: { transform: 'translateY(100%)' },
  },
  'scale-in': {
    from: { transform: 'scale(0.95)' },
    to: { transform: 'scale(1)' },
  },
  'scale-out': {
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(0.95)' },
  },
};
