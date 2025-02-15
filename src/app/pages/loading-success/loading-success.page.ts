import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-success',
  templateUrl: './loading-success.page.html',
  styleUrls: ['./loading-success.page.scss'],
  standalone: false,
})
export class LoadingSuccessPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }

}
