import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../../node_modules/jquery/dist/jquery.js'
import background from './glassesImage/background.jpg'


export default class BaiTap2 extends React.Component {
    state = {
        ArrItem: [
            {
                id: 1,
                image: "./glassesImage/g1.jpg",
                price: 30,
                name: "GUCCI G8850U",
                url: "./glassesImage/v1.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                id: 2,
                image: "./glassesImage/g2.jpg",
                price: 50,
                name: "GUCCI G8759H",
                url: "./glassesImage/v2.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                id: 3,
                image: "./glassesImage/g3.jpg",
                price: 30,
                name: "DIOR D6700HQ",
                url: "./glassesImage/v3.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                id: 4,
                image: "./glassesImage/g4.jpg",
                price: 70,
                name: "DIOR D6005U",
                url: "./glassesImage/v4.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                id: 5,
                image: "./glassesImage/g5.jpg",
                price: 40,
                name: "PRADA P8750",
                url: "./glassesImage/v5.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                id: 6,
                image: "./glassesImage/g6.jpg",
                price: 60,
                name: "PRADA P9700",
                url: "./glassesImage/v6.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                id: 7,
                image: "./glassesImage/g7.jpg",
                price: 80,
                name: "FENDI F8750",
                url: "./glassesImage/v7.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                id: 8,
                image: "./glassesImage/g8.jpg",
                price: 100,
                name: "FENDI F8500",
                url: "./glassesImage/v8.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                id: 9,
                image: "./glassesImage/g9.jpg",
                price: 60,
                name: "FENDI F4300",
                url: "./glassesImage/v9.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            }
        ]

    }
    handleItem = (id) => {
        let newArr = this.state.ArrItem
        let Item = newArr.filter((newArr) => newArr.id === id)
        let newImg = Item[0].url
        // let imgs = document.querySelectorAll('img#tryGlass')
        document.getElementById('tryGlass').setAttribute('src', require(`${newImg}`))
        console.log(newImg);
    }
    render() {
        let { ArrItem } = this.state;
        return (
            <>
                <div>
                    <h1 style={{ margin: '0', backgroundColor: 'rgba(0,0,0,0.4)', textAlign: 'center', color: 'white', padding: '20px', position: 'fixed', width: '100%' }}>TRY GLASSES APP ONLINE</h1>
                </div>

                <div style={{ backgroundImage: `url(${background})`, height: '1000px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%' }}>
                    <div className="" style={{ position: 'relative', backgroundColor: 'rgba(0,0,0,0.3)', height: '100%' }}>
                        <div className="container py-5">
                            <div className="row py-5">
                                <div className="col-6 py-5">
                                    <img  src={require('./glassesImage/model.jpg')} style={{ width: '50%', position: 'relative' }} />
                                    <img id="tryGlass" style={{ width: '25%', position: 'absolute', left: '79px', right: '15px', top: '136px' }} />
                                </div>
                                <div className="col-6 py-5" style={{ backgroundColor: 'white', height: '50%' }}>

                                    {ArrItem.map((item, index) => {
                                        return (
                                            <img
                                                onClick={() => this.handleItem(item.id)}
                                                key={item.id} src={require(`${item.image}`)} style={{ width: '20%', margin: '0 5px 5px 0', height: '80px', border: '1px solid', cursor: 'pointer' }}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}