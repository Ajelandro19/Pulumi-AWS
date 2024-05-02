import { ComponentResource, CustomResourceOptions, getStack } from "@pulumi/pulumi";
import {FmBucket} from "../resources/bucket";
import { FmDockerImageRepo } from "../resources/ecr-repository";
type FmBackendArgs = {
    Name: string;
    Product: string;
};


export class FmBackend extends ComponentResource {
    constructor(args: FmBackendArgs, opts?: CustomResourceOptions ) {
        const resourceName = `${args.Name}-${args.Product}`

        super("pkg:index:FmBackend", resourceName, {}, {});
        
        new FmDockerImageRepo({
            Name: args.Name,
            Product: args.Product,
        }, {parent: this});
    }
}