export const pxToRem = (targetPx, rootPx = 16) => `${targetPx / rootPx}rem`

export const remToPx = (targetRem, rootPx = 16) =>
  `${parseFloat(`${targetRem}`) * rootPx}px`
