import { Component, inject, input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditEmailModal } from '../../../../../shared/components/comman/modal/edit-email-modal/edit-email-modal';
import { EditPasswordModal } from '../../../../../shared/components/comman/modal/edit-password-modal/edit-password-modal';
import { EditPhoneModal } from '../../../../../shared/components/comman/modal/edit-phone-modal/edit-phone-modal';
import { UserProfileEditModal } from '../../../../../shared/components/comman/modal/user-profile-edit-modal/user-profile-edit-modal';
import { userProfile } from '../../../../../shared/interface/pages';

@Component({
    selector: 'app-user-dashboard-profile',
    templateUrl: './user-dashboard-profile.html',
    styleUrl: './user-dashboard-profile.scss',
    
})
export class UserDashboardProfile {

  readonly userProfile = input<userProfile[]>();

  private modal = inject(NgbModal); 

  openModal(value: string){
    if(value == 'profile-edit'){
      this.modal.open(UserProfileEditModal, { size: 'lg', centered: true, windowClass: 'edit-profile-modal'})
    }else if(value == 'edit-email'){
      this.modal.open(EditEmailModal, { size: 'm', centered: true, windowClass: 'edit-profile-modal'})
    }else if(value == 'edit-phone'){
      this.modal.open(EditPhoneModal, { size: 'm', centered: true, windowClass: 'edit-profile-modal'})
    }else if(value == 'edit-password'){
      this.modal.open(EditPasswordModal, { size: 'm', centered: true, windowClass: 'edit-profile-modal'})
    }
  }
}
