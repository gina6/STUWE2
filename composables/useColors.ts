export default function () {
  const colors = reactive([
    `#00C2D7`,
    `#FF2281`,
    `#FF5F1F`,
    `#65ED4B`
  ]) 

  return useState<object>('colors', () => colors)
}