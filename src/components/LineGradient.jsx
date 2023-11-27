
const LineGradient = ({ width = 'w-full' }) => {
  //al elemento semantico llamado HR le agregamos una solucion con este div cerrado en el componente
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;
}

export default LineGradient