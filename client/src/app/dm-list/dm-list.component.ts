import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-dm-list',
  templateUrl: './dm-list.component.html',
  styleUrls: ['./dm-list.component.scss']
})
export class DmListComponent implements OnInit {
  dmUserList: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<DmListComponent>,
    @Inject(MAT_DIALOG_DATA) public screen_name: string,
    private router: Router,
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.getDmUserList();
  }

  getDmUserList(): void {
    this.chatService.getdmUserList(this.screen_name)
    .subscribe(dmUserList => this.dmUserList = dmUserList);
  }

  onDM(dmUser: string): void {
    this.router.navigate([`/home/dm/${this.screen_name}/${dmUser}`]);
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
