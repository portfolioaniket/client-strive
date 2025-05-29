import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HEADER } from '../../_GlobalConst';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 headerInfo = HEADER
}
