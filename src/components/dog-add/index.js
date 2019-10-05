import React, { Component } from 'react';
import axios from 'axios';
import EclipseWidget from '../eclipse';
//import map from 'lodash/map';
class DogAddPage extends Component {
    state = {
        breed: '',
        breeds: [],
        loading: false,
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            breeds: nextProps.breeds
        };
    }
    addDogSubmitForm=(e) =>
    {
        e.preventDefault();
        const urlAddDog='https://localhost:44301/api/dog/create';
        this.setState({loading: true});
        axios.post(urlAddDog).then(
            (resp) => { 
                console.log('-----axios res add dog-----', resp);
                this.setState({breed: '', loading: false});
            }
        );

        //console.log('Submit form');
    }
    render() {
        console.log('---this props dog-add----', this.props);
        console.log('----add dog state----', this.state);
        const { breeds } = this.state;
        const options = breeds.map(t =>
            <option key={t.id} value={t.id}>{t.name}</option>
        );

        return (
            <React.Fragment>
                <div className="container">
                    <form onSubmit={this.addDogSubmitForm}>
                        <h1>Add new Dog</h1>
                        <div className="form-group">
                            <label for="breed">Порода собаки</label>
                            <select
                                className="form-control"
                                id="breed"
                                name="breed"
                                onChange={this.onChange}
                                value={this.state.breed}
                            >
                                <option value="" disabled>Оберіть породу для собаки</option>
                                {options}
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Додати пса</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default DogAddPage;