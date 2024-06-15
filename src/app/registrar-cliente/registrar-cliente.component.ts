import { Component } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent {
  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService) { }

  registrarCliente() {
    this.clienteService.registrarCliente(this.cliente).subscribe(
      response => {
        console.log('Cliente registrado:', response);
        alert('Se registró con éxito');
      },
      error => {
        console.error('Error al registrar cliente:', error);
        alert('Hubo un error al registrar el cliente');
      }
    );
  }
}
