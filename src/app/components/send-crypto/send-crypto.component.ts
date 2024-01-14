import { Component, EventEmitter, Output } from '@angular/core';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-send-crypto',
  templateUrl: './send-crypto.component.html',
  styleUrls: ['./send-crypto.component.scss']
})
export class SendCryptoComponent {

  recipientAddress: string = '';
  userId: string = '';
  amount: number = 0;

  @Output() onSend = new EventEmitter<void>();

  constructor(private walletService: WalletService) { }

  sendCrypto(): void {

    this.walletService.sendCrypto({
      RecipientEmail: this.recipientAddress,
      UserId: this.userId,
      Amount: this.amount
    }).subscribe(response =>
    {
      console.log(response);
      this.onSend.emit();
    });

    //this.onSend.emit();
  }

}
