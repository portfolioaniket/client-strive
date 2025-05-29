import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../_models/client.model';
import { ClientService } from '../../services/client.service';
import { CLIENT } from '../../_const/client.const';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  tableConst = CLIENT.TABLE_INFO;
  isLoading: boolean = false;
  route = inject(Router);
  activatedRoute = inject(ActivatedRoute)
  clientList: Client[] = [];
  clientService = inject(ClientService);
  ngOnInit(): void {
    this.getAllClient();

  }

  getAllClient() {
    this.isLoading = true;
    this.clientService.getAllClients().subscribe(
      (res) => {
        this.clientList = res.data;
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }
  navigateToAddClient() {
    this.route.navigate(['client/add']);
  }
  navigateToEditClient(id: number) {
    this.route.navigate([`client/${id}`]);
  }
}
