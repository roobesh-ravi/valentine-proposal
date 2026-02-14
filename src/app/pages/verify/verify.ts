import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './verify.html',
  styleUrl: './verify.css'
})

export class Verify {

  dob = '';
  anniversary = '';
  error = false;

  constructor(private router: Router) { }

  verify() {

    const correctDob = '2005-09-10';
    const correctAnniversary = '2024-12-25';

    if (this.dob === correctDob && this.anniversary === correctAnniversary) {
      const result = alert("Shuttumani detected. Thookunga daw chellatha!");
      this.router.navigate(['/valentine']);
    } else {
      this.error = true;
    }

  }
  
}
