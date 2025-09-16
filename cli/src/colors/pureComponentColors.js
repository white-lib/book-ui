import { Colors } from "./colors";
export class PureComponentColors extends Colors {
    constructor({ shade, override, } = {}) {
        super(shade, override);
        this.colors = this.create();
    }
}
//# sourceMappingURL=pureComponentColors.js.map