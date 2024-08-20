interface CirelesProgressProp {
    percent: number
}
const CirelesProgress : React.FC<CirelesProgressProp> = ({percent}) => {
    return ( 
        <div className="relative flex items-center justify-center">
        <svg className="transform w-52 h-52 flex items-center justify-center">
          <circle
            cx="104"
            cy="104"
            r="90"
            stroke="currentColor"
            stroke-width="20"
            fill="transparent"
            className="text-gray-700"
          />
          <circle
            cx="104" //Vị trí x của hình trong bằng 1 nửa so với chiều rộng của thẻ svg
            cy="104" //Vị trí x của hình trong bằng 1 nửa so với chiều rộng của thẻ svg
            r="90" //Chu vi của hình tròn 
            stroke="currentColor"
            stroke-width="20"
            fill="transparent"
            stroke-dasharray="565" //chu vi ước lượng của hình tròn 2 * 3.14 * r
            stroke-dashoffset={`${(1-(percent/100))*565}`} //Phần trăm của hình tròn (1 - số phần trăm) * stroke-dasharray
            className="text-[#00A751]"
          />
        </svg>
        <span className="absolute text-3xl">{percent} / 100</span>
      </div>
     );
}

export default CirelesProgress;