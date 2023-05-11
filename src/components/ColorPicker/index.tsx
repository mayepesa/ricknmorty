import { useState } from "react";
import { ChromePicker } from "react-color";
import { ColorPickerWrapper, StyledColorpicker } from "./style";

type Props = {
  color: string;
  setColor: (color: string) => void;
};

const ColorPicker = ({ color, setColor }: Props) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleChangecomplete = (color: string) => {
    console.log(color);
    setColor(color);
  };

  return (
    <ColorPickerWrapper
      color={color}
      onClick={() => setShowColorPicker(true)}
      tabIndex={0}
      onBlur={() => setShowColorPicker(false)}
    >
      {showColorPicker && (
        <StyledColorpicker>
          <ChromePicker
            color={color}
            onChangeComplete={(e) => handleChangecomplete(e.hex)}
          />
        </StyledColorpicker>
      )}
    </ColorPickerWrapper>
  );
};

export default ColorPicker;
