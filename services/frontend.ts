import { ComponentResource, CustomResourceOptions, getStack } from "@pulumi/pulumi";
import {FmBucket} from "../resources/bucket";
type FmFrontendArgs = {
    Name: string;
    Product: string;
};


export class FmFrontend extends ComponentResource {
    constructor(args: FmFrontendArgs, opts?: CustomResourceOptions ) {
        const resourceName = `${args.Name}-${args.Product}`

        super("pkg:index:FmFrontend", resourceName, {}, {});

        const source = new FmBucket({
            Name: args.Name,
            Product: args.Product,
            Public: true,
        }, {parent: this});
        
        const replica = new FmBucket({
            Name: `${args.Name}-replica`,
            Product: args.Product,
        }, {parent: this});
    }
}