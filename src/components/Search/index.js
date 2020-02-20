import React, { Component } from 'react'
import TextField            from 'material-ui/TextField';
import SelectField          from 'material-ui/SelectField';
import MenuItem             from 'material-ui/MenuItem';
import axios                from 'axios';
// import ImageResults         from '../ImageResults';

class Search extends Component {

    render() {
        return (
            <div>
                <TextField />
                <br />
                <SelectField>
                    <MenuItem value={5} primaryText="5"/>
                    <MenuItem value={10} primaryText="10"/>
                    <MenuItem value={15} primaryText="15"/>
                    <MenuItem value={30} primaryText="30"/>
                    <MenuItem value={50} primaryText="50"/>
                </SelectField>
                <br />
                <p>Results go here</p>
            </div>
        )
    }
}
export default Search;