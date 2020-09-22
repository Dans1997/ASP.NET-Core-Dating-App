import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {

    constructor() {}

    canDeactivate(component: MemberEditComponent): any {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to exit? All unsaved changes will be lost.');
        }
        return true;
    }
}