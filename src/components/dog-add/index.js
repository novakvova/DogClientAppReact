import React, { Component } from 'react';
import map from 'lodash/map';
class DogAddPage extends Component {
    state = {
        breed: '',
        breeds: []
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    static getDerivedStateFromProps(nextProps, prevState) {
          return {
            breeds: nextProps.breeds
          };
      }
    render() {
        console.log('---this props dog-add----', this.props);
        console.log('----add dog state----', this.state);
        const {breeds} = this.state;
        // const timezones = {
        //     "1": "222",
        //     "2": "hello",
        // }; 
        // const options = map(timezones, (val, key) =>
        //     <option key={key} value={key}>{val}</option>
        // );
        // const timezones = [{
        //     id: "1",
        //     name: "222"
        // },
        // {
        //     id:"2",
        //     name: "hello"
        // }];

        // const options = timezones.map(t =>
        //     <option key={t.id} value={t.id}>{t.name}</option>
        // );

        const options = breeds.map(t =>
            <option key={t.id} value={t.id}>{t.name}</option>
        );

        return (
            <React.Fragment>
                <h1>Add new Dog</h1>
                <select
                    className="form-control"
                    name="breed"
                    onChange={this.onChange}
                    value={this.state.timezone}
                >
                    <option value="" disabled>Choose Your Timezone</option>
                    {options}
                </select>
            </React.Fragment>
        );
    }
}

export default DogAddPage;