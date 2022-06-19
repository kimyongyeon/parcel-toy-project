import {ViewInter} from "./controller";
import {Member} from "./model";

export default class View implements ViewInter {
    on(): void {
        console.log("뷰를 구현하시오.")
    }

    draw(member: Member): void {
        console.log(`member: ${member}`)
    }

}
