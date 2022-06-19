import Controller, {ModelInter, ViewInter} from "./controller";
import Model from "./model";
import View from "./view";

export default class FactoryInstance {
    static createController(): Controller {
        return new Controller(this.createModel(), this.createView());
    }

    static createModel(): ModelInter {
        /**
         * 모델을 만들고, 필요한 속성을 주입한다.
         */
        const m = Model.createMemberModel();
        m.setView(this.createView())
            .setMember({name: "kkkk", add: "123123123", phone:123123123});
        // m.setMember({name: "kkkk", add: "123123123", phone:123123123});
        return m;
    }

    static createView(): ViewInter {
        return new View();
    }
}
