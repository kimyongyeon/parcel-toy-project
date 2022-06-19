import {AddType, ModelInter, ViewInter} from "./controller";
import View from "./view";

export interface Member {
    name: string;
    phone: number;
    add: string;
}

export default class Model implements ModelInter {

    public member?: Member;
    private view?: ViewInter;

    private constructor() {
    }

    public static createMemberModel() {
        return new Model();
    }

    setView(view: View) {
        this.view = view;
        return this;
    }

    /**
     * 데이터가 바뀌면 render를 위한 준비를 알린다.
     * @param member
     */
    setMember(member: Member) {
        this.member = member;
        // view를 호출한다.
        this.view?.draw(this.member);
        return this;
    }

    trigger(): void {
        console.log("이벤트를 구현 하시오.");
    }

    add(addType: AddType): number {
        return addType.a + addType.b;
    }

}

