import React, {Component} from 'react';
import './Home.css';
import lh1 from '../../images/lh1.JPG';
import lh2 from '../../images/lh5.JPG';
import lh3 from '../../images/lh9.JPG';
import lh4 from '../../images/lh12.JPG';
import cl1 from '../../images/cl1.JPG';
import cl2 from '../../images/cl2.JPG';
import cl3 from '../../images/cl3.JPG';
import cl4 from '../../images/cl7.JPG';



let images = [lh1, lh2, lh3, lh4, cl1, cl2, cl3, cl4]


class Home extends Component {

    tempPhotos = () => {
        let count = 0
        return images.map(pic => {
            count += 1
            return <img className="art" key={count} src={pic} alt="Art"/>
        })
    }

    render () {
        return (
                    <div className="appBody">
                        <h1 className="pageTitle">Currently Under Construction</h1>
                        <div className="photoDiv">
                            {this.tempPhotos()}
                        </div>
                    </div>
        )
    }
}

export default Home;