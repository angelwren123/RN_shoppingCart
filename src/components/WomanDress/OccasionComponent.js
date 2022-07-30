import React from 'react'
import { Picker as SelectPicker } from '@react-native-picker/picker';

const OccasionComponent = (props) => {
    const {dataFilters, setDataFilters} = props
    const [selectedValue, setSelectedValue] = React.useState('OCCASION');
    const selectOccasion = [
        "OCCASION","SPRING","SUMMER","WINTER", "FALL"
    ]
    return (
        <SelectPicker
            selectedValue={selectedValue}
            style={{ height: 50, width: 100 + '%', }}
            onValueChange={(itemValue, itemIndex) => {
                (setSelectedValue(itemValue))
                const check = dataFilters.every((filter, idx) => {
                    return filter !== itemValue
                })
                if (check) {
                    setDataFilters([...dataFilters, `${itemValue}`])
                }
            }}
            mode={'dialog'}
            dropdownIconColor={'black'}
            prompt="Occasion"
            dropdownIconRippleColor={'black'}
        >
           {selectOccasion.map((item,idx)=>{
            return  <SelectPicker.Item key={idx} label={item} value={item} />
           })}
            
        </SelectPicker>
    )
}

export default OccasionComponent