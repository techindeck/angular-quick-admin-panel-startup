import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'nav-user-profile',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <app-card class="profile-card">
      <div class="card-image">
        <img src="/assets/images/john-doe.png" alt="" />
      </div>
      <div class="card-body">
        <h1 class="name">Amit</h1>
        <p class="email text-muted">amit@techindeck.com</p>
        <p class="subscricption text-black">Administrator</p>
      </div>
      <div class="card-footer bg-transparent">
        <button class="btn btn-outline-kohl">Sign out</button>
      </div>
    </app-card>
  `,
  styles: [
    `
      .profile-card {
        grid-column: 1/5;
        backdrop-filter: blur(15px) saturate(86%);
        background: radial-gradient(
          circle at 100% 0,
          hsla(0, 0%, 100%, 0.85) 0,
          hsla(0, 0%, 96.1%, 0.13) 183%
        );
        .card-image {
          background-size: content;
          background-image: url(/assets/images/profile-background.svg);
          background-position: left top;
          background-repeat: no-repeat;
          height: 200px;
          padding: 1.5rem;
        }

        .card-image img {
          margin-top: 1rem;
          height: 120px;
          width: auto;
          border-radius: 50%;
        }
        .card-body {
          .email,
          .subscricption {
            font-size: 16px;
          }
          .name {
            font-size: 30px;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }

          .subscricption {
            font-weight: 500;
          }

          .email {
            margin-bottom: 0.7rem;
            margin-top: 0.7rem;
          }
        }
      }
    `,
  ],
})
export class NavUserProfileComponent {}
