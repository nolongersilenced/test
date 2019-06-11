import React, {Component} from 'react';
import './Home.css';
import lh1 from '../images/lh1.JPG';
import lh2 from '../images/lh5.JPG';
import lh3 from '../images/lh9.JPG';
import lh4 from '../images/lh12.JPG';
import cl1 from '../images/cl1.JPG';
import cl2 from '../images/cl2.JPG';
import cl3 from '../images/cl3.JPG';
import cl4 from '../images/cl7.JPG';
import man2 from "../images/man2.png";
import m6 from "../images/m6.png";



let images = [lh1, lh2, lh3, lh4, cl1, cl2, cl3, cl4]
let voices = [
                {
                    "name": "Voice 1",
                    "profilePic": man2,
                    "art": [
                        {
                            "name": "Lighthouse",
                            "pictures": [lh1, lh2, lh3, lh4]
                        }
                    ]
                },
                {
                    "name": "Voice 2",
                    "profilePic": m6,
                    "art": [
                        {
                            "name": "Clock",
                            "pictures": [cl1, cl2, cl3, cl4]
                        }
                    ]
                }
]

class Home extends Component {
    state = {
        bigPictures: []
    }

    componentDidMount = () => {
        let images = ["null"]
        voices.forEach(voice => {
            voice.art.forEach(item => {
                images.push(0)
            })
        })
        this.setState({bigPictures: images})
    }

    showLarge = () => {

    }

    showPhotos = (pics) => {
        let count = 0
        return pics.map(pic => {
            count += 1
            return <img className="art" key={count} src={pic} alt="Art"/>
        })
    }

    showArtist = () => {
        let count = 0
        let bigPics = this.state.bigPictures
        return voices.map(voice => {
            count += 1
            let picIndex = bigPics[count]
            let currentArt = voice.art.length - 1
            let currentProject = voice.art[currentArt]
            let photo = currentProject.pictures[picIndex]
            return  <div className="artist-div" key={count}>
                        <h2 className="artist-name">
                            <img className="artist-pic" src={voice.profilePic} key={voice.name}/>
                            {voice.name}
                        </h2>
                        <h3 className="art-name">{voice.art[voice.art.length - 1].name}</h3>
                        <img className="big-picture" src={photo} alt="Big Picture"/>
                        <section className="small-photo-div">
                            {this.showPhotos(voice.art[voice.art.length - 1].pictures)}
                        </section>

                    </div>
        })
    }

    render () {
        return (
                    <div className="appBody">
                        <div className="photoDiv">
                            {this.showArtist()}
                        </div>
                    </div>
        )
    }
}

export default Home;