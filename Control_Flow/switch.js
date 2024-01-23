let a=2;
let b=3;
let c=7;

function example(val){
    switch(val) {
        case 1:
            console.log("A : "+val)
            break;
            case 2:
                console.log("B : "+val)
                break;
                case 3:
                    console.log("C : "+val)
                    break;
                    default:
                        console.log(val+" : default")
                        break;
    }
}

example(a);
example(b);
example(c);