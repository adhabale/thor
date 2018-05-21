import { Observable } from 'rxjs/Rx';

export class ReferenceDocumentModel {
referenceDocument;
    constructor() {
    }
    setReferenceDocumentDetails(value) {
        this.referenceDocument = value;
    }

    getReferenceDocumentDetails() {
        return this.referenceDocument;
    }
}