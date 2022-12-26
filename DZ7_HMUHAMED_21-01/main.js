class Cars {
    constructor(options){
        this.model=options.model
        this.color=options.color
        this.wheels=options.wheels
        this.engineSize=options.engineSize
    }
    start(){
        console.log('Машина заведена')
    }
}
// 1
class Mersedes extends Cars{
    static type ='MERSEDES'
    constructor(options){
        super(options)
    }
}
const Mers=new Mersedes({
    model:'210',
    color:'white',
    wheels:'4',
    engineSize:'5.5',
})
Mers.start()
console.log(Mers)
// 2
class Lexus extends Cars{
    static type ='LEXUS'
    constructor(options){
        super(options)
    }
}
const Lexs=new Lexus({
    model:'570',
    color:'white',
    wheels:'4',
    engineSize:'5.7',
})
Lexs.start()
console.log(Lexs)
// 3
class Toyota extends Cars{
    static type ='TOYOTA'
    constructor(options){
        super(options)
    }
}
const Toyo=new Toyota({
    model:'200',
    color:'black',
    wheels:'4',
    engineSize:'4.0',
})
Toyo.start()
console.log(Toyo)

// class Component {
//     constructor(selector) {
//         this.$element = document.querySelector(selector)
//     }

//     hide() {
//         this.$element.style.display = 'none'
//     }

//     show() {
//         this.$element.style.display = 'block'
//     }
// }

// class Block extends Component {
//     constructor(options) {
//         super(options.selector);

//         this.$element.style.width = this.$element.style.height = options.abai + 'px'
//         this.$element.style.background = options.color
//     }


// }

// const block1 = new Block({
//     selector: '#block1',
//     abai: 150,
//     color: 'blue'
// })
// const block2=new Block({
//     selector:'#block2',
//     abai:200,
//     color:'red'
// })
// class Circle extends Block {
//     constructor(options) {
//         super(options);
//         this.$element.style.borderRadius = '50%'
//     }
// }
// const circle = new Circle({
//     selector:'.circle',
//     abai:90,
//     color:'green',
// })
// circle.hide()
// circle.show()