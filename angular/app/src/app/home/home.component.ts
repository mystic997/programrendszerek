import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ConnectionService } from '../utils/connection.service';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private connectionService: ConnectionService, private router: Router, private afs: AngularFirestore) {
    
  }

  title = 'Home';

  dataObserver: Subscription | null = null;

  goToAboutPage() {
    this.router.navigate(['/second', 'Szedlacsek Balázs', {message: this.title}]);
  }

  ngOnInit(): void {
    
  }

}
