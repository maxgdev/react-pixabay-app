import React, { Component } from 'react'
import TextField            from 'material-ui/TextField';
import SelectField          from 'material-ui/SelectField';
import MenuItem             from 'material-ui/MenuItem';
import axios                from 'axios';
import ImageResults         from '../ImageResults';

class Search extends Component {

    state = {
        searchText: "",
        amount: 15,
        images: [],
        apiUrl: 'https://pixabay.com/api',
        apikey: '15320395-fbf03de3cbc3b1a8cf35eb390'
    }

    onTextChange = (e) => {
        const val = e.target.value;
        this.setState(
            { searchText: e.target.value}, 
            ()=> {
                if (val === '') {
                    this.setState({images: []});
                } else {
                    axios.get(`${this.state.apiUrl}/?key=${this.state.apikey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                    .then(res => this.setState({ images: res.data.hits}))
                    .catch( err => console.log(err));
                }
        });

    };

    onAmountChange = (e, index, value) => {
        this.setState({ amount: value});
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <TextField 
                    name="SearchText"
                    floatingLabelText="Type here to search for Images"
                    fullWidth={true}
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                />
                <br />
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                >
                    <MenuItem value={5} primaryText="5"/>
                    <MenuItem value={10} primaryText="10"/>
                    <MenuItem value={15} primaryText="15"/>
                    <MenuItem value={30} primaryText="30"/>
                    <MenuItem value={50} primaryText="50"/>
                </SelectField>
                <br />
                {this.state.images.length > 0 ? <ImageResults images={this.state.images} /> : null }
            </div>
        )
    }
}
export default Search;