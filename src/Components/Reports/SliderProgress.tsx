import {
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
  } from "@chakra-ui/react";
interface SilderProgressProps {
    percent: number
}
const SliderProgress:React.FC<SilderProgressProps> = ({percent}) => {
  return (
    <Slider
        defaultValue={percent}
        min={0}
        max={100}
        w={300}
        isDisabled
        _disabled={{
          '& .chakra-slider-thumb': {
            bg: '#00A751', // Màu sắc của SliderThumb
            borderColor: '#00A751', // Đảm bảo viền của SliderThumb có màu giống như màu nền
          },
          '& .chakra-slider-track': {
            bg: '#D9D9D9', // Màu sắc của SliderTrack
          },
          '& .chakra-slider-filled-track': {
            bg: '#00A751', // Màu sắc của SliderFilledTrack
          },
        }}
      >
        <SliderTrack
          bg="#D9D9D9"
          h={"25px"}
          style={{ borderRadius: "20px"}}
        >
          <SliderFilledTrack style={{backgroundColor: "#00A751"}} />
        </SliderTrack>
        <SliderThumb boxSize={10} style={{backgroundColor: "#00A751"}}>
          <p className=" text-white">{percent}</p>
        </SliderThumb>
      </Slider>
  )
};

export default SliderProgress;
