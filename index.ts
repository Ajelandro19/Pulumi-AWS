import { FmFrontend } from './services/frontend';
import { FmBackend } from './services/backend';

function main() {
    new FmBackend({
        Name: "example",
        Product: "devops-course",
    });

    new FmFrontend({
        Name: "example",
        Product: "devops-course",
    });
}

main();
