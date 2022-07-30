import React from 'react'
import { Picker as SelectPicker } from '@react-native-picker/picker';
const BrandComponent = () => {
    const [selectedValue, setSelectedValue] = React.useState('Brand');
    return (
        <SelectPicker
            selectedValue={selectedValue}
            style={{ height: 50, width: 100 + '%' }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            mode={'dropdown'}
            dropdownIconColor={'black'}
            prompt="Brand"
            dropdownIconRippleColor={'black'}
            onSe
        >
            <SelectPicker.Item label="Brand" value="Brand" />
            <SelectPicker.Item label="Cloth" value="Cloth" />
            <SelectPicker.Item label="Shoes" value="Shoes" />
        </SelectPicker>
    )
}

export default BrandComponent