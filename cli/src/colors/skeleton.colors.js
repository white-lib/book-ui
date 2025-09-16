import { PureComponentColors, } from "./pureComponentColors";
export class SkeletonColors extends PureComponentColors {
    create() {
        return {
            light: {
                skeletonColor1: {
                    type: "gray",
                    shade: 100,
                },
                skeletonColor2: {
                    type: "gray",
                    shade: 200,
                },
            },
            dark: {
                skeletonColor1: {
                    type: "gray",
                    shade: 800,
                },
                skeletonColor2: {
                    type: "gray",
                    shade: 900,
                },
            },
        };
    }
}
//# sourceMappingURL=skeleton.colors.js.map