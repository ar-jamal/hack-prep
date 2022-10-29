import * as React from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import { useState } from 'react';
import Data from "../Data"


export default function SelectOptions(props) {
    const [listData, setListData] = useState(Data)
    const [filterList, setFilterList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()

    return (
        <FormControl required className='Selection'>
            <InputLabel id='demo-simple-select-required-label'>Category</InputLabel>
            <Select
                labelId='demo-simple-select-required-label'
                id='demo-simple-select-required'
                label='category *'
                onChange={props.onChange}
                value={props.value}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="men's clothing">mens clothing</MenuItem>
                <MenuItem value="jewelery">jewelery</MenuItem>
                <MenuItem value="electronics">electronics</MenuItem>
                <MenuItem value="women's clothing">womens clothing</MenuItem>
            </Select>
        </FormControl>
    )
}