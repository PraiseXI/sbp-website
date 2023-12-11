const transition = {duration: 0.75, ease: [0.76, 0, 0.24, 1]}

export const opacity = {
  intial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
};

export const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: "auto",
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};
export const translate = {
  initial: {
    y: "100%",
    opacity: 0
  },
  enter: (i: number[]) => ({
    y: 0,
    opacity: 1,
    transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0]}
  }),
  exit: (i: number[]) => ({
    y: "100%",
    opacity: 0,
    transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1]}
})
};