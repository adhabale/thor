import { Observable } from 'rxjs/Rx';

export class AnnouncementModel {
announcement;
    constructor() {
    }
    setAnnouncementDetails(value) {
        this.announcement = value;
    }

    getAnnouncementDetails() {
        return this.announcement;
    }
}